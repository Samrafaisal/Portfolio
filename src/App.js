import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home.js";
import { Navbar } from "./components/Navbar.js";
import { Contact } from "./components/Contact.js";
import SkEd from "./components/SkEd.js";
import RCV from "./components/RCV.js";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/SkEd" element={<SkEd/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/RCV" element={<RCV/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
