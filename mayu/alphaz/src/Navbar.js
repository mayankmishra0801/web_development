import React from "react";
function Navbar(){
    return(
        
        <>
         <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="navbar-brand">
                        logos
                    </div>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Academics">Academics</a></li>
                    <li><a href="/Admission">Admission</a></li>
                    <li><a href="/Facilities">Facilities</a></li>
                </ul>

                <ul className = "nav navbar-nav navbar-right">
                    
                    <li><a href="/Notice_announcement">Notice & Announcement</a></li>
                    <li><a href="/Photo_gallery">Photo & Gallery</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Registration">Registration</a></li>
                    
                    
                    </ul>
            </div>
         </nav>
        </>
    )
}

export default Navbar;






