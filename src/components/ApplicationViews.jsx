// FILE PATH: ./NSS-Bought-Sold/src/components/ApplicationViews.jsx
import { Route, Routes, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { WriterProfile } from "./WriterProfile/WP_Profile.jsx";
import { CreateNewArticle } from "./Create/NewArticle.jsx";
import { WriterProfileMyArticles } from "./WriterProfile/WP_MyArticles.jsx";
import { WriterProfileAbout } from "./WriterProfile/WP_About.jsx";
import { EditArticle } from "./Edit/EditArticle.jsx";
import { ViewWriterArticle } from "./View/viewWriterArticle.jsx";
import {EditProfile} from "./Edit/EditProfile.jsx";
import { WritersProfileCard } from "./WriterProfile/WP_ProfileHeader.jsx";
import { BurgerMenu } from "./Nav/burger.jsx";
import { BShomePage } from "./HomePage/home.jsx";
import { BlogHome } from "./Blog/blogHome.jsx";
import { ViewArticle } from "./Blog/viewArticle.jsx";





export const ApplicationViews = ({currentUser}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <BurgerMenu currentUser={currentUser} />
            <Outlet />
          </>
        }>
          <Route index element={<BShomePage currentUser={currentUser}/>} />
          <Route path={`/profile/${currentUser.id}`} element={<WriterProfile currentUser={currentUser}/>} />
          <Route path={`/profile/${currentUser.id}/new-article`} element={<CreateNewArticle currentUser={currentUser} />} />
          <Route path={`/my-articles/${currentUser.id}`} element={<WriterProfileMyArticles currentUser={currentUser}/>} />
          <Route path={`/about/${currentUser.id}`} element={<WriterProfileAbout currentUser={currentUser}/>} />
          <Route path={`/my-articles/${currentUser.id}/edit-article/:articleId`} element={<EditArticle currentUser={currentUser}/>} />
          <Route path={`/my-articles/${currentUser.id}/view-article/:articleId`} element={<ViewWriterArticle currentUser={currentUser}/>} />
          <Route path={`/about/edit-profile/${currentUser.id}`} element={<EditProfile currentUser={currentUser}/>} />
          <Route path="/random" element={<WritersProfileCard currentUser={currentUser}/>} />
          <Route path={`/blog-home`} element={<BlogHome currentUser={currentUser} />} />
          <Route path={`/blog-home/:articleId/view-article/:title`} element={<ViewArticle currentUser={currentUser}/>} />
          <Route path={`/blog-home/articleCategories/:id`} element={<BlogHome />} />
          
          

        </Route>
      </Routes>
    </>
  );
};

// :userId - pull a PARAMETER 
// {currentUser} - pass a PROP