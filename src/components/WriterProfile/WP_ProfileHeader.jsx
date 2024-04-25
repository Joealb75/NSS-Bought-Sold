// 1. Get & Display Writer profile picture, name, position and company
import "./writerProfile.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWriterInfoByUserId } from "../../services/WriterService.js";

export const WriterProfileHeader = ({user}) => {
  const [writer, setWriters] = useState({});
  // const { userId } = useParams();

  useEffect(() => {
  //   if (userId){
       getWriterInfoByUserId(user.id).then((data) => {
         let writerObj = data[0];
  //       console.log(writerObj);
         setWriters(writerObj);
       });
     // }
   }, [user.id]);
  
  // destructure writers from user with the default value of an empty array 
  // const { writers = [] } = user;

  return (
    <section className="profile">
      <div className="profile-img">
        <img src={writer.user?.userImg} />
      </div>
      <div className="profile-name">
        <h2>{writer.user?.fullName}</h2>

        {/* Checks to see if the writers array is empty - if its not empty render the following */}
      
        <h4 className="profile-job">{writer.writerProfession} Test {writer.writerCompany}</h4>
      
      </div>
    </section>
  );
};


// When i click on profile i need it to take me to the users profile that is currently logged in 