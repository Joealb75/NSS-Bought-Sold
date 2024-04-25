import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from './Nav/navBar.jsx';
import { WriterProfileHeader } from './WriterProfile/WP_ProfileHeader.jsx';
import { useEffect, useState } from "react";
import { Welcome } from "./welcome/welcome.jsx";
import { WritersList } from "./WriterProfile/writersList.jsx";

export const ApplicationViews = () => {

  const [currentUser, setCurrentUser] = useState({})

  

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("B&S_User"))?.id;
    setCurrentUser(userId);
  }, []);

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
            <Route index element={<Welcome />} />
            <Route path="writers" element={<WritersList />}/>
            <Route path="writers/:userId" element={<WriterProfileHeader />} />
            
        </Route>
      </Routes>
    </>
  );
};
//path=":userId" 

// I need to get the userId from the database 

