// import homeImage from "/../NSS-Bought-Sold/src/assets/NashvilleBatman.jpg"
import "./home.css"

export const BShomePage = () => {
    return(
        <div className="bs-home-page">
            <div className="content-container">
                <div className="text-section">
                    <h1 className="home-text">Bought & Sold</h1>
                    <h2 className="home-text">Real Estate News</h2>
                    <p className="home-text">Get the 5-minute newsletter keeping Nashvillians in the loop.</p>
                    <p className="home-text">PSstt..we DO NOT sell your data</p>

                    <button>Featured Articles</button>
                    <button>Blog</button>
                </div>
                <div className="image-section"></div>
            </div>
        </div>
    );
}



