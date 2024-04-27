// FILE PATH: ./NSS-Bought-Sold/src/components/Create/NewArticle.jsx
import { useNavigate } from "react-router-dom"
import { SubmitNewArticle } from "../../services/ArticleService.js"
import { getAllCategories } from "../../services/CategoriesService.js"
import { useEffect, useState } from "react"

export const CreateNewArticle = ({currentUser}) =>{
    const navigate = useNavigate();

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory ] = useState({})
    const [articleTitle, setArticleTitle] = useState("")
    const [newArticleContent, setNewArticleContent] = useState("")
    const [articleImage, setArticleImage] = useState(""); // Add a state variable for the image

    useEffect(() =>{
        getAllCategories().then((data)=>{
            setCategories(data)
            console.log(data)
        })
    }, [])

    const handleSubmitNewArticle = async (event) =>{
        event.preventDefault() // prevents the reload of the page
        const newArticle = {
            userId : currentUser.id,
            title : articleTitle,
            categoryId : selectedCategory.id,
            articleContent : newArticleContent,
            isFeaturedArticle: false,
            image : articleImage,
            dateUploaded: new Date(), 
        }
        console.log(newArticle)
        SubmitNewArticle(newArticle).then(()=>{
            navigate(`/my-articles/${currentUser.id}`)
        })
    }

    // after user clicks "'Submit New Article " take them to "MyArticles"

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
            value={newArticleContent}
            onChange={(event)=>{setNewArticleContent(event.target.value)}}
            />
        </div>
        <div>

            <input
            placeholder="Insert Image URL"
            type="text"
            value={articleImage}
            onChange={(event)=>{setArticleImage(event.target.value)}}

            />
            <button onClick={handleSubmitNewArticle}>Submit New Article</button>
        </div>

    </>
    )
}