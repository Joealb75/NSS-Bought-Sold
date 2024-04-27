// FILE PATH: ./NSS-Bought-Sold/src/services/ArticleService.js

export const getAllArticles = () =>{
    return fetch("http://localhost:8088/articles").then((res) => res.json())
}

export const SubmitNewArticle = (newArticle) =>{
    
    return fetch ("http://localhost:8088/articles", {
        method: "POST", 
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(newArticle),
    }
)}

export const getArticlesByUserId = (userId) => {
    return fetch(`http://localhost:8088/articles?userId=${userId}&_expand=user`).then((res) => res.json())
}

export const getArticleById = (articleId) =>{
    return fetch(`http://localhost:8088/articles/${articleId}`).then((res) => res.json())
}