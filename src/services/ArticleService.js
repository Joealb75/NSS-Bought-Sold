// get all articles 

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