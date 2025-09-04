const express = require("express");
const { getNotes, createNote, updateNote, deleteNote } = require("../controller/noteController");
const auth = require("../middleware/auth")
const notesRoutes = express.Router();

//here auth is used as middleware to verify token before accessing the controller function
notesRoutes.get("/",auth,getNotes);
notesRoutes.post("/",auth,createNote);
notesRoutes.put("/:id",auth,updateNote);
notesRoutes.delete("/:id",auth,deleteNote);

module.exports = notesRoutes;