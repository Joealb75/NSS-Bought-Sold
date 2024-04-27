// FILE PATH: ./NSS-Bought-Sold/src/components/Edit/EditArticle.jsx

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../../services/ArticleService.js"
import { getAllCategories } from "../../services/CategoriesService.js"
import { SubmitEditArticle } from "../../services/ArticleService.js"

// export const EditArticle = ({articleObj}) =>{
export const EditArticle = ({currentUser}) =>{
    
    const [article, setArticle] = useState({
        // Need to set initial values for the "value" fields on the form or else they are undefined on initial render 
        title: '',
        articleContent: '',
        categoryId: '',
        image: '',
      });

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory ] = useState({})
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
            // Navigate to updated article display page 
        })
    }



    return(
        <>
            <form onSubmit={handleSaveArticleChanges}>
                <div>
                    <label>
                        <input
                        type="text"
                        name="title"
                        value={article.title}
                        onChange={handleInputChange}
                        />
                        
                    </label>

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

                </div>

                <div>
                    <textarea 
                    name="articleContent"
                    className=""
                    value={article.articleContent}
                    onChange={handleInputChange}
                    />
                </div>
                
                <div>
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
                    type="delete" // look into further 
                    className="editArticle-deleteBtn"
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

