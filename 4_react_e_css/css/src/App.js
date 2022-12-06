import { useState } from "react";

import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const [n, setN] = useState(1);

  const [redTitle, setRedTitle] = useState(true);

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este paragráfo é do app js</p>
      <p
        style={{
          backgroundColor: "magenta",
          fontSize: "19px",
          padding: "20px",
        }}
      >
        Este paragrafo foi estilizado em inline
      </p>

      <h2
        style={
          n < 5
            ? { color: "purple" }
            : { color: "yellow", textTransform: "uppercase" }
        }
      >
        css dinâmico
      </h2>
      <button onClick={() => setN(n - 1)}>Click até ficar roxo</button>

      <button onClick={() => setN(n + 1)}>Click até ficar amarelo</button>

      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter uma classe dinâmica
      </h2>

      <button onClick={() => setRedTitle(redTitle ? false : true)}>
        Click para trocar a classe
      </button>

      <Title>Títulos title.module.css</Title>

      <h1 className="my_title"> Esse é um título que tenta copiar o de cima</h1>
    </div>
  );
}

export default App;
