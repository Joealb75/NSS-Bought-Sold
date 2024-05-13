// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/WP_About.jsx
import "./wpAbout.css"
import { useEffect, useState } from "react"
import { getWriterInfoByUserId } from "../../services/writerService.js"
import { Link } from "react-router-dom";
import { WritersProfileCard } from "./WP_ProfileHeader.jsx";
import { ProfileToolBar } from "../Nav/ToolBar.jsx";

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
        <div className="color">
            <section>
                <WritersProfileCard currentUser={currentUser} />
            </section>
            <section className="profile-main">
                <ProfileToolBar currentUser={currentUser} />
                
                <section className="profile-about-container">
                    <div className="profile-about-header">
                        <h1>About Me</h1>
                        <Link to={`/about/edit-profile/${currentUser.id}`} className="edit-link">
                            <button className="edit-button">Edit Profile</button>
                        </Link>
                    </div>
                    <div className="profile-about-body about-me-box">
                        <p>{writer.aboutMe}</p>
                    </div>
                    <div className="profile-about-skills skills-box">
                        <h1>Skills</h1>
                        <p>{writer.writerSkills}</p>
                    </div>
                </section>
            </section>
            <section>
                
            </section>
        </div>
        </>
    )
}



