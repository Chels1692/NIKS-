import './css/style.css';
import {BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages";
import Results from "./pages/results";
import Products from "./pages/products";
import Concerns from "./pages/skinconcerns";
import Types from "./pages/skintypes";
import About from "./pages/about";
import Footer from "./components/footer";


function App() {
  return (
    <Router basename="/NIKS-">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<><Header /><Results /></>} />
        <Route path='/products' element={<><Header /><Products /></>} />
        <Route path='/skin-concerns' element={<><Header /><Concerns /></>} />
        <Route path='/skin-types' element={<><Header /><Types /></>} />
        <Route path='/about-us' element={<><Header /><About /></>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;