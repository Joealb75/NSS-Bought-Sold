import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import "./burger.css";
import MenuIcon from '/../NSS-Bought-Sold/src/assets/burger-menu.svg';

export const BurgerMenu = ({ currentUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <img src={MenuIcon} alt="Menu" onClick={toggleMenu} className="menu-icon" />
            {isOpen && (
                <div className="menu-content">
                    <a href={`/profile/${currentUser.id}`} className="menu-link">My Profile</a>
                    <a href='/' className='menu-link'>Home</a>
                    <a href="/blog-home" className="menu-link">Blog</a>
                    <a href="/allWriters" className="menu-link">Writers</a>
                    
                    {localStorage.getItem("B&S_User") && (
                        <Link
                            className="menu-link"
                            to=""
                            onClick={() => {
                                localStorage.removeItem("B&S_User");
                                navigate("/", { replace: true });
                            }}
                        >
                            Logout
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}







