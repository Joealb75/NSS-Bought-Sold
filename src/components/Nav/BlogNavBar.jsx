import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogNavBar.css';

export const BlogNavBar = () => {
  const navigate = useNavigate();
  
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("B&S_User");
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("B&S_User");
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="blog-navbar">
      <div className="blog-navbar-logo">
        <a href="/">Bought & Sold</a>
      </div>
      <div className="blog-navbar-links">
        <a href="/">Home</a>
       
        <a href="/blog-home">Blog</a>
        <a href="/pricing">Pricing</a>
        {LoggedIn ? (
          <button onClick={handleLogout} className="blog-navbar-logout-button">Log Out</button>) : (
          <>
            <a href="/login">Log In</a>
            <a href="/register" className="blog-navbar-register-button">Sign Up</a>
          </>
        )}
      </div>
    </nav>
  );
};













