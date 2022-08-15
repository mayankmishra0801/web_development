const express = require("express");
const app = express();
const Mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const confi = "mongodb+srv://fresh:mayank0801@cluster0.ic3wtg0.mongodb.net/?retryWrites=true&w=majority"
const cors = require("cors");
// const bodyParser = require("body-parser");
const bodyParser = require("body-parser")
app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json());

var alpha;




MongoClient.connect(confi,(err,succ)=>{
    if(err) throw err;
    console.log("Database Connected");


    alpha = succ.db("login").collection("newp");




})


//----------insert----------

app.post("/ins",(req,res)=>{
    console.log(req.body);


alpha.insertOne(req.body).then((succ)=>{
    console.log("OK");
    res.send("in");
})
})



//---------fetch


app.get("/fetch",(req,res)=>{
    alpha.find().toArray().then((succ)=>{
        res.send(succ);
        // console.log(succ);
    })
})


//------------delete


app.post("/del",(req,res)=>{
    console.log(req.body.xyz);
    var id = req.body.xyz;
    var idd = new Mongodb.ObjectId(id);
    alpha.deleteOne({
        _id:idd,
    }).then((succ)=>{
        console.log("ok")
        res.send("x")
    })
})


// --------Update


app.post("/up",(req,res)=>{
    console.log(req.body);
    var id = req.body.Id;
    var n = req.body.Name;
    var e = req.body.Email;
    var p = req.body.Password;

console.log(n);

    var idd = new Mongodb.ObjectId(id);
    alpha.updateOne({
        _id:idd,
    },{
        $set:{
            Name:n,
            Email:e,
            Password:p,
        }
    }).then((succ)=>{
        console.log("updated")
        res.send("a");
    })
})






// app.get("/prac1",(req,res)=>{
//     alpha.insertOne({
//         Name:"Mayank",
//         Email:"mayank0801mishra@gmail.com",
//         Password:12345
//     }).then((succ)=>{
//         res.send(succ);
//     })
// })


// app.get("/prac4",(req,res)=>{
//     alpha.insertOne({
//         Name:"May",
//         Email:"mayank08mishra@gmail.com",
//         Password:1234
//     }).then((succ)=>{
//         res.send(succ);
//     })
// })

// app.get("/prac2",(req,res)=>{
//     alpha.find().toArray().then((succ)=>{
//         res.send(succ);
//     })
// })



// app.get("/prac3",(req,res)=>{
//     var idd = new Mongodb.ObjectId("62f6d570f55f954c92c31406");
//     alpha.updateOne({
//         _id:idd,
//     },
//     {
//         $set:{
//             Name:"Samriddh"
//         }

//     }).then((succ)=>{
//         res.send("Data Updated")
//     })
    
       
    
// })

// app.get("/prac5",(req,res)=>{
//     var idd = new Mongodb.ObjectId("62f6d7233eca1d12d8f20d54");
//     alpha.deleteOne({
//         _id:idd,
//     }).then((succ)=>{
//         res.send("Data Deleted")
//     })
// })

// app.get("/prac6",(req,res)=>{
//     alpha.find(
//         {
//             Name:"Mayank"
//         }).toArray().then((succ)=>{
//             res.send(succ);
//         })
    
// })

// app.get("/prac7",(req,res)=>{
//     var idd = new Mongodb.ObjectId("62f6d7213eca1d12d8f20d53")
//     alpha.find(
//         {
//             _id:idd
//         }
//     ).toArray().then((succ)=>{
//         res.send(succ);
//     })
// })

// app.get("/prac8",(req,res)=>{
//     alpha.findOne().then((succ)=>{
//         res.send(succ);
//     })
// })



app.get("/",(req,res)=>{
    console.log("Home");
    res.send("Welcome to HELLO WORLD");
})



app.listen(320,(req,res)=>{
    console.log("Server Started");
})