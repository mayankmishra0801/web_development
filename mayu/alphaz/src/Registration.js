import React, {useEffect, useState} from "react";
import Navbar  from "./Navbar";

function Registration(){
    const [a, seta] = useState("");
    function data(){
        var db = "Mayank"
         seta(db)


    }
    useEffect(() =>{
        data();
    },[])

    const[b,setb] = useState("");
    const[c,setc] = useState("");
    const[d,setd] = useState("");
    const[e,sete] = useState("");
    const[f,setf] = useState("");
    const[g,setg] = useState("");
    const[h,seth] = useState("");
    const[i,seti] = useState("");
   {/* const[j,setj] = useState(""); */}
const[k,setk] = useState(""); 
    function myform(e){
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var n = data.get("name1");
        var em = data.get("email1");
        var p = data.get("password1");
        var cn1 = data.get("tel");
        var cn2 = data.get("tel2");
        var ti = data.get("time");
        var da = data.get("date");
        var na= data.get("number");
    {/* var fa = data.get("file");  */}
        var sel = data.get("checkbox"); 
      
        setb(n);
        setc(em);
        setd(p);
        sete(cn1);
        setf(cn2);
        setg(ti);
        seth(da);
        seti(na);
       {/* setj(fa);  */}
        setk(sel); 


    }








    return(
    
    <>
   <Navbar/>
   <h1>Registration Page</h1>
   <table className = "table">
    <thead>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>Calling Number</th>
            <th>Whatsapp Number</th>
            <th>Calling Time</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Gender</th>
{/*<th>File</th> */}
            <th>Choice Of User</th> 
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{b}</td>
            <td>{c}</td>
            <td>{d}</td>
            <td>{e}</td>
            <td>{f}</td>
            <td>{g}</td>
            <td>{h}</td>
            <td>{i}</td>
            {/*<td>{j}</td> */}
            <td>{k}</td> 
            
        </tr>
    </tbody>
   </table>

    <div className="col-lg-4" style = {{border:"1px solid red"}}>
        <form onSubmit = {myform}>
            <div className="form-group">
                <input className="form-control" type = "text" name = "name1" placeholder="Fill Your Name"/>
            </div>
            <div className="form-group">
                <input type = "email" name = "email1" className= "form-control" placeholder = "Fill your Email"/> 
            </div>
            <div className="form-group">
                <input type = "password" name = "password1" className="form-control" placeholder = "Enter Your Password"/>
             </div>
             <div className="form-group">
                <input type = "tel" name = "tel" className="form-control" placeholder="Enter Your Calling Number"/>
             </div>
             <div className="form-group">
                <input type = "tel" name = "tel2" className="form-control" placeholder="Enter Your Whatsapp Number"/>
             </div>
             <div className="form-group">
                <input type = "time" name = "time" className="form-control" placeholder="Enter Preferred time for calling you"/>
             </div>
             <div className = "form-group">
                 <input type = "date" name = "date" className="form-control" placeholder="Enter Your Date of birth"/>
             </div>
           {/*  <div className="form-group">
                <input type = "file" name = "file" className="form-control" placeholder="Select your file"/>

    </div> */}
             
             <div className="form-group">
                Program you like:<br/>
                C
                <input type = "checkbox" name = "lan" className="form-control" placeholder="Select Book"/><br/>
                C++
                <input type = "checkbox" name = "lan" className="form-control" placeholder= "Select Book"/><br/>

             </div>

             
             <div className="form-group">
                <input type = "number" name = "number" className="form-control" placeholder="Enter Your age"/>
             </div>
             Gender:<br/>
             Male<input type = "radio" name="gen" className="form-control" />
             Female<input type = "radio" name = "gen2" className="form-control"/>
             

             <button className="btn btn-danger" type="submit">Submit Data</button>

        </form>
    </div>






    </>
    )
}

export default Registration;