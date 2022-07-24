import React from "react";
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="navbar-brand brand1">
                        brand
                    </div>
                </div>
                 <ul className="nav navbar-nav navbar-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Product">Product</a></li>
                    <li><a href="Promo">Promo</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Contact">Contact</a></li>
                 </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar;
