// FILE PATH: ./NSS-Bought-Sold/src/App.jsx
import "./App.css";
import { QueryClientProvider, QueryClient, useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./components/ApplicationViews.jsx";
import { Authorized } from "./components/Login_User/auth/Authorized.jsx";
import { Login } from "./components/Login_User/auth/Login.jsx";
import { Register } from "./components/Login_User/auth/Register.jsx";
import { BlogHome } from "./components/Blog/blogHome.jsx";
import { ViewArticle } from "./components/Blog/viewArticle.jsx";
import { BShomePage } from "./components/HomePage/home.jsx";

const queryClient = new QueryClient();

const fetchCurrentUser = async () => {
  console.log('Attempting to fetch user from local storage...');
  const getUserFromStorage = localStorage.getItem("B&S_User");

  if (!getUserFromStorage) {
    console.error('No user found in local storage');
    return null;  // Return null if no user is found
  }

  try {
    const parsedUser = JSON.parse(getUserFromStorage);
    if (parsedUser && parsedUser.id) {
      console.log('User found:', parsedUser);
      return { id: parsedUser.id };
    } else {
      console.error('Parsed user is invalid:', parsedUser);
      throw new Error("Invalid user data in local storage");
    }
  } catch (e) {
    console.error('Error parsing user data:', e);
    throw new Error("Error parsing user data");
  }
};

const GetCurrentUser = () => {
  const { data: currentUser, error, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
  });

  console.log('Fetching user...');
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log('Current User:', currentUser);
  return (
    <Routes>
      <Route path="/" element={<BShomePage currentUser={currentUser} />} />
      <Route path="/blog-home" element={<BlogHome currentUser={currentUser} />} />
      <Route path="/blog-home/:articleId/view-article/:title" element={<ViewArticle currentUser={currentUser} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          currentUser ? (
            <Authorized>
              <ApplicationViews currentUser={currentUser} />
            </Authorized>
          ) : (
            <Login />  // Redirect to login if no current user
          )
        }
      />
    </Routes>
  );
};

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GetCurrentUser />
    </QueryClientProvider>
  );
};

//! Normal B&S App.jsx \/ - /\ is TSQ Attempt on "currentUser"
/* 
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./components/ApplicationViews.jsx";
import { Authorized } from "./components/Login_User/auth/Authorized.jsx";
import { Login } from "./components/Login_User/auth/Login.jsx";
import { Register } from "./components/Login_User/auth/Register.jsx";
import { BlogHome } from "./components/Blog/blogHome.jsx";
import { ViewArticle } from "./components/Blog/viewArticle.jsx";
import { BShomePage } from "./components/HomePage/home.jsx";

export const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("B&S_User"));
    if (userFromStorage && userFromStorage.id) {
      setCurrentUser({ id: userFromStorage.id }); // Ensure currentUser is always an object with an id property
    }
  }, []);

  return (
    <>
      <QueryClientProvider client = {queryClient}>
        <Routes>
          <Route path="/" element={<BShomePage currentUser={currentUser} />} />
          <Route
            path={`/blog-home`}
            element={<BlogHome currentUser={currentUser} />}
          />
          <Route
            path={`/blog-home/:articleId/view-article/:title`}
            element={<ViewArticle currentUser={currentUser} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="*"
            element={
               check if the user is authorized first
              <Authorized>
                {  if they are authorized the application views is the child component of Authorized and will render in only if "Honey_User"
           is present in local storage  }
                <ApplicationViews currentUser={currentUser} />
              </Authorized>
            }
          />
        </Routes>
      </QueryClientProvider>
    </>
  );
};
*/
