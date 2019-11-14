var express = require('express');
var app = express();
var firebase = require('firebase');

var firebaseConfig = {
  apiKey: "AIzaSyBrw8Lx9jXwSOeRSq0x219i3CF_tVIxUiM",
  authDomain: "chat-5c83e.firebaseapp.com",
  databaseURL: "https://chat-5c83e.firebaseio.com",
  projectId: "chat-5c83e",
  storageBucket: "chat-5c83e.appspot.com",
  messagingSenderId: "651772955562",
  appId: "1:651772955562:web:7c7d9a33d1da509d9e79d3"
};

var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyBrw8Lx9jXwSOeRSq0x219i3CF_tVIxUiM",
  authDomain: "chat-5c83e.firebaseapp.com",
  databaseURL: "https://chat-5c83e.firebaseio.com",
  projectId: "chat-5c83e",
  storageBucket: "chat-5c83e.appspot.com",
  messagingSenderId: "651772955562"
};
firebase.initializeApp(config);

//Fetch instances
app.get('/', function (req, res) {

	console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/chat/");

	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
  		 });
});

//Create new instance
app.put('/', function (req, res) {

	console.log("HTTP Put Request");

	var userName = req.body.UserName;
	var msg = req.body.Msg;


	var referencePath = 'chat';
	var userReference = firebase.database().ref(referencePath);
	userReference.set({Usuario: name, Mensagem: msg}, 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			});
});

app.post('/', function (req, res) {
  console.log("HTTP POST Request");
  res.send("HTTP POST Request");  
});

app.delete('/', function (req, res) {
  console.log("HTTP DELETE Request");
  res.send("HTTP DELETE Request");
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});