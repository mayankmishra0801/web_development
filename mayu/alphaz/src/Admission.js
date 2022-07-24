import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HashLoader} from "react-spinners";

function Admission(){
    var navi = useNavigate();
    const[a,seta] = useState("");

    function show(){
        var name = "Aakash";
        seta(name);
    }

    useEffect(()=>{
        show();
    },[])

const ar = ["aakash","aditya","bhumika"]
function showname(x){
    alert(x);
    navi("/About")
}
const [loader,setloader] = useState(false);
function my(e){
    e.preventDefault();
    setloader(true);
}
return(
    <>
    <div>{a}</div>
    {ar.map((row)=>(
        <div onClick={()=>showname(row)}>{row}</div>
    ))}
     <div className="col-lg-4" style = {{border:"1px solid red"}}>
        <form onSubmit = {my}>
            <div className="form-group">
                <input className="form-control" type = "text"  placeholder="Fill Your Name"/>
            </div>
            <div className="form-group">
                <input type = "email" className= "form-control" placeholder = "Fill your Email"/> 
            </div>
            <div className="form-group">
                <input type = "password" name = "password1" className="form-control" placeholder = "Enter Your Password"/>
             </div>
            
             
            

             
             
             

             {loader?(<><HashLoader/></>):(<><button type = "submit" className="btn btn-primary">submit</button></>)}

        </form>
        <br/><br/>
    </div>

    
    </>
)}
export default Admission;