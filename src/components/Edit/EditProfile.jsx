// FILE PATH: ./NSS-Bought-Sold/src/components/Edit/EditProfile.jsx

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getWriterInfoByUserId, SubmitWriterInfo } from "../../services/writerService.js";
import {  SubmitUserInfo } from "../../services/userService.js";


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
        // replace the nested user object with a new property userId
        SubmitWriterInfo(writerInfoWithoutUser, writerInfoWithoutUser.id).then((updatedWriterInfo) =>{
            console.log("writer info with out user", writerInfoWithoutUser)
            // later: useNavigate to go to different page
        })
        SubmitUserInfo(user, currentUser.id).then((updatedUserInfo) =>{ 
            console.log("user Info:" ,user) })
            // later: useNavigate to go to different page
    }

// ---------------------------------------------------- DOM
    return (
    <>
        <div>
            <h1>Edit Profile</h1>
        </div>

        <form>
            <div>
                <label>
                    Name:
                    <input 
                    type="text"
                    name="fullName"
                    value={writerInfo?.user?.fullName || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    Email:
                    <input 
                    type="text"
                    name="email"
                    value={writerInfo?.user?.email || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    Image:
                    <input 
                    type="text"
                    name="userImg"
                    value={writerInfo?.user?.userImg || ''}
                    onChange={handleProfileChange}
                    />
                </label>

            </div>

            <div>
                <label>
                    Position:
                    <input 
                    type="text"
                    name="writerProfession"
                    value={writerInfo?.writerProfession || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    Company:
                    <input 
                    type="text"
                    name="writerCompany"
                    value={writerInfo?.writerCompany || ''}
                    onChange={handleProfileChange}
                    />
                </label>
            </div>

            <div className="editProfile-container-AboutMe">
                <h4>About Me</h4>
                <div>
                    <textarea 
                    name="aboutMe"
                    value={writerInfo?.aboutMe || ''}
                    onChange={handleProfileChange}
                    />
                </div>
                
                <h4>My Skills</h4>
                <div>
                    <textarea 
                    name="writerSkills"
                    value={writerInfo?.writerSkills || ''}
                    onChange={handleProfileChange}
                    />
                </div>

                <div>
                    <button 
                    type="submit"
                    className="editProfile-saveBtn"
                    onClick={handleSaveProfile}
                    >Save Profile</button>
                </div>
            </div>
        </form>
    </>
    )
}

// Need to set initial values to "|| '' "for the "value" fields on the form or else they are undefined on initial render 

