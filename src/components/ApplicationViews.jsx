import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from './Nav/navBar.jsx';
import { WriterProfile } from './WriterProfile/WP_Profile.jsx';
import { useEffect, useState } from "react";

export const ApplicationViews = () => {

  const [currentUser, setCurrrentUser] = useState({})

  useEffect(()=> {
    const localHoneyUser = localStorage.getItem("B&S_User")
    const honeyUserObject = JSON.parse(localHoneyUser)
    setCurrrentUser(honeyUserObject)
  },[])
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />{" "}
              {/* Whenever we match any of the paths that are children of "/" outlet will render that element  
                       if <Outlet /> was above <NavBar /> then the NavBar would render at the bottom of all pages      */}
            </>
          }
        >
          <Route path="/profile">
            <Route index path=":userId" element={<WriterProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
