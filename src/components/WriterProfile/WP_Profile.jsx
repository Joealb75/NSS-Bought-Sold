// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_Profile.jsx
import { useEffect, useState } from "react";
import { getWriterInfoByUserId } from "../../services/writerService.js";
import { Link} from "react-router-dom";
import { CreateNewArticle } from "../Create/NewArticle.jsx";
import { ProfileToolBar } from "../Nav/ToolBar.jsx";

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
      
      <section className="profile">
        <div className="profile-img">
          <img src={writer?.user?.userImg} />
        </div>
        <div className="profile-name">
          <h2>{writer?.user?.fullName}</h2>

          {/* Checks to see if the writers array is empty - if its not empty render the following */}

          <h4 className="profile-job">
            {writer?.writerProfession} @ {writer?.writerCompany}
          </h4>
        </div>
      </section>

      <section>
        <ProfileToolBar currentUser={currentUser} />
      </section>

      <section className="profile">
        <div className="profile-featured">Featured Article Space</div>
      </section>

      <section className="profile">
        <div className="profile-latest"> latest Article Section </div>
      </section>

      <section>
        <Link to={`/profile/${currentUser.id}/new-article`}>
          <button
            className="profile-newArticle"
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
    </>
  );
};
