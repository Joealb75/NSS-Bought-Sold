// FILE PATH ./NSS-Bought-Sold/src/components/WriterProfile/WP_MyArticles.jsx
import { useEffect, useState } from "react"
import { getArticlesByUserId } from "../../services/articleService.js"
import { Link } from "react-router-dom"
import "./writerProfile.css"
import { WritersProfileCard } from "./WP_ProfileHeader.jsx"
import { ProfileToolBar } from "../Nav/ToolBar.jsx"


export const WriterProfileMyArticles = ( {currentUser} ) => {
    
    const [allUserArticles, setAllUserArticles ] = useState([])
    
    useEffect(() => {
        getArticlesByUserId(currentUser.id).then((data) =>{
            setAllUserArticles(data)
            
        })

    },[currentUser.id])

    return (
        <>
            <section>
                <WritersProfileCard currentUser={currentUser} />
                <ProfileToolBar currentUser={currentUser} />
            </section>
            <section className="articles-container">
                {allUserArticles.map((articleObj) => {
                    console.log(articleObj);  // This console.log can be removed after confirming the structure works.
                    return (
                        <div key={articleObj.id} className="article">
                            <Link to={`/my-articles/${currentUser.id}/view-article/${articleObj.id}`}>
                                <div className="article-image">
                                    <img src={articleObj.image} alt={articleObj.title} />
                                </div>
                                <div className="article-title">
                                    <h3>{articleObj.title}</h3>
                                </div>
                            </Link>
                            <div className="article-edit">
                                <Link to={`/my-articles/${currentUser.id}/edit-article/${articleObj.id}`}>
                                    <button>Edit</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}