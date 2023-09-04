import React from "react";
import "boxicons"


import { Route, Routes } from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Header/>
      <box-icon name="right-arrow"></box-icon>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/contact-me" element={<Contact/>}/>

      </Routes>
  
    </div>
  );
}

export default App;