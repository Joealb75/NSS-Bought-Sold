// FILE PATH: ./NSS-Bought-Sold/src/components/Create/NewArticle.jsx

import { getAllCategories } from "../../services/CategoriesService.js"
import { useEffect, useState } from "react"

export const CreateNewArticle = ({currentUser}) =>{

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory ] = useState({})
    const [articleTitle, setArticleTitle] = useState("")
    const [articleContent, setArticleContent] = useState("")

    useEffect(() =>{
        getAllCategories().then((data)=>{
            setCategories(data)
            console.log(data)
        })
    }, [])

    const handleSubmitNewArticle = async (event) =>{
        const newArticle = {}
        event.preventDefault() // prevents the reload of the page 
        const title = articleTitle
        const categoryId = selectedCategory.id
        const content = articleContent
    }

    return(
    <>
        <div>

            <input 
            placeholder="Article Title" 
            type="text"
            value={articleTitle}
            onChange={(event) => setArticleTitle(event.target.value)}
            />

            <select
            className="profile-categories"
            value={selectedCategory}
            onChange={event => setSelectedCategory(event.target.value)}
            aria-label="Select Article Category"
            >

            <option value="">Select Article Category</option>
            {categories.map((category)=> (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
            </select>
            
        </div>

        <div>
            <input 
            placeholder="Start writing your new article" 
            type="text" 
            value={articleContent}
            onChange={(event)=>{setArticleContent(event.target.value)}}
            />
        </div>
        <div>
            <button onClick={handleSubmitNewArticle}>Submit New Article</button>
        </div>

    </>
    )
}