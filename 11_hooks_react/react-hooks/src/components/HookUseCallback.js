import React, { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
  const [count, setCount] = useState(0);

  const getitemsFromDatabase = useCallback(() => {
    return ["a", "b", "c", "d"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <ul>
        <li>O hook de useCallback pode ser utilizado para duas situações</li>
        <li>
          Ele basicamente memoriza uma função, fazendo ela NÃO ser reconstruída
          a cada renderização de um componente;
        </li>
        <li>
          O primeiro caso é quando estamos prezando pela performance, então
          queremos que uma função muito complexa não seja reconstruída toda vez;
        </li>
        <li>
          Já o segundo é quando o próprio React nos indica que uma função
          deveria estar contida em um useCallback, para evitar problemas de
          performance;
        </li>
      </ul>

      <List getItems={getitemsFromDatabase} />
      <button onClick={() => setCount(count + 1)}>Alterar</button>
      <p>{count}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
