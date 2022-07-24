import React, {useState} from 'react';
import Navbar from "./Navbar";
function Home(){
    const ab = "Naveen";
    const [ac,setAc] = useState('Naveen Singh');
    function abc(){
        alert('Hii');
    }

    const [nm, setnm] = useState('');
    function bcd(x){
        console.log(x);
        setnm(x);
    }
    return(
        <div>
        <Navbar/>
        <div class= "col-lg-4">
            <h1>Hello World</h1>
            <h5>hii,</h5>
            <h2>{ab}</h2>
            <h2>{ac}</h2>
        </div>
        <div className="col-lg-4">
            <button className = "btn btn-success" onClick = {abc}>Click </button>
           <button className = "btn bnt-info"  onClick = {() => bcd('Naveen')}>Click </button>
        
       
        <input className= "form-control" type = 'text' placeholder = 'Name' onkeyUp = {(e) => bcd(e.target.value)}/>
        {nm}
    </div>
    </div>
    )
}

export default Home;