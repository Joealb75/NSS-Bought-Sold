import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../../services/ArticleService.js";
import { useEffect, useState } from "react";
import { getWriterInfoByUserId } from "../../services/WriterService.js";
import "./viewArticle.css"; 

import { CommentSection } from "../comments/commentSection.jsx";
import { BlogNavBar } from "../Nav/BlogNavBar.jsx";

export const ViewArticle = ({currentUser}) => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [writerInfo, setWriterInfo] = useState();

  useEffect(() => {
    getArticleById(articleId).then((data) => {
      setArticle(data);
    });
  }, [articleId]);

  useEffect(() => {
    getWriterInfoByUserId(article.userId).then((data) => {
      const WriterObj = data[0];
      setWriterInfo(WriterObj);
    });
  }, [article.userId]);

  return (
    <>
    <BlogNavBar />
   
    <div className="article-container">
      <img src={article.image} className="article-image" alt="Article" />
      <h2 className="article-title">{article.title}</h2>
      <p className="article-content">{article.articleContent}</p>
      <section className="author-container">
        <img
          src={writerInfo?.user.userImg}
          className="author-image"
          alt="Author"
        />
        <Link to={`/profile/${writerInfo?.user.id}`} className="author-name">
          Author: {writerInfo?.user.fullName}
        </Link>
      </section>

      <section>
        <CommentSection currentUser={currentUser} articleId={articleId}/>
      </section>
    </div>
    </>
  );
};
