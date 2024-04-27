// FILE PATH: ./NSS-Bought-Sold/src/components/Edit/EditArticle.jsx
// use a form to edit article 

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../../services/ArticleService.js"

// export const EditArticle = ({articleObj}) =>{
export const EditArticle = ({currentUser}) =>{
    
    const [article, setArticle] = useState([])
    const {articleId} = useParams()
    

    useEffect(() =>{
        getArticleById(articleId).then(setArticle)
        
    },[articleId])



    return(
        <>
            <div> test
                <input 
                placeholder={article.title}
                />
                {article.articleContent}
            </div>
        </>
    )
}