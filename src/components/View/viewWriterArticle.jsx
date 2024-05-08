// FILE PATH: ./NSS-Bought-Sold/src/components/View/viewArticle.jsx
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getArticleById } from "../../services/articleService.js"
import { getWriterInfoByUserId } from "../../services/writerService.js"

export const ViewWriterArticle = ( {currentUser} ) =>{
    
    const [writerArticle, setWriterArticle ] = useState({})
    const [writerInfo, setWriterInfo] = useState()
    const { articleId } = useParams()

    useEffect(() => {
        getArticleById(articleId).then((data) =>{
            setWriterArticle(data)
            console.log(data)
        })

    },[articleId])

    useEffect(() => { // runs when the prop {currentUser} changes
        getWriterInfoByUserId(currentUser.id).then((data) => {
          const WriterObj = data[0];
          setWriterInfo(WriterObj);
        });
      }, [currentUser.id]);

    return(
        <>
            <section>
                <div>
                    <img src={writerArticle.image}/>
                </div>
                <div>
                    <h2>{writerArticle.title}</h2>
                </div>
                <div>
                    <p>{writerArticle.articleContent}</p>
                </div>
            </section>

            <section>
                <div>
                    <img src={writerInfo?.user.userImg}/>
                </div>
                <div>
                    <Link to={`/profile/${writerInfo?.user.id}`}>
                    <h2>Author: {writerInfo?.user.fullName}</h2>
                    </Link>
                </div>
            </section>
        </>
    )
}