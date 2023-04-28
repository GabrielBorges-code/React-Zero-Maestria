import React, { useState } from "react";

const HookUseState = () => {
  const [name, setName] = useState("Gabriel");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  let userName = "João";

  const handleChangeName = () => {
    setName("Gabriel Borges");
    userName = "João Souza";

    // console.log(userName);
  };

  // console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Olá, você submeteu o form");
  };

  return (
    <div>
      <h2>useState</h2>
      <ul>
        <li>O hook de useState é um dos mais utilizados;</li>
        <li>
          Utilizamos para gerenciar o estado de algum dado, variáveis não
          funcionam corretamente, o componente não re-renderiza;
        </li>
        <li>
          Para guardar o dado definimos o nome da variável e para alterar vamos
          utilizar setNome, onde nome é o nome do nosso dado;
        </li>
      </ul>
      <br />
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>

      <button onClick={handleChangeName}>mudar nome</button>
      <br />
      <br />

      {/* useState in form */}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={age}
          placeholder="digite sua idade"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          value={email}
          placeholder="digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button>Enviar</button>
      </form>

      <p>Seu email: {email}</p>
      <p>Sua idade: {age}</p>

      <hr />
    </div>
  );
};

export default HookUseState;
