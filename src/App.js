import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./Test";
import NavBarOG from "./components/NavBar/NavBar";
import ProjectsPage from "./Pages/ProjectsPage";

import Home from "./Pages/Home";
import React, { Component } from "react";
import Intro from "./components/Intro/Intro";
import BlogsPage from "./Pages/BlogsPage";
import Blog3 from "./Pages/Blog3";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/intro" Component={Intro} />
          <Route exact path="/nav" Component={NavBarOG} />
          <Route exact path="/project" Component={ProjectsPage} />
          <Route exact path="/blogs" Component={BlogsPage} />
          <Route exact path="/blog3" Component={Blog3} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
