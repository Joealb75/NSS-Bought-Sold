import { useEffect, useState } from "react";
import { getWriterUsers } from "../../services/userService.js";
import { Link } from "react-router-dom";
import { WriterProfileHeader } from "./WP_ProfileHeader.jsx";

export const WritersList = () => {
    const [writers, setWriters] = useState([{}])
  
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
                    <WriterProfileHeader writer={writersObj} />
                </Link>
            )
        })}
     </div>
    )
  }