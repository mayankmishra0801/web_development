const express = require("express");
const app = express();
const Mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const confi = "mongodb+srv://mayank:oman123#@cluster0.gejuzjk.mongodb.net/?retryWrites=true&w=majority"
var user;

MongoClient.connect(confi,(err,succ)=>{
    if(err) throw err;

    console.log("Database Connected");
    user = succ.db("plastic").collection("staple");
})

app.get("/ye",(req,res)=>{
    user.inserOne({
        Name:"Mayank",
        Email:"mayank0801mishra@gmail.com",
        Contact:877665677,
    }).then((succ)=>{
        res.send(succ);
    })
})
app.get("/se",(req,res)=>{
    user.findOne().then((succ)=>{
        res.send(succ);
    })
})



app.get("/",(req,res)=>{
    console.log("Home");
    res.send("Welcome to home");
})

app.listen(320,(req,res)=>{
    console.log("Server Started");
})

