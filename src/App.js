import React from "react";
import Login from "./Components/Login"
import Home from "./Components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;


