
function checkingNotes(note) {
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    return true;
  }
  


  module.exports = { checkingNotes };