import './css/style.css';
// import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages";
import Results from "./pages/results";
import Products from "./pages/products";
import Description from "./pages/description";
import Concerns from "./pages/skinconcerns";
import Types from "./pages/skintypes";
import About from "./pages/about";
import Footer from "./components/footer";


function App() {
  return (
    <Router basename="/NIKS-">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/results' element={<><Header /><Results /></>} />
        <Route path='/products/' element={<><Header /><Products /></>}>
          <Route path=':option' element={<><Header /><Products /></>} />
          <Route path='results/:option' element={<><Header /><Products /></>} />
        </Route>
        <Route path='/skin-concerns' element={<><Header /><Concerns /></>} />
        <Route path='/skin-types' element={<><Header /><Types /></>} />
        <Route path='/about-us' element={<><Header /><About /></>} />
        <Route path='/product/:productId' element={<><Header/><Description/></>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;