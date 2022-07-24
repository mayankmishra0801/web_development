import React from 'react';
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className = "navbar navbar-default">
            <div className= "container-fluid">
                <ul className = "nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href ="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
                <ul className = "nav navbar-nav navbar-right">
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to = "/About">About</Link></li>
                    <li><Link to = "/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;




































