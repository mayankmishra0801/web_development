import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Home(){
// useState and useEffect are the react hoooks which is used to store the data.
// useefffect is used to initialize the function.
   const [a, seta] = useState("");
   // const [b,setb] = useState();
   function data(){
      var db = "aakash"
      seta(db)
   }
useEffect(() =>{
      data();
   },[])
   // var ar = ["name", "rollno","class"];
// setb(ar);
const [b,setb] = useState("");
const [c,setc] = useState("");
const [d,setd] = useState("");
function myform(e){
   e.preventDefault();
   var data = new FormData(e.currentTarget);
   var n = data.get("name")
   var em = data.get("email");
   var p = data.get("password");
   setb(n);
   setc(em);
   setd(p);
}
  return(
    <>
    <Navbar/>
     <p>afdhgdakhdhhahghaf</p>
     <button className="btn btn-primary">click</button>
     <p style = {{color:"red",fontsize:"50px"}}>npm i bootstrao@3 jquery</p> 
     <button className="a">submit</button>    
      <table className="table">
         <thead>
            <tr>
               <th>name</th>
               <th>email</th>
               <th>password</th>
            </tr>

         </thead>
         <tbody>
            <tr>
               <td>{b}</td>
               <td>{c}</td>
               <td>{d}</td>
               </tr>
 
         </tbody>
      </table>

      <div className="col-lg-4" style={{border:"1px solid red"}}>
         <form onSubmit = {myform}>
            <div className="form-group">
               <input className="form-control" type="text" name = "name" placeholder="fill your"/>
            </div>
            <div className="form-group">
               <input  type="email" name = "email"  className ="form-control" placeholder="fill your"/>
            </div>
            <div className="form-group">
               <input type = "password" name = "password" className="form-control" placeholder="fill your"/>

            </div>
            <button className="btn btn-danger" type = "submit">submitdata</button>
         </form>
      </div>
   
   
    </>
   )

}

export default Home;