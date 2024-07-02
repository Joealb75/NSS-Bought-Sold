import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SubmitNewArticle } from "../../services/ArticleService.js";
import { getAllCategories } from "../../services/CategoriesService.js";
import './NewArticle.css'

export const CreateNewArticle = ({ currentUser }) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [articleTitle, setArticleTitle] = useState("");
    const [newArticleContent, setNewArticleContent] = useState("");
    const [articleImage, setArticleImage] = useState("");

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    const handleSubmitNewArticle = async (event) => {
        event.preventDefault();
        const newArticle = {
            userId: currentUser.id,
            title: articleTitle,
            categoryId: selectedCategory,
            articleContent: newArticleContent,
            isFeaturedArticle: false,
            image: articleImage,
            dateUploaded: new Date(),
        };
        SubmitNewArticle(newArticle).then(() => {
            navigate(`/my-articles/${currentUser.id}`);
        });
    };

    return (
        <section className="article-creation">
            <h1 className="title">Create New Article</h1>
            <form onSubmit={handleSubmitNewArticle} className="article-form">
                <div className="input-group">
                    <input
                        className="input-title"
                        placeholder="Article Title"
                        type="text"
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                    />
                    <select
                        className="select-category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        aria-label="Select Article Category"
                    >
                        <option value="">Select Article Category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <textarea
                        className="input-content"
                        placeholder="Start writing your new article"
                        value={newArticleContent}
                        onChange={(e) => setNewArticleContent(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input
                        className="input-image"
                        placeholder="Insert Image URL"
                        type="text"
                        value={articleImage}
                        onChange={(e) => setArticleImage(e.target.value)}
                    />
                    <button type="submit" className="submit-article">Submit New Article</button>
                </div>
            </form>
        </section>
    );
}
