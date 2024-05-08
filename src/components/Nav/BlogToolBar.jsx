import "./ToolBar.css";
import { Link, useLocation } from "react-router-dom";
import { getAllCategories } from "../../services/categoriesService.js";
import { useEffect, useState } from "react";

export const BlogToolBar = () =>{
    const location = useLocation()
    const [category, setCategories] = useState([])

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
                <li className={isActive(``) ? 'navbar-item a' : 'navbar-item b'}>
                    <Link to={``}>Profile</Link>
                </li>
                <li className={isActive(``) ? 'navbar-item a' : 'navbar-item b'}>
                    <Link to={``}>About</Link>
                </li>
                <li className={isActive(`/my-articles/${currentUser.id}`) ? 'navbar-item a' : 'navbar-item b'}>
                    <Link to={`/my-articles/${currentUser.id}`}>My Articles</Link>
                </li>
            </ul>
            <div className="bottom-line"></div> 
        </div>
        </>
    )
}