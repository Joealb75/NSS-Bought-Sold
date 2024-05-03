// FILE PATH: /.NSS-Bought-Sold/src/components/Nav/navBar.jsx
import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom"

export const NavBar = ({currentUser}) =>{

  
    const navigate = useNavigate()
    return <ul className="navbar">
        <h3>Bought & Sold</h3>
        
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