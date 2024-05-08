// FILE PATH: ./NSS-Bought-Sold/src/services/userService.js

export const getNonWriterUsers = () => {
    return fetch("http://localhost:8088/users?isWriter=false").then((res) => res.json())}

export const getWriterUsers = () =>{
    return fetch("http://localhost:8088/users?isWriter=true").then((res)=> res.json())}

export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>res.json())}

export const getUserById = (userId) =>{
    return fetch(`http://localhost:8088/users/${userId}`).then((res) => res.json())}

export const SubmitUserInfo = (editProfile, userId) =>{
    return fetch(`http://localhost:8088/users/${userId}`,{
        method: "PUT", 
        headers:{ "Content-type": "application/json" },
        body: JSON.stringify(editProfile),
    })
}

export const createUser = () => {
    return fetch(`http://localhost:8088/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) => res.json())
  }