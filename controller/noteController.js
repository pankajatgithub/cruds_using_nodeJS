const { get } = require("mongoose");
const noteModel = require("../models/note");

const createNote = async(req,res)=>{

const {title, description} = req.body

const newNote = new noteModel({
    title:title,
    description:description,
    userId:req.userId
});

try {
await newNote.save();
return res.status(201).json(newNote);
} catch(error) {
    console.log(error);
    return res.status(500).json({message:"Something went wrong"});
}
};

const getNotes = async(req,res)=>{
console.log("get notes api called");
    try {
        
const notes = await noteModel.find({userId:req.userId});
return res.status(200).json(notes)


    } catch (error) {
        console.log(error);
   return  res.status(500).json({message:"Something went wrong"});
    }
};

const updateNote = async(req,res)=>{
const id = req.params.id;
const {title,description} =req.body;
const newNote = {
    title : title,
    description : description
};
try {
    await noteModel.findByIdAndUpdate(id,newNote,{new:true});
    return res.status(200).json(newNote)

} catch (error) {
     console.log(error);
    return res.status(500).json({message:"Something went wrong"});
}

};

const deleteNote = async(req,res)=>{
    const id = req.params.id;

    try {

     const note = await noteModel.findByIdAndDelete(id);
      console.log(note);
     return res.status(200).json(note)
        
    } catch (error) {
        console.log(error);
    return res.status(500).json({message:"Something went wrong"});
    }
}

module.exports = {createNote,getNotes,updateNote,deleteNote}