// FILE PATH: ./NSS-Bought-Sold/src/components/ApplicationViews.jsx
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from './Nav/navBar.jsx';
import { useEffect, useState } from "react";
import { Welcome } from "./welcome/welcome.jsx";
import { WriterProfile } from "./WriterProfile/WP_Profile.jsx";
import { CreateNewArticle } from "./Create/NewArticle.jsx";
import { WriterProfileMyArticles } from "./WriterProfile/WP_MyArticles.jsx";


export const ApplicationViews = () => {

  
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
        <Route path="/" element={
          <>
            <NavBar currentUser={currentUser} />
            <Outlet />
          </>
        }>
          <Route index element={<Welcome />} />
          <Route path="profile" element={<WriterProfile currentUser={currentUser}/>} />
          <Route path={`/profile/${currentUser.id}/new-article`} element={<CreateNewArticle currentUser={currentUser} />} />
          <Route path={`/my-articles/${currentUser.id}`} element={<WriterProfileMyArticles currentUser={currentUser}/>} />

          

        </Route>
      </Routes>
      {console.log(currentUser)}
    </>
  );
};

// :userId - pull a PARAMETER 
// {currentUser} - pass a PROP