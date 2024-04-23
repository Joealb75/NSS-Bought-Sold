// get all categories

export const getAllCategories = () =>{
    return fetch("http://localhost:8088/articleCategories").then((res) => res.json()) 
}