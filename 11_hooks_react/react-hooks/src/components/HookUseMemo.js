import React, { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  const premiunNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("premiun numbers alterados...");
  }, [premiunNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <ul>
        <li>
          O useMemo pode ser utilizado para garantir a referência de um objeto
        </li>
        <li>
          Fazendo com que algo possa ser atrelado a uma referência e não a um
          valor
        </li>
        <li>
          Com isso conseguimos condicionar useEffects a uma variável de maneira
          mais inteligente
        </li>
      </ul>

      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiunNumbers.includes(number) ? (
        <p>acertou o número</p>
      ) : (
        <p>você não acertou</p>
      )}

      <hr />
    </div>
  );
};

export default HookUseMemo;
