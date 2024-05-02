// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_About.jsx

import { useEffect, useState } from "react"
import { getWriterInfoByUserId } from "../../services/writerService.js"
import { Link } from "react-router-dom";
import { WritersProfileCard } from "./WP_ProfileHeader.jsx";

export const WriterProfileAbout = ({currentUser}) => {

    const [writer, setWriter] = useState({});

    useEffect(() =>{
        getWriterInfoByUserId(currentUser.id).then((data) =>{
            const WriterObj = data[0];
            setWriter(WriterObj);
        })
    },[currentUser.id])

    return(
        <>
            <section>
                <WritersProfileCard currentUser={currentUser} />
            </section>
            <section className="profile">

                <section className="profile-aboutMe">
                    <div>
                        <h1>About Me</h1> 
                        <Link to={`/about/edit-profile/${currentUser.id}`}>
                            <button>Edit Profile</button>
                        </Link>
                        
                    </div>
                    <div>
                        <span>
                            {writer.aboutMe}
                        </span>
                    </div>
                </section>

                <section className="profile-skillsContainer">
                    <div className="profile-skills">
                        <span>
                            {writer.writerSkills}
                        </span>
                    </div>
                </section>

            </section>
        </>
    )
}