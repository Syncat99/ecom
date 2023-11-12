import React, {useState} from "react";
import './componentsStyling/SponsoredProduct.css'
const SponsoredProduct = () => {
    return (
        <div className="sponsored">
            <div className="SponsoredDetails">
                <img src="/images/sponsored/iPadAir2020.png"/>
                <h1>Ipad Air Gen 5</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in sapien quam risus sed diam.</p>
                <div className="SponsoredButtons">
                    <button className="buy-btn">Buy</button>
                    <button className="detail-btn">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default SponsoredProduct;