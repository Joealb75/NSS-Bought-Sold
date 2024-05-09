import { useEffect, useState } from "react"
import { getAllArticles } from "../../services/articleService.js"
import { Link, useParams, useLocation } from "react-router-dom"
import { BlogToolBar } from "../Nav/BlogToolBar.jsx"
import "./blogHome.css"

export const BlogHome = () => {
    const [allArticles, setAllArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const { category } = useParams(); // This assumes you're using URL params to track category
    const location = useLocation();

    useEffect(() => {
        getAllArticles().then((data) => {
            setAllArticles(data);
            setFilteredArticles(data); // Initialize with all articles
        });
    }, []);

    useEffect(() => {
        if (location.pathname.includes('View All')) {
            setFilteredArticles(allArticles);
        } else {
            const filtered = allArticles.filter(article => article.categoryName === category);
            setFilteredArticles(filtered);
        }
    }, [category, allArticles, location.pathname]);

    return (
        <>
            <BlogToolBar />
            <section>
                {filteredArticles.map((articleObj) => (
                    <div key={articleObj.id} className="article">
                        <Link to={`/blog-home/${articleObj.id}/view-article/${articleObj.title}`}>
                            <div className="article-image">
                                <img src={articleObj.image} alt={articleObj.title} />
                                <h3>{articleObj.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
}
