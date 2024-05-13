// FILE PATH: ./NSS-Bought-Sold/src/components/WriterProfile/writersList.jsx
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { WritersProfileCard } from "../components/WriterProfile/WP_ProfileHeader.jsx";
import { getWriterUsers } from "../services/UserService.js";

export const WritersList = ({currentUser}) => {
    const [writers, setWriters] = useState([])
  
    useEffect(()=>{
      getWriterUsers().then((writerArray)=>{
        setWriters(writerArray)
      })
    },[])
  
    return(
     <div className="writers">
        {writers.map((writersObj) => {
            return(
      
                <Link key={writersObj.id} to={`/writers/${writersObj.id}`}>
                    <WritersProfileCard users={writersObj} />
                </Link>

            )
        })}
     </div>
    )
  }