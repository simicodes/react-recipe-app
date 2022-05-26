import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";


function App() {
  return (
    <Router>
      <NavBar />
      <div className="container main">
        {/* I cut the four components<HeroSection, ImproveSkills, QuoteSection & ChefsSection. To make a Router: */}
        {/* Cut to Home.js on pages folder  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
