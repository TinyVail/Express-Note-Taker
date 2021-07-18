// requires
const path = require("path");
const router = require("express").Router();

// get the index file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// get the notes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// export
module.exports = router;
