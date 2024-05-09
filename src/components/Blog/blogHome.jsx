
import { useEffect, useState } from "react";
import { getArticlesByCategoryId } from "../../services/categoriesService.js";
import { getAllArticles } from "../../services/articleService.js";
import { useParams, Link } from "react-router-dom";
import { BlogToolBar } from "../Nav/BlogToolBar.jsx";
import "./blogHome.css";

export const BlogHome = () => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams(); // 'name' should be 'id' or 'categoryId' based on URL param naming

    useEffect(() => {
        if (id && id !== 'all') {
            // Fetch articles by categoryId obtained from URL params
            getArticlesByCategoryId(id).then(setArticles); // Correctly using the imported function
        } else {
            // Fetch all articles if 'View All' or no specific category is selected
            getAllArticles().then(setArticles);
        }
    }, [id]);

    return (
        <>
            <BlogToolBar />
            <section>
                {articles.map((article) => (
                    <div key={article.id} className="article">
                        <Link to={`/blog-home/${article.id}/view-article/${article.title}`}>
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                                <h3>{article.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
};


