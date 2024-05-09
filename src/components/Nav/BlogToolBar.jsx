import "./ToolBar.css";
import { Link, useLocation } from "react-router-dom";
import { getAllCategories } from "../../services/categoriesService.js";
import { useEffect, useState } from "react";

export const BlogToolBar = () =>{
    const location = useLocation()
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getAllCategories().then((data) =>{
            setCategories(data)
        })
    },[])
    const isActive = (URL) => { // URL is expected to be a str 
        return location.pathname.includes(URL);
    }
    return (
        <>
        <div className="navbar-container">
            <ul className="navbar">
                {/* isActive checks to see if the URL is a str and includes the expected URL - 
                    if the link is active it uses one css class if not it uses the other  */}
                {categories.map((category) =>{
                    return (
                        <li key={category.id} className={isActive(category.name) ? 'navbar-item a' : 'navbar-item b'}>
                            <Link to={`/blog-home/${category.name}`}>{category.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <div className="bottom-line"></div> 
        </div>
        </>
    )
}

