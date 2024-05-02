// FILE PATH: ./NSS-Bought-Sold/src/components/Edit/EditArticle.jsx
//
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getArticleById, SubmitEditArticle, deleteArticle } from "../../services/articleService.js"
import { getAllCategories } from "../../services/categoriesService.js"


export const EditArticle = ({currentUser}) =>{
    
    const navigate = useNavigate();

    const [article, setArticle] = useState({
        // Need to set initial values for the "value" fields on the form or else they are undefined on initial render 
        title: '',
        articleContent: '',
        categoryId: '',
        image: '',
      });

    const [categories, setCategories] = useState([])
    const {articleId} = useParams()
    

    useEffect(() =>{
        getArticleById(articleId).then((data) => {
            setArticle(data)
        })
        
    },[articleId])

    useEffect(() =>{
        getAllCategories().then((data)=>{
            setCategories(data)
        })
    }, [])


    const handleInputChange = (event) => { 
        let { name, value  } = event.target; // Extract the name and value properties from the event target (the input field that was changed)

        if(name === "categoryId") {
            value = parseInt(value); // parseInt the value here
        }

        setArticle((previousArticle) => ( // Call the setArticle function with a callback function that updates the article state
             { ...previousArticle, [name]: value  } // Return a new object that merges the previous article state with a new property
        )) // The new property has a key equal to the input field's name and a value equal to the new value entered by the user
    }

    const handleSaveArticleChanges = (event) =>{
        event.preventDefault()
        SubmitEditArticle(article, articleId).then((updatedArticle) =>{
            console.log(updatedArticle)
            navigate(`/my-articles/${currentUser.id}/view-article/${articleId}`)
            // Navigate to updated article display page 
        })
    }

    const handleDeleteArticle = (event) =>{
        event.preventDefault()
        deleteArticle(articleId).then(() =>{
            navigate(`/my-articles/${currentUser.id}`)
            // stretch - navigate to a page that renders for 3sec saying "Article has been deleted, ____" 
        })
    }

    return(
        <>
        <h1>Edit Article</h1>
            <form>
                <div>
                    <label>
                        Title:
                        <input
                        type="text"
                        name="title"
                        value={article.title}
                        onChange={handleInputChange}
                        />
                        
                    </label>

                    <label>
                        Categories
                        <select
                        className="profile-categories"
                        name="categoryId"
                        aria-label="Select Article Category"
                        value={article.categoryId}
                        onChange={handleInputChange}
                        >

                        <option value="">Change Article Category</option>
                        {categories.map((category)=> (
                        <option key={category.id} value={category.id}>{category.name}</option>
                        ))}

                        </select>
                    </label>
                </div>

                <div>
                    <h4>Article Content</h4>
                    <textarea 
                    name="articleContent"
                    className=""
                    value={article.articleContent}
                    onChange={handleInputChange}
                    />
                </div>
                
                <div>
                    <h4>Article Image</h4>
                    <input 
                    placeholder="Insert Image URL"
                    name="image"
                    type="text"
                    value={article.image}
                    onChange={handleInputChange}
                    />
                </div>


                <div>
                    <button
                    type="delete" 
                    className="editArticle-deleteBtn"
                    onClick={handleDeleteArticle}
                    >Delete Article</button>


                    <button
                    type="submit"
                    className="editArticle-saveBtn"
                    onClick={handleSaveArticleChanges}
                    >Save Changes</button>
                </div>

            </form>
        </>
    )
}

