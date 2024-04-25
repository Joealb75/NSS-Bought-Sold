
// Goal: To display the logged in user profile when they click on "Profile"

// ! What this module needs to accomplish

//  Display the WP_ProfileHeader.jsx on the top of every profile -- can be handled in Application views?

// Check to see if the user has a featured article - IF so display it -- SEMI STRETCH
//

// ! Have a Create New Article Button that takes them to "/newArticle"

// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_Profile.jsx
import { useEffect, useState } from "react";
import { getWriterInfoByUserId } from "../../services/WriterService.js";

export const WriterProfile = ({currentUser}) => {

    const [writer, setWriter] = useState(null)

    useEffect(()=>{
        getWriterInfoByUserId(currentUser.id).then((data) =>{
            let WriterObj = data[0]
            setWriter(WriterObj)
        })

    }, [currentUser.id, currentUser])


    return (
        <section className="profile">
          <div className="profile-img">
            <img src={writer?.user?.userImg} />
          </div>
          <div className="profile-name">
            <h2>{writer?.user?.fullName}</h2>
    
            {/* Checks to see if the writers array is empty - if its not empty render the following */}
          
            <h4 className="profile-job">{writer?.writerProfession}  {writer?.writerCompany}</h4>
          
          </div>
        </section>
      );

};
