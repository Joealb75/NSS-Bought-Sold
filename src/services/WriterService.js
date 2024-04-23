// get all writers 

export const getAllWriters = () => {
    return fetch("http://localhost:8088/writers").then((res) => res.json())
}

export const getWriterByUserId = () => {
    return fetch("http://localhost:8088/users?userId=1&_embed=writers").then((res) => res.json())
}