// 1. Get & Display Writer profile picture, name, position and company 

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getWriterByUserId } from "../../services/WriterService.js"

export const WriterProfile = () =>{
    
    const [writer, setWriters] = useState([])
    const { userId } = useParams()

    useEffect(() =>{
        getWriterByUserId(userId).then((data)=>{
            const writerObj = data[0]
        console.log(writerObj)
        setWriters(writerObj)
        })

    }, [userId])
}