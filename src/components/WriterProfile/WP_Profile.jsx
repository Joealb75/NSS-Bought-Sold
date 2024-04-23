// 1. Get & Display Writer profile picture, name, position and company 

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getWriterInfoByUserId } from "../../services/WriterService.js"

export const WriterProfile = () =>{
    
    const [user, setUsers] = useState([])
    const { userId } = useParams()

    useEffect(() =>{
        getWriterInfoByUserId(userId).then((data)=>{
            const writerObj = data[0]
        console.log(writerObj)
        setUsers(writerObj)
        })

    }, [userId])

    return(
        <section>
            <div className="profile-img">
                <img src={user.userImg}/>
            </div>
            <div className="profile-name">
                <h2>{user.fullName}</h2>
            </div>
            <div className="profile-position">
                <h4>{user.writers?.writerProfession}</h4>
            </div>
        </section>

    )
}