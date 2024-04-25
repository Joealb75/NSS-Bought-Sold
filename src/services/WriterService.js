// get all writers 

export const getAllWriters = () => {
    return fetch("http://localhost:8088/writers").then((res) => res.json())
}

export const getWriterInfoByUserId = (userId) => {
    return fetch(`http://localhost:8088/writers?userId=${userId}&_expand=user`).then((res) => res.json())
}
//${userId}