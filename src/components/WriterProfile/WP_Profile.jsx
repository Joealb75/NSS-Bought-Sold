// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_Profile.jsx
import "./writerProfile.css"
import "/../NSS-Bought-Sold/src/App.css" 
import { useEffect, useState } from "react";
import { getWriterInfoByUserId } from "../../services/writerService.js";
import { Link} from "react-router-dom";
import { CreateNewArticle } from "../Create/NewArticle.jsx";
import { ProfileToolBar } from "../Nav/ToolBar.jsx";
import { WritersProfileCard } from "./WP_ProfileHeader.jsx";

export const WriterProfile = ({ currentUser }) => {

  const [showCreateNewArticle, setShowCreateNewArticle] = useState(false);
  const [writer, setWriter] = useState(null);

  useEffect(() => { // runs when the prop {currentUser} changes
    getWriterInfoByUserId(currentUser.id).then((data) => {
      const WriterObj = data[0];
      setWriter(WriterObj);
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

      <section className="">
        <div className=""> latest Article Section </div>
      </section>

      <section>
        <Link to={`/profile/${currentUser.id}/new-article`}>
          <button
            className=""
            // when clicked showCreateNewArticle is set to 'true' 
            onClick={() => setShowCreateNewArticle(!showCreateNewArticle)}
          >Create New Article
          </button>
        </Link>

        {showCreateNewArticle &&
        // checks to see if the url matches the path and if both evaluate to true CreateNewArticle is rendered 
          window.location.pathname === `/profile/${currentUser.id}/new-article` && (
            <CreateNewArticle currentUser={currentUser} /> )}
      </section>
      </div>
    </>
  );
};
