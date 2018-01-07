const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Note = mongoose.model('Note', new mongoose.Schema({
  task: { type: 'String', required: true },
  done: { type: 'Boolean', required: true },
}));

router.get('/', function(req, res) {
  Note.find()
  .then(function(notes) {
    res.send(notes);
  })
  .error(function(err) {
    throw err;
  });
});

router.post('/', function(req, res) {
  var note = new Note(req.body);
  note.save()
  .then(function(note) {
    Note.find()
    .then(function(notes) {
      res.send(notes);
    })
    .error(function(err) {
      throw err;
    });
  })
  .error(function(err) {
    throw err;
  });
});

module.exports = router;
