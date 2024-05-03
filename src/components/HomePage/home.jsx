import homeImage from "/../NSS-Bought-Sold/src/assets/NashvilleBatman.jpg"
import "./home.css"

export const BShomePage = () => {
    return(
        <>
            <h1>Bought & Sold</h1>
            <div className="content-container">
                <section className="text-section">
                    <h2>Real Estate News</h2>
                    <p>Get the 5-minute newsletter keeping Nashvillians in the loop.</p>
                    <p>PSstt..we DO NOT sell your data</p>
                </section>
                
                <section className="image-section">
                    <img src={homeImage} className="home-image" />
                </section>
            </div>
        </>
    );
}
