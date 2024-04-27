// FILE PATH: ./NSS-Bought-Sold/src/components/Edit/EditProfile.jsx

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { getUserById } from "../../services/userService.js"
import { getWriterInfoByUserId, SubmitWriterProfile } from "../../services/WriterService.js";



export const EditProfile = ( {currentUser} ) =>{
    const navigate = useNavigate()

    const [writerProfile, setWriterProfile] = useState()
    
    useEffect(() => { // runs when the prop {currentUser} changes
        getWriterInfoByUserId(currentUser.id).then((data) => {
          const userObj = data[0];
          
          setWriterProfile(userObj);
          
        });
      }, [currentUser.id]);

    const handleProfileChange = (event) =>{
        const { name, value  } = event.target
        setWriterProfile((oldProfile) => (
            { ...oldProfile, [name]: value }
        ))
        
    }

    const handleSaveProfile = (event) =>{
        event.preventDefault()
        SubmitWriterProfile(writerProfile, currentUser.id).then((updatedWriterProfile) =>{
            console.log(updatedWriterProfile)
        })
    }

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
                    value={writerProfile?.user?.fullName || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    <input 
                    type="text"
                    name="email"
                    value={writerProfile?.user?.email || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    <input 
                    type="text"
                    name="userImg"
                    value={writerProfile?.user?.userImg || ''}
                    onChange={handleProfileChange}
                    />
                </label>

            </div>

            <div>
                <label>
                    <input 
                    type="text"
                    name="writerProfession"
                    value={writerProfile?.writerProfession || ''}
                    onChange={handleProfileChange}
                    />
                </label>

                <label>
                    <input 
                    type="text"
                    name="writerCompany"
                    value={writerProfile?.writerCompany || ''}
                    onChange={handleProfileChange}
                    />
                </label>
            </div>

            <div className="editProfile-container-AboutMe">
                <div>
                    <textarea 
                    name="aboutMe"
                    value={writerProfile?.aboutMe || ''}
                    onChange={handleProfileChange}
                    />
                </div>

                <div>
                    <textarea 
                    name="writerSkills"
                    value={writerProfile?.writerSkills || ''}
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