import { useEffect, useState } from "react";
import { getAllArticles } from "../../services/articleService.js"; 
import { getArticlesByCategoryId } from "../../services/categoriesService.js";
import { useParams, Link } from "react-router-dom";
import { BlogToolBar } from "../Nav/BlogToolBar.jsx";
import "./blogHome.css"; // Ensure this imports the correct CSS file
import BS from "/../NSS-Bought-Sold/src/assets/BSPlaceHolder.png"


export const BlogHome = () => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams(); // Ensure this matches the route parameter

    useEffect(() => {
        if (id && id !== 'all') {
            getArticlesByCategoryId(id).then(setArticles);
        } else {
            getAllArticles().then(setArticles);
        }
    }, [id]);

    return (
        <>
            <img src={BS}></img>
            <BlogToolBar />
            <div>
                
            </div>
            <div className="articles-container"> {/* Use articles-container for the grid layout */}
                {articles.map((article) => (
                    <div key={article.id} className="article">
                        <Link to={`/blog-home/${article.id}/view-article/${article.title}`} className="link">
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="article-title">
                                <h3>{article.title}</h3> {/* Moved title into separate div for styling */}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};



