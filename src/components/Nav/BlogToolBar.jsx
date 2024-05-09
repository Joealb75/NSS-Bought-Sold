import "./ToolBar.css";
import { Link, useLocation } from "react-router-dom";
import { getAllCategories } from "../../services/categoriesService.js";
import { useEffect, useState } from "react";

export const BlogToolBar = () =>{
    const location = useLocation()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories().then((data) => {
            // default 'View All' category
            setCategories([{id: 'all', name: 'View All'}, ...data]);
        });
    }, []);

    const isActive = (URL) => { // URL is expected to be a str 
        return location.pathname.includes(URL);
    }

    return (
        <>
        <div className="navbar-container">
            <ul className="navbar">
                {categories.map((category) => (
                    <li key={category.id} className={isActive(category.id) ? 'navbar-item a' : 'navbar-item b'}>
                        {/* Updated Link to use category ID in the URL */}
                        <Link to={`/blog-home/articleCategories/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="bottom-line"></div>
        </div>
        </>
    );
};

