import './App.css'
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from './components/Nav/navBar.jsx';
import { WriterProfile } from './components/WriterProfile/WP_Profile.jsx';

export const App = () => {
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
          <Route path="profile">
            <Route index path=":userId" element={<WriterProfile />}/>
          </Route>


      </Route>
        
      </Routes>
    </>
  );
};