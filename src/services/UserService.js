// get nonWriter Users 
export const getNonWriterUsers = () => {
    return fetch("http://localhost:8088/users?isWriter=false").then((res) => res.json())}

// get Staff Users

export const getWriterUsers = () =>{
    return fetch("http://localhost:8088/users?isWriter=true").then((res)=> res.json())}