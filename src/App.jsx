// FILE PATH: ./NSS-Bought-Sold/src/App.jsx
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./components/ApplicationViews.jsx";
import { Authorized } from "./components/Login_User/auth/Authorized.jsx";
import { Login } from "./components/Login_User/auth/Login.jsx";
import { Register } from "./components/Login_User/auth/Register.jsx";
import { BlogHome } from "./components/Blog/blogHome.jsx";
import { ViewArticle } from "./components/Blog/viewArticle.jsx";


export const App = () => {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("B&S_User"));
    if (userFromStorage && userFromStorage.id) {
      setCurrentUser({ id: userFromStorage.id }); // Ensure currentUser is always an object with an id property
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={`/blog-home`} element={<BlogHome  />} />
        <Route path={`/blog-home/:articleId/view-article/:title`} element={<ViewArticle currentUser={currentUser}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        

        <Route
          path="*"
          element={
            // check if the user is authorized first
            <Authorized>
              {/*  if they are authorized the application views is the child component of Authorized and will render in only if "Honey_User"
           is present in local storage  */}
              <ApplicationViews currentUser={currentUser}/>
            </Authorized>
          }
        />
      </Routes>
    </>
  );
};
