import { useParams, Link } from "react-router-dom"
import { getArticleById } from "../../services/articleService.js"
import { useEffect, useState } from "react"
import { getWriterInfoByUserId } from "../../services/writerService.js"



export const ViewArticle = () => {

    const {articleId} = useParams()
    const [article, setArticle] = useState({})
    const [writerInfo, setWriterInfo] = useState()

    useEffect(() =>{
        getArticleById(articleId).then((data)=>{
            setArticle(data)
            console.log(data)
        })
    },[articleId])

    useEffect(() => { // runs when the prop {currentUser} changes
        getWriterInfoByUserId(article.userId).then((data) => {
          const WriterObj = data[0];
          setWriterInfo(WriterObj);
        });
      }, [article.userId]);

    return (
        <>
        <section>
            <div>
                <img src={article.image}/>
            </div>
            <div>
                <h2>{article.title}</h2>
            </div>
            <div>
                <p>{article.articleContent}</p>
            </div>
        </section>

        <section>
            <div>
                <img src={writerInfo?.user.userImg}/>
            </div>
            <div>
                <Link to={`/profile/${writerInfo?.user.id}`}>
                <h2>Author: {writerInfo?.user.fullName}</h2>
                {/* Link does not work when not signed in as the user who wrote the article  */}
                </Link>
            </div>
        </section>
    </>
    )
}