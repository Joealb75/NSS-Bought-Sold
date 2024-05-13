import { Link } from "react-router-dom";
import "./home.css"
import { BurgerMenu } from "../Nav/burger.jsx";


export const BShomePage = ({currentUser}) => {
    return(
        <>
        <BurgerMenu currentUser={currentUser}/>
        <div className="bs-home-page">
            <div className="content-container">
                <div className="text-section">
                
                    <h1 className="home-text">Bought & Sold</h1>
                    <h2 className="home-text-h2">Real Estate News</h2>

                    <p className="home-text-p">Get the 5-minute newsletter keeping Nashvillians in the loop.</p>
                    <input 
                    className="email-signUp"
                    placeholder="Email"
                    
                    ></input>
                    

                    <p className="home-text-p">PSstt..we DO NOT sell your data</p>

                    {/* <button>Featured Articles</button> */}

                    <Link to={"/blog-home"}>
                        <button className="home-btn">Blog</button>
                    </Link>
                    
                </div>
                <div className="image-section"></div>
            </div>
        </div>
        </>
    );
}



