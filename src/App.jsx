import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import "./index.css";


import { Suspense, lazy } from "react";
import AppLayout from "./componots/AppLayout";

import Loader from "./Pages/Loader";

const Home = lazy(() => import("./Pages/Home.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));
const About = lazy(() => import("./Pages/About"));
const FreeWorkoutPage = lazy(() => import("./Pages/FreeWorkoutPage.jsx"));
const Shop = lazy(() => import("./Pages/Shop"));
const Blog = lazy(() => import("./Pages/Blog"));


function App() {
 
 
  


  return (
    <BrowserRouter>
      
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
        />
        <Suspense
          fallback={
            <div className=" justify-center flex items-center w-full h-screen">
            
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route index path="home" element={<Home />} />
              <Route path="About" element={<About />} />

              <Route path="contact" element={<Contact />} />
              <Route path="FreeWorkout" element={<FreeWorkoutPage />} />
              <Route path="shop" element={<Shop />} />
              <Route path="Blog" element={<Blog />} />
            </Route>
          </Routes>
        </Suspense>
      
    </BrowserRouter>
  );
}

export default App;
