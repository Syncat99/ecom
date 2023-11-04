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
                <select>
                    <option value="computers">Computers</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothes">Clothes</option>
                </select>
                <input type="text" value="" placeholder="Search for a product"/>
                <img src="/images/search.png" width={25}/>
            </div>
            <div className="right-side">
                <img src='/images/cart.png' width={50}/>
                <img src='/images/user.png' width={50}/>
            </div>
        </div>
    )
}

export default Navbar;