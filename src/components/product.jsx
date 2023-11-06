import "./componentsStyling/product.css"

const ProductBanner = ({data}) => {
    console.log(data)
    return (
        <div className="product">
            <img src={`${data.image}`}/>
            <div className="details">
                <div className="name-and-price">
                    <h3 className="name">{data.name}</h3>
                    <p className="price">${data.price}</p>
                </div>
                <span className="seller">{data.seller}</span>
                <div className="rating-soldUnits">
                    <span>{data.soldUnits} Sold</span>
                </div>
            </div>
        </div>
    )
}

export default ProductBanner;