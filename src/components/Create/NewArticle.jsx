
// map over select categories from the database 
/*

 <select
            value={all of the options}
            onChange={ useState -> set selected category}
            aria-label="Select Category"
            >Select Category</select>

*/
// FILE PATH: ./NSS-Bought-Sold/src/components/Create/NewArticle.jsx

import { getAllCategories } from "../../services/CategoriesService.js"
import { useEffect, useState } from "react"

export const CreateNewArticle = ({currentUser}) =>{

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory ] = useState({})

    useEffect(() =>{
        getAllCategories().then((data)=>{
            setCategories(data)
            console.log(data)
        })
    }, [])

    return(
    <>
        <div>
            <input placeholder="Article Title" type="text"></input>
            <select
            className="profile-categories"
            value={selectedCategory}
            onChange={choice => setSelectedCategory(choice.target.value)}
            aria-label="Select Article Category"
            >
            <option value="">Select Article Category</option>
            {categories.map((category)=>
                <option key={category.id} value={category.id}>{category.name}</option>
            )}
            </select>
            {console.log(JSON.stringify(selectedCategory))}
        </div>
        <div>
            <input placeholder="Start writing your new article" type="text" />
        </div>
        <div>
            <button>Submit New Article</button>
        </div>

        
        
    </>
    )
}