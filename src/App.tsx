import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/Login/LoginPage";
import RegisterPage from "./containers/Register/RegisterPage";
import SideBar from "./components/SideBar/SideBar";
// import InputFields from "./containers";

function App() {
  return (
    <>
 <SideBar/>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
