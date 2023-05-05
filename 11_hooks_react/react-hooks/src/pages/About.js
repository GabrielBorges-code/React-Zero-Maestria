import React, { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValeu } = useContext(SomeContext);

  return (
    <div>
      <h2>useContext</h2>

      <ul>
        <li>
          O useContext é o hook utilizado para consumir um contexto, da Context
          API;
        </li>
        <li>Vamos precisar criar o contexto e também o Provider;</li>

        <li>
          Envolver os componentes que receberão os valores compartilhados;
        </li>
        <li>E então fazer o uso do hook onde necessário;</li>
      </ul>
      <p>Context value: {contextValeu}</p>
    </div>
  );
};

export default About;
