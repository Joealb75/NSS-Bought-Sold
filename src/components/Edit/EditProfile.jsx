// FILE PATH: ./NSS-Bought-Sold/src/components/Edit/EditProfile.jsx
import "./EditProfile.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getWriterInfoByUserId, SubmitWriterInfo } from "../../services/writerService.js";
import {  SubmitUserInfo } from "../../services/UserService.js";


export const EditProfile = ( {currentUser} ) =>{
    const navigate = useNavigate()

    const [writerInfo, setWriterInfo] = useState()

    
// ---------------------------------------------------- UseEffects()
    
    useEffect(() => { // runs when the prop {currentUser} changes
        getWriterInfoByUserId(currentUser.id).then((data) => {
          const WriterObj = data[0];
          setWriterInfo(WriterObj);
        });
      }, [currentUser.id]);

// ---------------------------------------------------- HelperFnc()
    const handleProfileChange = (event) => {
        const { name, value } = event.target;
        if (name === "fullName" || name === "email" || name === "userImg") {
        setWriterInfo((oldProfile) => ({
            ...oldProfile,
            user: { ...oldProfile.user, [name]: value },
            // Updates the nested user object if "fullName, email or userImg" was changed
        }));
        } else {
        setWriterInfo((oldProfile) => ({ ...oldProfile, [name]: value }));
            // else update the writerInfo object 
        }
    }; 

    const handleSaveProfile = (event) =>{
        event.preventDefault()
        if (!writerInfo) return; 
        const { user, ...writerInfoData } = writerInfo; 
        // put the nested user object and writer info into separate variables using the spread operator 

        const writerInfoWithoutUser = { ...writerInfoData, userId: writerInfo.user.id }; 
        // replaced the nested user object with a new property userId
        SubmitWriterInfo(writerInfoWithoutUser, writerInfoWithoutUser.id).then((updatedWriterInfo) =>{
            console.log("writer info with out user", writerInfoWithoutUser)
            
        })
        SubmitUserInfo(user, currentUser.id).then((updatedUserInfo) =>{ 
            console.log("user Info:" ,user) })
       
        navigate(`/about/${currentUser.id}`)
    }


return (
    <section className="edit-profile">
        <h1 className="edit-profile-heading">Edit Profile</h1>

        <form className="edit-profile-form">
            <div className="form-row">
                <label htmlFor="fullName">Name:</label>
                <input 
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={writerInfo?.user?.fullName || ''}
                    onChange={handleProfileChange}
                />
            </div>

            <div className="form-row">
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    value={writerInfo?.user?.email || ''}
                    onChange={handleProfileChange}
                />
            </div>

            <div className="form-row">
                <label htmlFor="userImg">Image:</label>
                <input 
                    type="text"
                    id="userImg"
                    name="userImg"
                    value={writerInfo?.user?.userImg || ''}
                    onChange={handleProfileChange}
                />
            </div>

            <div className="form-row">
                <label htmlFor="writerProfession">Position:</label>
                <input 
                    type="text"
                    id="writerProfession"
                    name="writerProfession"
                    value={writerInfo?.writerProfession || ''}
                    onChange={handleProfileChange}
                />
            </div>

            <div className="form-row">
                <label htmlFor="writerCompany">Company:</label>
                <input 
                    type="text"
                    id="writerCompany"
                    name="writerCompany"
                    value={writerInfo?.writerCompany || ''}
                    onChange={handleProfileChange}
                />
            </div>

            <div className="form-row-textarea">
                <label htmlFor="aboutMe">About Me:</label>
                <textarea 
                    id="aboutMe"
                    name="aboutMe"
                    value={writerInfo?.aboutMe || ''}
                    onChange={handleProfileChange}
                />
            </div>

            <div className="form-row-textarea">
                <label htmlFor="writerSkills">My Skills:</label>
                <textarea 
                    id="writerSkills"
                    name="writerSkills"
                    value={writerInfo?.writerSkills || ''}
                    onChange={handleProfileChange}
                />
            </div>

            <button 
                type="submit"
                className="edit-profile-save-btn"
                onClick={handleSaveProfile}
            >Save Profile</button>
        </form>
    </section>
);


}

// Need to set initial values to "|| '' "for the "value" fields on the form or else they are undefined on initial render 

