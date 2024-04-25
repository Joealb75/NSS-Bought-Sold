// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_ProfileHeader.jsx
import "./writerProfile.css"
import { useEffect, useState } from "react";
import { getWriterInfoByUserId } from "../services/WriterService.js";

export const WritersProfileCard = ({users}) => {
  const [writer, setWriters] = useState({});
  if (!users) return null;
  
  useEffect(() => { // the code will only run if there is a valid user prop 

    if (!users) return;

       getWriterInfoByUserId(users.id).then((data) => {
         let writerObj = data[0];
         setWriters(writerObj);
       });
   }, [users.id, users]);
   
  return (
    <section className="profile">
      <div className="profile-img">
        <img src={writer.user?.userImg} />
      </div>
      <div className="profile-name">
        <h2>{writer.user?.fullName}</h2>

        {/* Checks to see if the writers array is empty - if its not empty render the following */}
      
        <h4 className="profile-job">{writer.writerProfession}  {writer.writerCompany}</h4>
      
      </div>
    </section>
  );
};

export const ProfileCard = () =>{

  
}
