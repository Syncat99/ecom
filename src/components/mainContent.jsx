import React, { useState } from "react";
import './componentsStyling/mainContent.css'

const Main = () => {
    const images = ["/images/image4.png", "/images/image5.jpg"]
    const [i, setI] = useState(1)
    const changeImage = () => {
        if (i === 0) {
            setI(1);
        } else {
            setI(0);
        }
    }
    return (
        <div className="trending-now" style={{backgroundImage:`url(${images[i]})`}}>
            <div className="details">
                <div className="title">
                    <h1>Upgrade Your Wardrobe</h1>
                    <h1>With Our Collection</h1>
                </div>
                <p>Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est ullamcorper nisl amet non mollis.</p>
                <div className="buttons">
                    <button className="buy-btn">Buy Now</button>
                    <button className="detail-btn">View Detail</button>
                </div>
            </div>
            <img onClick={() => {changeImage()}} className="next-btn btn" src="/images/next-btn.png" width={200}/>
        </div>
    )
}

export default Main;