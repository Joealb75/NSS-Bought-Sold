import { useEffect, useState } from "react"
import { getAllArticles } from "../../services/articleService.js"
import { Link } from "react-router-dom"



export const BlogHome = () => {

    const [allArticles, setAllArticles] = useState([])

    useEffect(() =>{
        getAllArticles().then((data) =>{
            setAllArticles(data)
        })
    }, [])


    return (
        <>
            <section className="">

            </section>
                {/* Announcement / picture / article */}

            <section>
                {/* tool bar to filter articles by category  */}
            </section>

            <section>
                {allArticles.map((articleObj) =>{
                    console.log(articleObj)
                    return(
                        <>
                            <div className="article">
                                <Link to={`/blog-home/${articleObj.id}/view-article/${articleObj.title}`}>
                                <div className="article-image">
                                    <img src={articleObj.image} alt={articleObj.title} />
                                    <h3>{articleObj.title}</h3>
                                </div>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}