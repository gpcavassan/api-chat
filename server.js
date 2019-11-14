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

var port = process.env.PORT || 8080
var server = app.listen(process.env.PORT, function () {

});