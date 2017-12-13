const express = require('express');
const fs = require('fs');
const mkdirp = require('mkdirp');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const mongoDB = 'mongodb://localhost:27017';

mongoose.connect(mongoDB + '/notes'); //Initate the connection with notes db

var note_Schema = mongoose.Schema({
	task: { type: 'String', required: true },
	done: { type: 'Boolean', required: false}
});						//Create the Basic Schema for Collection

var Note = mongoose.model('Notes', note_Schema); //Create a mongoose model for the desired Schema

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var notes = function(res){
	Note.find({}, '-_id task done', function(error, data){
        res.send(data);
        });					//Return all the notes from collection
}

// serve static content from under /public/ dir
app.use('/', express.static(__dirname + "/public/"));

app.post('/notes', function(req, res){

  var new_note = new Note({
	task: Object.values(req.body)[0],
	done: Object.values(req.body)[1]
  });						//Store the New note

  new_note.save(function(err) {
  if (err) throw err;
  notes(res);
  });

});

app.get('/notes', function(req, res){
	notes(res);
});

app.listen(4000, function(){
  console.log("Server started at port 4000");
});
