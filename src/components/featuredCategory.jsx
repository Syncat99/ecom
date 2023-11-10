import './componentsStyling/featuredCategory.css'
import Category from "../components/category"

const FeaturedCategory = () => {
    const categoriesData = [
        {
            title: "Electronics",
            img: "/images/categoriesIcons/electronics.png",
            number: 4190,

        },
        {
            title: "Action Figure",
            img: "/images/categoriesIcons/actionFigure.png",
            number: 4190,

        },
        {
            title: "Books",
            img: "/images/categoriesIcons/books.png",
            number: 4190,

        },
        {
            title: "Gaming",
            img: "/images/categoriesIcons/gaming.png",
            number: 4190,

        },
        {
            title: "Music",
            img: "/images/categoriesIcons/headphone.png",
            number: 4190,

        },
        {
            title: "Fashion",
            img: "/images/categoriesIcons/fashion.png",
            number: 4190,

        },
        {
            title: "Hobbies",
            img: "/images/categoriesIcons/hobbies.png",
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