// FILE PATH: ./NSS-Bought-Sold/src/App.jsx
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./components/ApplicationViews.jsx";
import { Authorized } from "./components/Login_User/auth/Authorized.jsx";
import { Login } from "./components/Login_User/auth/Login.jsx";
import { Register } from "./components/Login_User/auth/Register.jsx";
import { BlogHome } from "./components/Blog/blogHome.jsx";
import { ViewArticle } from "./components/Blog/viewArticle.jsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path={`/blog-home`} element={<BlogHome  />} />
          <Route path={`/blog-home/:articleId/view-article/:title`} element={<ViewArticle />} />
          <Route path={`/blog-home/articleCategories/:id`} element={<BlogHome />} />

        <Route
          path="*"
          element={
            // check if the user is authorized first
            <Authorized>
              {/*  if they are authorized the application views is the child component of Authorized and will render in only if "Honey_User"
           is present in local storage  */}
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </>
  );
};
