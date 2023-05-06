import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>customHook</h2>
      <ul>
        <li>Os custom hooks são os hooks que nós criamos;</li>
        <li>
          Muitas vezes para abstrair funções complexas do componente ou
          simplesmente reaproveitar código
        </li>
        <li>Esta técnica é muito utilizada em projetos profissionais;</li>
      </ul>

      <p>Ataul: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber((Math.random() * 10).toFixed())}>
        Alterar
      </button>

      <hr />

      <h2>useDebug</h2>
      <ul>
        <li>React Dev Tools é uma extensão para o navegador;</li>
        <li>
          Nela conseguimos entender o que o React está gerando por meio do nosso
          código
        </li>
        <li>Conseguimos também verificar os states e outros parâmetros;</li>
      </ul>
    </div>
  );
};

export default HookCustom;
