import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Page1(){

    var uri = "http://localhost:320/";

// function myform(e){
//         e.preventDefault();
//         var data = new FormData(e.currentTarget);
//         var add = {
//             Name:data.get("name"),
//             Email:data.get("email"),
//             Password:data.get("password")
//         }
//         axios.post(uri+"fomadd",add).then((succ)=>{
//             console.log(succ)
//             if(succ.data=="ok"){
//                 alert("Data Added");
//                 // e.target.reset();
//             }else{
//                 alert("data not added")
//             }
//         })
//     }

function myform(e){
    e.preventDefault();

    var data = new FormData(e.currentTarget);
    var n = data.get("name");
    var em = data.get("email");
    var pas = data.get("password");


    var newdata = {
        Name:n,
        Email:em,
        Password:pas,
    }



    console.log(newdata);
    axios.post(uri + "ins" , newdata).then((succ)=>{
        

       if(succ.data == "in"){

        alert("data added");
       }

    })
}








    // const[b,setb] = useState([])

    // function show(){
    //     axios.get(uri+"pracc4").then((succ)=>{
    //         console.log(succ);
    //         setb(succ.data);
    //     })
    // }
    // useEffect(()=>{
    //     show();
    // },[])



    return(
        <>

       <div className="col-lg-4">
        <form onSubmit={myform}>
            <div className="form-group">
                <input className="form-control" type = "text" name = "name"/>
            </div>

            <div className="form-group">
                <input className="form-control" type = "email" name = "email"/>

            </div>
            <div className="form-group">
                <input className="form-control" type = "password" name = "password"/>
            </div>

            <button className="btn btn-danger" type = "submit">Click</button>
        </form>
       </div>






       <div className="col-lg-4">
        <form onSubmit = {myform}>
            <div className="form-group">
                <input type = "text" name = "name" placeholder = "name" required className = "form-control"/>

            </div>

            <div className="form-group">
                <input type = "email" name = "email" placeholder = "name" required className = "form-control"/>
                
            </div>

            <div className="form-group">
                <input type = "password" name = "password" placeholder = "name" required className = "form-control"/>
                
            </div>

            <button type = "submit" className="btn btn-primary">Submit</button>

        </form>
       </div>


       {/* <table className = "table ">
            <thead>
                <tr>
                    <th>_ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
            </thead>

            <tbody>
                {b.map((row)=>(
                <tr key = {row._id}>
                    <td>{row._id}</td>
                    <td>{row.Name}</td>
                    <td>{row.Email}</td>
                    <td>{row.Contact}</td>
                </tr> ))}
            </tbody>
        </table> */}

        </>
    )
}

export default Page1;































