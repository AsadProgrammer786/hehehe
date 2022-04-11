const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 80;
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.warn("Server Has Started!");
});
mongoose.connect('mongodb+srv://snips:snips@cluster0.hscsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser : true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "error"));
db.once('open', ()=>{
    console.log("Connected!");
});
const memeStruc = new mongoose.Schema({
    title : String,
    src : String,
    liked : Array,
    comments : Array
});
var meme = mongoose.model("memeApi", memeStruc);
app.get("/getMeMe/:id", (req, res) => {
    var num = req.path;
    var pos1 = num.lastIndexOf(":");
    var id = parseInt(num.slice(pos1+1));
    console.log(id);
    var myArr = new Array();
    meme.find({}, (err, memes) => {
        memes.reverse();
        for(var i = 0;i<id;i++) {
            myArr.push(memes[i]);
        }
        setTimeout(() => {
            res.send(myArr);
        }, 500);
    });
});
app.get("/tsretyeryxzrtnrtzshntszthnstywsyn", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});
app.post("/postMeMe", (req, res) =>{
    var myArr = {
        title : req.body.title,
        src : req.body.src,
        liked : [],
        comments : {}
    }
    var data = new meme(myArr);
    data.save()
    .then(console.log("Submitted"));
});
