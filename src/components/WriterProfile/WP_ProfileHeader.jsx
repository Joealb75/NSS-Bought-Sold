// 1. Get & Display Writer profile picture, name, position and company
import "./writerProfile.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWriterInfoByUserId } from "../../services/WriterService.js";

export const WriterProfileHeader = () => {
  const [user, setUsers] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    getWriterInfoByUserId(userId).then((data) => {
      let writerObj = data[0];
      console.log(writerObj);
      setUsers(writerObj);
    });
  }, [userId]);
  
  // destructure writers from user with the default value of an empty array 
  const { writers = [] } = user;

  return (
    <section className="profile">
      <div className="profile-img">
        <img src={user.userImg} />
      </div>
      <div className="profile-name">
        <h2>{user.fullName}</h2>

        {/* Checks to see if the writers array is empty - if its not empty render the following */}
      {writers.length > 0 && (
            <h4 className="profile-job">{writers[0].writerProfession} @ <a href="https://simplihom.com/" target="_blank">{writers[0].writerCompany}</a></h4>
      )}
      </div>
    </section>
  );
};


// When i click on profile i need it to take me to the users profile that is currently logged in 