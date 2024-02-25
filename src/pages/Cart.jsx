import React from "react";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import './cart.css'
function Cart() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
         setWindowWidth(window.innerWidth)
        }
         window.addEventListener('resize', handleResize)
     }, [windowWidth])

    return (
        <div className="cart">
            <Navbar windowWidth={windowWidth}/>
            
        </div>
    )
}


export default Cart