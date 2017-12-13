const express = require('express');
const fs = require('fs');
const mkdirp = require('mkdirp');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const notes = require('./routes/notes.js');

const app = express();

const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost';

mongoose.connect(mongoDB + '/notes', function(err) {
    if (err) {
      console.log("connection to mongo failed");
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + "/public/"));

app.use('/notes', notes);

app.listen(4000, function(){
  console.log("Server started at port 4000");
});
