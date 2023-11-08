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

        }
    ]
    const categoriesList = categoriesData.map((category) => {
        return (
            <Category data={category}/> 
        )
    })
    return (
        <div className="featuredCategories">{categoriesList}</div>
    )
}

export default FeaturedCategory;