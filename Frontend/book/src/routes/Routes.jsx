import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import FullLayout from "../Layouts/Fulllayout";
import Home from '../Home/Home'
import Register from '../components/Register'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<FullLayout />} >
         <Route index element={<Home />} /> 
        </Route>
        <Route path="/register" element={<Register/>} /> 
    
    </>
  )
);

export default routes;