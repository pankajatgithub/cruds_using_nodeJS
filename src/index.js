const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const quotes = require("../quotes.json");
const userRoutes = require("../routes/userRoutes");
const notesRoutes = require("../routes/noteRoutes");
const PORT =  3000;
const dotenv = require("dotenv");
dotenv.config();


app.use(cors());


app.use(express.json());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

app.use("/hello",(req, res, next) => {
    res.send("hello from other side");
    // next();
});

 app.use("/users",userRoutes);
 app.use("/notes",notesRoutes)



 app.get("/quotes",(req,res)=>{
    res.status(200).json(quotes);
 })


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongoose connected");
     app.listen(PORT,()=>{
    console.log("Server started at port "+ PORT);
 });
}).catch((error)=>{
console.log("mongoose not conected due to "+error);
});