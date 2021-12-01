import React from "react";
import "./App.css";
import Navbar from "./Components/Inc/Navbar";
import Home from './Components/Pages/Home';
import Aboutus from "./Components/Pages/About";
import Contactus from "./Components/Pages/Contact";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Footer from "./Components/Inc/Footer";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />}>Home</Route>
        <Route path="/About" element={<Aboutus />}>Aboutus</Route>
        <Route path="/Contact" element={<Contactus />}>Contactus</Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )

}

export default App;
