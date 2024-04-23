// get nonWriter Users 
export const getNonWriterUsers = () => {
    return fetch("http://localhost:8088/users?isWriter=false").then((res) => res.json())}

// get Staff Users

export const getWriterUsers = () =>{
    return fetch("http://localhost:8088/users?isWriter=true").then((res)=> res.json())}

    export const getUserByEmail = (email) => {
        return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
          res.json())}