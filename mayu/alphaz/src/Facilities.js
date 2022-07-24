import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";

function Facilities(){

    const [a, seta] = useState("");
    function show(){
        var name = "Mayank";
        seta(name);}

    const [l, setl] = useState("");
    function print(){
        var last = "Red";
        setl(last);
    }

    
    useEffect(()=>{
        show();
    },[])

    useEffect(()=>{
        print();
    },[])

     const ar1 = ["Mayank","Rohan","Akram"]
         function display(v){
            alert(v);
         }
    const ar = ["Aakash","Aditya","Bhumika"]
        function showname(x){
            alert(x);
        }
    return(
        <>
       

        <Navbar/>
        <div class="div1">{a}</div>
        <div class="div2">{l}</div>

        {ar1.map((row1) =>(
            <div class="map1" style={{cursor:"pointer"}} onClick = {()=>display(row1)}>{row1}
            </div>
        ))}
        
        {ar.map((row) =>(
        
        
        
        <div class="curse" style={{cursor:"pointer"}} onClick={()=> showname(row)}>{row}
        </div>))}
        
           



        
        </>
    )
}

export default Facilities;