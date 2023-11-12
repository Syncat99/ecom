import React from "react";
import './componentsStyling/navbar.css'
import { useState } from "react";
import { useEffect, useRef } from "react";
import UserInfo from "./userBox"

const Navbar = (props) => {
    const [showUser, setShowUser] = useState(false)
    
    return (
        <div className="navbar">
            <div className="logo">
                <img src='./public/images/logo.png' width={50}/>
                {props.windowWidth > 768 && <h1>Syncat</h1>}
            </div>
            <div className="search">
                <select>
                    <option value="computers">Computers</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothes">Clothes</option>
                </select>
                <input type="text" value="" placeholder="Search for a product"/>
                <img className="search-btn" src="./public/images/search.png" width={15}/>
            </div>
            <div className="right-side">
                <img className="icon" src='./public/images/cart.png' width={50}/>
                <div className="user">
                    <img className="userIcon icon" src='./public/images/user.png' width={40} onClick={() => setShowUser(!showUser)} />
                    {showUser && <UserInfo/>}
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;