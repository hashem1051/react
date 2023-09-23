
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Device from "./Device";
import Age from "./Age";
import Download from "./Download";
import Apped from "./Apped";
import Footer from "./Footer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Device/>
      <Age/>
      <Download/>
      <Apped/>
      <Footer/>
     
    </div>
  )
}

export default App;
