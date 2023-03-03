import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemesContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <>
      <h1>Página Inicial</h1>
      <p>O tema é {theme}</p>
      <button onClick={toggleTheme}>Alterar Tema</button>
    </>
  );
};

export default Home;
