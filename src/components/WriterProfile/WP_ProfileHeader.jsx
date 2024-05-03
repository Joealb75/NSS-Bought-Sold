// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_ProfileHeader.jsx
import "./writerProfile.css"
import { useEffect, useState } from "react";
import { getWriterInfoByUserId } from "../../services/writerService.js";

export const WritersProfileCard = ({currentUser}) => {
  const [writer, setWriters] = useState({});
  
  useEffect(() => { // the code will only run if there is a valid user prop 

       getWriterInfoByUserId(currentUser.id).then((data) => {
         let writerObj = data[0];
         setWriters(writerObj);
       });
   }, [currentUser.id, currentUser]);
   
  return (
    <header className="header">
    <div className="header-content">
        <img src={writer.user?.userImg} alt="Joe Albrecht" className="profile-image"/>
        <div className="profile-info">
            <h1 className="profile-name">{writer.user?.fullName}</h1>
            <p className="profile-title">{writer.writerProfession} @ {writer.writerCompany}</p>
        </div>
    </div>
</header>
  );
};


// {writer.user?.userImg