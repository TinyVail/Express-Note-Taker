const router = require('express').Router();
const { checkingNotes: checkNotes } = require('../../library/notes');
const takingNotes = require('fs');
const path = require('path');
const note = require('../../db/db');


// viewing all notes 

router.get('/notes', function(req, res) {
  res.json(note);
})

// create a note

router.post('/notes', function(req, res) {
      let request = req.body
      if (checkNotes(request) === true) {
        note.push(request);
        res.json(note);
        takingNotes.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(note))
      } else {
        res.send(`there are no notes currently posted`)
      }
})


// deleting a note by id
router.delete('/note/:id', function(req, res) {

  let id = parseInt(req.params.id);
  const newResult = note.splice(id, 1);
  takingNotes.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(note))
  res.json(newResult);
})
module.exports = router;