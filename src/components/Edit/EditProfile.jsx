// FILE PATH: ./NSS-Bought-Sold/src/components/Edit/EditProfile.jsx

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getWriterInfoByUserId, SubmitWriterInfo } from "../../services/WriterService.js";
import { getUserById, SubmitUserInfo } from "../../services/userService.js";



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
    const handleProfileChange = (event) =>{
        const { name, value  } = event.target
        setWriterInfo((oldProfile) => (
            { ...oldProfile, [name]: value }
        ))
    } /// CURRENT STATE BEFORE CHANGES

    const handleSaveProfile = (event) =>{
        event.preventDefault()
        if (!writerInfo) return; 
        const { user, ...writerInfoData } = writerInfo; 
        const writerInfoWithoutUser = { ...writerInfoData, userId: writerInfo.user.id }; 
        SubmitWriterInfo(writerInfoWithoutUser, currentUser.id).then((updatedWriterInfo) =>{
            console.log("writer info with out user", writerInfoWithoutUser)
        })
        SubmitUserInfo(user, currentUser.id) 
        console.log("user Info:" ,user)
    }
        // only sending userId at this moment
        // ASK How to get user{object} to send with SubmitUserInfo


// ---------------------------------------------------- DOM
    return (
    <>
        <div>
            <h1>Edit Profile</h1>
        </div>

        <form>
            <div>
                <label>
                    <input 
                    type="text"
                    name="fullName"
                    value={writerInfo?.user?.fullName || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    <input 
                    type="text"
                    name="email"
                    value={writerInfo?.user?.email || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
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
                    <input 
                    type="text"
                    name="writerProfession"
                    value={writerInfo?.writerProfession || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    <input 
                    type="text"
                    name="writerCompany"
                    value={writerInfo?.writerCompany || ''}
                    onChange={handleProfileChange}
                    />
                </label>
            </div>

            <div className="editProfile-container-AboutMe">
                <div>
                    <textarea 
                    name="aboutMe"
                    value={writerInfo?.aboutMe || ''}
                    onChange={handleProfileChange}
                    />
                </div>

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

