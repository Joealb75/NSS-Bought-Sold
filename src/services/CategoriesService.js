
export const getAllCategories = () =>{
    return fetch("http://localhost:8088/articleCategories").then((res) => res.json()) 
}

export const getArticlesByCategoryId = (categoryId) =>{
    return fetch(`http://localhost:8088/articles?categoryId=${categoryId}`).then((res) => res.json())
}

