import React, { useReducer } from "react";

const HookUseReducer = () => {
  // dispatch dispara uma função, não apenas atribuí o valor
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return (
    <div>
      <h2>useReducer</h2>
      <ul>
        <li>
          O useReducer tem a mesma função que o useState, ele gerencia valores;
        </li>
        <li>
          Porém temos a possibilidade de executar uma função na hora da
          alteração do valor;
        </li>
        <li>
          Então temos que o useReducer recebe um valor para gerenciar e uma
          função para alterar este valor;
        </li>
      </ul>

      <p>Numero: {number}</p>
      <button onClick={dispatch}>Alterar numero</button>

      <hr />
    </div>
  );
};

export default HookUseReducer;
