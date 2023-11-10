import './componentsStyling/category.css'


const Category = (props) => {

    return (
        <div className="category">
            <img src={props.data.img} />
            <div className="CategoryDetails">
                <h1>{props.data.title}</h1>
                <span>{props.data.number} Products</span>
            </div>
        </div>
    )
}

export default Category;