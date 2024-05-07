import "./ToolBar.css";
import { Link, useLocation } from "react-router-dom";


export const BlogToolBar = () =>{
    const location = useLocation()

    const isActive = (URL) => { // URL is expected to be a str 
        return location.pathname.includes(URL);
    }
    return (
        <>
        
        </>
    )
}