import React from "react";
import './componentsStyling/popularProducts.css'
import ProductBanner from "./product";
const productslist = [
    {
        image: "/images/products/spy-tshirt.png",
        name: "Spy x Family Tshirt",
        sex: "women",
        price: 26,
        seller: "North Purwokerto",
        soldUnits: 1289,
    },
    {
        image: "/images/products/oversized-tshirt.png",
        name: "Oversized Tshirt",
        sex: "women",
        price: 48,
        seller: "North Purwokerto",
        soldUnits: 989,
    },
    {
        image: "/images/products/iphone14pro-max.png",
        name: "Iphone 14 Pro Max",
        sex: "",
        price: 1200,
        seller: "North Purwokerto",
        soldUnits: 520,
    },
    {
        image: "/images/products/logitech-prox.png",
        name: "Logitech Pro X Superlight",
        sex: "women",
        price: 49,
        seller: "North Purwokerto",
        soldUnits: 389,
    },
    {
        image: "/images/products/logitech-g735.png",
        name: "Logitech G735 Gaming Headset",
        sex: "women",
        price: 49,
        seller: "North Purwokerto",
        soldUnits: 389,
    },
    {
        image: "/images/products/logitech-g535.png",
        name: "G535 Lightspeed Wireless Gaming Headset",
        sex: "women",
        price: 49,
        seller: "North Purwokerto",
        soldUnits: 389,
    },
    {
        image: "/images/products/logitech-g502hero.png",
        name: "Logitech Gaming Mouse G502 Hero",
        sex: "",
        price: 49,
        seller: "North Purwokerto",
        soldUnits: 389,
    },
    {
        image: "/images/products/ipadprogen3.png",
        name: "Ipad Pro Gen 3",
        sex: "",
        price: 49,
        seller: "North Purwokerto",
        soldUnits: 389,
    },
    {
        image: "/images/products/djimini3pro.png",
        name: "DJI Mini 3 Pro",
        sex: "",
        price: 49,
        seller: "North Purwokerto",
        soldUnits: 389,
    },
    {
        image: "/images/products/airpodsmax.png",
        name: "Airpods Max 2022",
        sex: "",
        price: 49,
        seller: "North Purwokerto",
        soldUnits: 389,
    }
    
]
const list = productslist.map((product, index) => {
    return (
        <ProductBanner key={index} data={product}/>
    )
})
console.log(list)
const PopularProducts = () => {
    return (
        <div className="popularProducts">
            <h1>Popular Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</p>
            <div className="productsList">{list}</div>
        </div>
    )
}

export default PopularProducts;
