import React, {useEffect, useState} from "react";
import axios from "axios";
function Home(){

    var uri = "http://localhost:320/";

    function myform(e){
        e.preventDefault();

        var data = new FormData(e.currentTarget);

        var n = data.get("name")
        var em = data.get("email")
        var pas = data.get("password");
        var d = data.get("id");


        var newdata = {
            Name : n,
            Email: em,
            Password: pas,
            
        }
        console.log(newdata);
        axios.post(uri + "ins", newdata).then((succ)=>{
            if(succ.data == "in"){
                alert("Data added");
                show();
            }
        })
    }


    const[b, setb] = useState([])
    function show(){
        axios.get(uri + "fetch").then((succ)=>{
            console.log(succ);
            setb(succ.data);
        })
    }

    useEffect(()=>{
        show();
    },[])






 const [n, setn] = useState(" ");
 const [e, sete] = useState(" ");
 const [p, setp] = useState(" ");
 const [d, setd] = useState(" ");


 function edit(e){
    setn(e.Name)
    sete(e.Email)
    setp(e.Password)
    setd(e._id);
 }



 function editform(e){
    e.preventDefault();
    var data = new FormData(e.currentTarget);

    var n = data.get("name");
    var em = data.get("email");
    var p = data.get("password")
    var d = data.get("id");


    var newdata = {
        Name:n,
        Email:em,
        Password:p,
        Id:d,
    }
    console.log(newdata);

    axios.post(uri + "up", newdata).then((succ)=>{
        if(succ.data == "a"){
            alert("data updated");
            show();
        }
    })
 }




 function del(e){
    axios.post(uri+"del",{xyz:e}).then((succ)=>{
        if(succ.data == "x"){
            alert("Data deleted");
            show();
        }
    })
 }
return(
    <>



      <div className = "col-lg-6">
        <table className="table table-borderd">
         <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
            </thead>

        <tbody>
        {b.map((row)=>(  
    <tr key={row._id}>
        <td>{row._id}</td>
        <td>{row.Name}</td>
        
        <td>{row.Email}</td>
        <td>{row.Password}</td>
        <td>
              <button className="btn btn-danger" onClick={()=>del(row._id)}><span className="glyphicon glyphicon-trash"></span></button>&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={()=>edit(row)}><span className="glyphicon glyphicon-pencil"></span></button> 
        </td> 
    </tr>
    ))}



            </tbody>



            </table>
        </div>




        <div className = "col-lg-4">
            <h1>Add data</h1>
             <form onSubmit={myform}>
                <div className="form-group">
                <input type ="text" name = "name" placeholder = "name" required className ="form-control"/>
                 </div>
                 <div className="form-group">
                <input type ="email" name = "email" placeholder = "email" required className ="form-control"/>
                 </div>
                 <div className="form-group">
                <input type ="password" name = "password" placeholder = "password" required className ="form-control"/>
                 </div>
                 <button type = "submit" className="btn btn-primary">Submit</button>
            
            
            
            
            
             </form>



        </div>

<div className = "col-lg-4">
    <h1>Edit Data</h1>
    <form onSubmit={editform}>
        <div className="form-group">
            <input type = "hidden" name="id" placeholder = "id" required value={d} className="form-control"/>

        </div>
        <div className = "form-group">
            <input type ="text" name = "name" placeholder= "name" required value={n} onChange ={(e)=>setn(e.target.value)} className = "form-control"/>

        </div>
        <div className="form-group">
    <input type="email" name="email" placeholder="email" required  value={e} onChange={(e)=>sete(e.target.value)} className="form-control"/>
</div>

<div className="form-group">
    <input type="password" name="password" placeholder="password" required  value={p} onChange={(e)=>setp(e.target.value)} className="form-control"/>
</div>

<button type="submit" className="btn btn-primary">
submit
</button>
    </form>
</div>


</>
)


}
export default Home;