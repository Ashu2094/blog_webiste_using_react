import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user,setUser]=useState(true);
  useEffect(()=>{

  })
  return (
    
    <Router>
        
                  <TopBar user={user} setUser={setUser} />

        <Routes>
        <Route path="/" exact element={<Home></Home>}></Route> 
          <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
          <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
          <Route path="/write" element={user ? <Write/> : <Login />} ></Route>
          <Route path="/settings" element={user ? <Settings /> : <Register/>} ></Route>
          <Route path="/post" element={<Single />} ></Route> 
        </Routes>
          
      </Router>
  );
}

export default App;
