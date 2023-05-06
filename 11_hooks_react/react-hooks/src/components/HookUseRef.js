import React, { useState, useEffect, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current += 1;
    // console.log("renderizando");
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");

    inputRef.current.focus();

    // console.log(inputRef);
  };

  return (
    <div>
      <hr />
      <h2>useRef</h2>
      <ul>
        <li>
          O useRef pode ser utilizado como useState para gerenciar valores;
        </li>
        <li>
          A diferença é que ele é um objeto, seu valor está na propriedade
          current;
        </li>
        <li>
          Outra particularidade do useRef é que ele não re-renderiza o
          componente ao ser alterado, sendo interessante alguns casos;
        </li>
        <li>passei um useEffect sem array de dependência</li>
      </ul>
      <p>O componente renderizou {numberRef.current} vezes</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador 1</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador 2</button>

      <hr />

      <ul>
        <li>O useRef pode ser utilizado para selecionar elementos do JSX;</li>
        <li>
          Com isso podemos fazer manipulação de DOM ou aplicar funções como a
          focus, que foca no input
        </li>
        <li>Este é um outro uso muito interessante para este hook;</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          ref={inputRef}
        />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
