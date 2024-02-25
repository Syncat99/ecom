import React from "react";
import './componentsStyling/articles.css'
function Article() {
    const articles_list = [
        {
            image: "./images/articles/article1.png",
            id: "1",
            title: "Make your desk more neat and beautiful",
            date: "22 Dec 2022",
            content: "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras",
        },
        {
            image: "./images/articles/article2.png",
            id: "2",
            title: "What are the fashion trend in 2023?",
            date: "22 Dec 2022",
            content: "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras",
        },
        {
            image: "./images/articles/article3.png",
            id: "3",
            title: "Tips for Work Life Balance ",
            date: "22 Dec 2022",
            content: "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras",
        },
    ]
    const articles = () => {
        return (
            articles_list.map((article) => {
                return (
                    <div className="article-item" key={article.id}>
                        <img src={article.image} width={400}/>
                        <div className="item-details">
                            <h4>{article.date}</h4>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        <div className="articles">
            <div className="articles-top">
                <h1>Articles</h1>
                <button>Details</button>
            </div>
            <div className="articles-list">
                {articles()}
            </div>
        </div>
    )
}

export default Article;