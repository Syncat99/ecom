import React, {useEffect} from "react";
import './componentsStyling/navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src='/images/logo.png' width={50} height={50}/>
                <h1>Syncat</h1>
            </div>
            <div className="search">
                <input type="button" value="All Categories"/>
                <span>|</span>
                <input type="text" value="" placeholder="Search for a product"/>
            </div>
            <div className="right-side">
                <img src='/images/cart.png' width={50}/>
                <img src='/images/user.png' width={50}/>
            </div>
        </div>
    )
}

export default Navbar;