import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom"


export const NavBar = () =>{
    const navigate = useNavigate()
    return <ul className="navbar">
        <li className="navbar-item">
            <Link to="/">Profile</Link>
        </li>
        <li className="navbar-item">
            <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
            <Link to="/myarticles">My Articles</Link>
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