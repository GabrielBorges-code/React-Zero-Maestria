import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
