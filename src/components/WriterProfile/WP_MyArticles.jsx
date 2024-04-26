// FILE PATH ./NSS-Bought-Sold/src/components/WriterProfile/WP_MyArticles.jsx
import { useEffect, useState } from "react"
import { getArticlesByUserId } from "../../services/ArticleService.js"
import { Link } from "react-router-dom"
import "./writerProfile.css"

export const WriterProfileMyArticles = ( {currentUser} ) => {
    
    const [allUserArticles, setAllUserArticles ] = useState([])

    useEffect(() => {
        getArticlesByUserId(currentUser.id).then((data) =>{

            setAllUserArticles(data)
            console.log(data)
        })

    },[currentUser.id])

    

    return (
        <section className="profile">
            {allUserArticles.map((articleObj)=>{
                return(
                    <div key={articleObj.id} className="myArticles-card">

                        <div className="myArticles-title">
                            <h2>{articleObj.title}</h2>
                        </div>

                        <div className="myArticles-imageContainer">
                            <img src={articleObj.image} className="myArticles-imageContainer img"/>
                        </div>

                        <div className="myArticles-buttonContainer">
                            <Link to={`/my-articles/${currentUser.id}/edit-article/${articleObj.id}`}>
                                <button> Edit Article </button>
                            </Link>
                        </div>
                        
                    </div>
                )
            })}
        </section>
    )
}