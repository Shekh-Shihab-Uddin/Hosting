import React from "react";
import { Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Foter";


const App = () => {
return (
  <>
  <Navbar/>
    <div>
      <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/service" Component={Service}/>
          <Route path="/contact" Component={Contact}/>
          <Route path= "/*" Component={Error}/>
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App;