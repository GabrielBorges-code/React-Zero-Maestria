import React, { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const inputRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <ul>
        <li>
          Com o hook useImperativeHandle temos como acionar ações em um outro
          componente de forma imperativa;
        </li>
        <li>
          Como não podemos passar refs como props, precisamos usar uma função
          fowardRef;
        </li>
        <li>
          Isso nos permite passar as referências, e torna o nosso exemplo
          viável;
        </li>
      </ul>

      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validar</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
