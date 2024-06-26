// FILE PATH ./NSS-Bought-Sold/src/services/WriterService.js

export const getAllWriters = () => {
    return fetch("http://localhost:8088/writers").then((res) => res.json())
}

export const getWriterInfoByUserId = (userId) => {
    return fetch(`http://localhost:8088/writers?userId=${userId}&_expand=user`).then((res) => res.json())
}

export const SubmitWriterInfo = (editProfile, writerId) =>{
    return fetch(`http://localhost:8088/writers/${writerId}`,{
        method: "PUT", 
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(editProfile),
    }
)}

