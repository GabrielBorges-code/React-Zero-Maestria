import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemesContext";

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
