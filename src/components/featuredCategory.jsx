import './componentsStyling/featuredCategory.css'
import Category from "../components/category"

const FeaturedCategory = () => {
    const categoriesData = [
        {
            title: "Electronics",
            img: "./public/images/categoriesIcons/electronics.png",
            number: 4190,

        },
        {
            title: "Action Figure",
            img: "./public/images/categoriesIcons/actionFigure.png",
            number: 4190,

        },
        {
            title: "Books",
            img: "./public/images/categoriesIcons/books.png",
            number: 4190,

        },
        {
            title: "Gaming",
            img: "./public/images/categoriesIcons/gaming.png",
            number: 4190,

        },
        {
            title: "Music",
            img: "./public/images/categoriesIcons/headphone.png",
            number: 4190,

        },
        {
            title: "Fashion",
            img: "./public/images/categoriesIcons/fashion.png",
            number: 4190,

        },
        {
            title: "Hobbies",
            img: "./public/images/categoriesIcons/hobbies.png",
            number: 4190,

        }
    ]
    const categoriesList = categoriesData.map((category) => {
        return (
            <Category data={category}/> 
        )
    })
    return (
        <div className="featuredCategories">
            <div className="details">
                <h1>Featured Categories</h1>
                <a href="#"><button className='featuredCategories-btn'>Details</button></a>
            </div>
            <div className="CategoriesList">{categoriesList}</div>
        </div>
    )
}

export default FeaturedCategory;