// get all articles 

export const getAllArticles = () =>{
    return fetch("http://localhost:8088/articles").then((res) => res.json())
}

export const SubmitNewArticle = () =>{
    return fetch ("")
}