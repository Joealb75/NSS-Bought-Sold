// FILE PATH: /.NSS-Bought-Sold/src/components/Nav/navBar.jsx
import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom"

export const NavBar = ({currentUser}) =>{

  
    const navigate = useNavigate()
    return <ul className="navbar">
        <h3>Bought & Sold</h3>
        <li className="navbar-item">
            <Link to={`/profile/${currentUser.id}`}>Profile</Link>
        </li>
        <li className="navbar-item">
            <Link to={`/about/${currentUser.id}`}>About</Link>
        </li>
        <li className="navbar-item">
            <Link to={`/my-articles/${currentUser.id}`}>My Articles</Link>
        </li>
        
        

        { localStorage.getItem("B&S_User") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("B&S_User")
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)} 
    </ul>
}