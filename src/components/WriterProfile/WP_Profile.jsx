// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_Profile.jsx
import "./writerProfile.css";
import "/../NSS-Bought-Sold/src/App.css";
import { useEffect, useState } from "react";
import { getWriterInfoByUserId } from "../../services/WriterService.js";
import { Link } from "react-router-dom";
import { CreateNewArticle } from "../Create/NewArticle.jsx";
import { ProfileToolBar } from "../Nav/ToolBar.jsx";
import { WritersProfileCard } from "./WP_ProfileHeader.jsx";
import { getArticlesByUserId } from "../../services/ArticleService.js";

export const WriterProfile = ({ currentUser }) => {
  const [showCreateNewArticle, setShowCreateNewArticle] = useState(false);
  const [writer, setWriter] = useState(null);
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    getWriterInfoByUserId(currentUser.id).then((data) => {
      const WriterObj = data[0];
      setWriter(WriterObj);
    });
  }, [currentUser.id]);

  useEffect(() => {
    getArticlesByUserId(currentUser.id).then((articles) => {
      articles.sort(
        (latest, oldest) =>
          new Date(oldest.dateUploaded) - new Date(latest.dateUploaded)
      );
      // .sort orders the articles with the most recent appearing first
      setLatestArticles(articles);
    });
  }, [currentUser.id]);

  return (
    <>
      <div className="color">
        <section>
          <WritersProfileCard currentUser={currentUser} />
          <ProfileToolBar currentUser={currentUser} />
        </section>

        <section className="">
          <div className="">Featured Article Space</div>
        </section>
        
        <div className="latest-articles-divider"></div>
        <h2 className="latest-articles-heading">Latest Articles</h2>
        <div className="latest-articles-container">
          
          <div className="latest-articles-scroll">
            {latestArticles.map((article) => (
            <>
              <Link to={`/blog-home/${article.id}/view-article/${article.title}`}>
              <div className="latest-article-card" key={article.id}>
                <div className="latest-article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="latest-article-title">
                  <h3>{article.title}</h3>
                  <p>{new Date(article.dateUploaded).toLocaleDateString()}</p>
                </div>
              </div>
              </Link>
            </>
            ))}
          </div>
        </div>

        <section>
          <Link to={`/profile/${currentUser.id}/new-article`}>
            <button
              className="btn-2"
              // when clicked showCreateNewArticle is set to 'true'
              onClick={() => setShowCreateNewArticle(!showCreateNewArticle)}
            >
              Create New Article
            </button>
          </Link>

          {showCreateNewArticle &&
            // checks to see if the url matches the path and if both evaluate to true CreateNewArticle is rendered
            window.location.pathname ===
              `/profile/${currentUser.id}/new-article` && (
              <CreateNewArticle currentUser={currentUser} />
            )}
        </section>
      </div>
    </>
  );
};
