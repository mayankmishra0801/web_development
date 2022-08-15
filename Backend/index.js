const express = require("express");
const app = express();
const Mongodb = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
const confi = "mongodb+srv://mayank:admin@cluster0.zfglxrf.mongodb.net/?retryWrites=true&w=majority"
const bodyPaser = require("body-parser");
app.use(bodyPaser.json());

const cors = require("cors");
app.use(cors());













var user;
var user1;
var user2;
var my;
MongoClient.connect(confi,(err,succ)=>{
    if(err) throw err;

    console.log("Database connected");
    user = succ.db("product").collection("test");
    user1 = succ.db("product").collection("prep");
    user2 = succ.db("product").collection("insta");
    my =succ.db("product").collection("newdat");

})

// app.get("/ye",(req,res)=>{
//     user2.insertOne({
//         Name:"Shivam",
//         Email:"sghh@gmail.com",
//         Contact:678877787
//     }).then((succ)=>{
//         res.send(succ);
//     })
// })

// app.get("/prac1",(req,res)=>{
//     user2.insertOne({
//         Name:"dhihan",
//         Email:"abc@gmail.com",
//         Contact:76757788
//     }).then((succ)=>{
//         res.send(succ);
//     })
// })
// app.get("/prac2",(req,res)=>{
//     user2.find().toArray().then((succ)=>{
//         res.send(succ);
//     })
//  })
// app.get("/prac3",(req,res)=>{
//     var idd = new Mongodb.ObjectId("62f0ec973012c102d8958043");
//     user2.updateOne({
//     _id:idd,
// },
// {
//     $set:{
//         Name:"alpha"
//     }
// }).then((succ)=>{
//     res.send("Data Updated")
// })
// }) 

// app.get("/parac4",(req,res)=>{
//     var idd = new Mongodb.ObjectId("62f0cf6e17be925545c36bff");
//     user2.deleteOne({
//         _id:idd,
//     }).then((succ)=>{
//         res.send("data deleted")
//     })
// })


app.get("/we",(req,res)=>{
    user1.insertOne({
        Name:"Shivam",
        Email:"sghh@gmail.com",
        Contact:678877787
    }).then((succ)=>{
        res.send(succ);
    })
})

app.get("/re",(req,res)=>{
    user1.insertOne({
        Name:"Hari",
        Email:"mayank0801mishra@gmail.com",
        Contact:7413080013
    }).then((succ)=>{
        res.send(succ);
    })
})

app.get("/mon6",(req,res)=>{
    var idd = new Mongodb.ObjectId("62ecec873fe489f12b9e20c8");
    user1.updateOne({
        _id:idd,
    },{
        $set:{
            Name:"rohit",
            Email:"mayu@gmail.com"
        }
    }).then((succ)=>{
        res.send("data Updated")
    })
})

// app.get("/mon11",(req,res)=>{
//     var idd = new Mongodb.ObjectId("62ecec873fe489f12b9e20c8");

//     user1.deleteOne({
//         _id:idd,
//     }).then((succ)=>{
//         res.send("data deleted")
//     })
// })


// app.get("/co",(req,res)=>{
// user.insertOne({
// Name:"mayank",
// Email:"mayank123@gmail.com",
// Contact:7657587687686,

// }).then((succ)=>{
//     res.send(succ);
// })
// })

// app.get("/am",(req,res)=>{
//    user.insertOne({
//     Name:"Abhijeet",
//     Eamil:"mayank0801mishra@gmail.com",
//     Contact:767567777
//    }).then((succ)=>{
//     res.send(succ);
//    })

// })

app.get("/co6",(req,res)=>{


    user1.find(
        {
            Email:"sghh@gmail.com"
        }
    ).toArray().then((succ)=>{
        res.send(succ);//find is with array
    })
})


app.get("/co7",(req,res)=>{

    var idd = new Mongodb.ObjectId("62ecec873fe489f12b9e20c8");

    user1.find({
        _id:idd
    }).toArray().then((succ)=>{
        res.send(succ);//find is with array
    })
})







app.get("/co3",(req,res)=>{
    user1.find().toArray().then((succ)=>{
        res.send(succ);//find is with array
    })
})

app.get("/co4",(req,res)=>{
    user1.findOne().then((succ)=>{
        res.send(succ);//
    })
})


app.get("/",(req,res) =>{
    console.log("home");
    res.send("Welcome to home");
})
app.get("/about",(req,res)=>{
    console.log("About");
    res.send("Welcome to About Page");
})
// app.get("/contact",(req,res)=>{
//     console.log("Contact");
//     res.send({Name:"aakash",class:8,rollno:8});
// })
// app.get("/login",(req,res) =>{
//     console.log("Login Page");
//     res.send("Welcome to Login Page")
// })


// app.post("/add",(req,res)=>{
// console.log(req.body);
// user1.insertOne(req.body).then((succ)=>{
// res.send("ok")
// })
// })
app.post("/ins",(req,res)=>{
    console.log(req.body);

my.insertOne(req.body).then((succ)=>{
    console.log("Ok");
    res.send("in");
})
})












app.get("/pracc4",(req,res)=>{
    user1.find().toArray().then((succ)=>{
        res.send(succ);
    })
})

app.get("/pracc5",(req,res)=>{
    user1.find().toArray().then((succ)=>{
        res.send(succ);
    })
})

app.listen(320,(req,res)=>{
    console.log("Server Started");
})