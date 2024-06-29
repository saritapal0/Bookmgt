import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FullLayout from "../layouts/Fulllayouts";
// import Dashboard from "../components/Dashboard/UserTable";
//import Register from '../components/Register';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FullLayout />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
