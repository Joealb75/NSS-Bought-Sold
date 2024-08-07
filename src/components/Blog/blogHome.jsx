import { useEffect, useState } from "react";
import { getAllArticles } from "../../services/ArticleService.js"; 
import { getArticlesByCategoryId } from "../../services/CategoriesService.js";
import { useParams, Link } from "react-router-dom";
import { BlogToolBar } from "../Nav/BlogToolBar.jsx";
import "./blogHome.css"; 
import BS from "/../NSS-Bought-Sold/src/assets/BSPlaceHolder.png"
import { BlogNavBar } from "../Nav/BlogNavBar.jsx";


export const BlogHome = () => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        if (id && id !== 'all') {
            getArticlesByCategoryId(id).then(setArticles);
        } else {
            getAllArticles().then(setArticles);
        }
    }, [id]);

    return (
        <>
            <BlogNavBar />
            <img src={BS}></img>
            <BlogToolBar />
            <div>
                
            </div>
            <div className="articles-container"> 
                {articles.map((article) => (
                    <div key={article.id} className="article">
                        
                        <Link to={`/blog-home/${article.id}/view-article/${article.title}`} className="link">
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="article-title">
                                <h3>{article.title}</h3> 
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};



