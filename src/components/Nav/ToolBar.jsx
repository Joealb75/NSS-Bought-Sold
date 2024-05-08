import { Link, useLocation } from "react-router-dom";
import "./ToolBar.css";

export const ProfileToolBar = ({ currentUser }) => {
    const location = useLocation(); // Returns the current URL object

    // Function to check if the link is active
    const isActive = (URL) => { // URL is expected to be a str 
        return location.pathname.includes(URL);
    }

    return (
        <div className="navbar-container">
            <ul className="navbar">
                {/* isActive checks to see if the URL is a str and includes the expected URL - 
                    if the link is active it uses one css class if not it uses the other  */}
                <li className={isActive(`/profile/${currentUser.id}`) ? 'navbar-item a' : 'navbar-item b'}>
                    <Link to={`/profile/${currentUser.id}`}>Profile</Link>
                </li>
                <li className={isActive(`/about/${currentUser.id}`) ? 'navbar-item a' : 'navbar-item b'}>
                    <Link to={`/about/${currentUser.id}`}>About</Link>
                </li>
                <li className={isActive(`/my-articles/${currentUser.id}`) ? 'navbar-item a' : 'navbar-item b'}>
                    <Link to={`/my-articles/${currentUser.id}`}>My Articles</Link>
                </li>
            </ul>
            <div className="bottom-line"></div> 
        </div>
    );
}
  