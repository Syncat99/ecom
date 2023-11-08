const Category = (props) => {

    return (
        <div className="category">
            <img src={props.data.img} />
            <div className="details">
                <h1>{props.data.title}</h1>
                <span>{props.data.number}</span>
            </div>
        </div>
    )
}

export default Category;