import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [numb, setNumb] = useState(1);
  const [anotherNumb, setAnotherNumb] = useState(0);

  useEffect(() => {
    console.log("SEM array de dependência\nexecutou algo...");
  });

  useEffect(() => {
    console.log("COM array de dependência\nexecutou apenas uma vez...");
  }, []);

  useEffect(() => {
    console.log(
      "anotherNumb como array de dependência\nanotherNumber foi executado..."
    );
  }, [anotherNumb]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setTimeout ... memory leak");
      // setAnotherNumb(anotherNumb + 1) // entra em loop
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumb]);

  const handleClick = () => {
    setNumb(numb + 1);
  };

  return (
    <div>
      <h2>useEffect</h2>
      <ul>
        <p>useEffect</p>
        <li>
          O useEffect é utilizado para várias ações no nosso App, junto com
          useState é um dos hooks mais utilizados;
        </li>
        <li>Podemos realizar desde alterações na DOM a requisições HTTP;</li>
        <li>
          E o grande motivo é: conseguimos controlar quantas vezes algo
          acontece;
        </li>
        <li>
          A sintaxe é formada por uma função a ser executada e um array de
          dependências
        </li>
      </ul>

      <p>numbero: {numb}</p>

      <button onClick={handleClick}>soma</button>

      <hr />

      <ul>
        <p>useEffect com array vazio</p>
        <li>
          Uma estratégia interessante para algumas situações é utilizar o
          useEffect apenas uma vez;
        </li>
        <li>
          Para isso apenas precisamos deixar o array de dependências vazio;
        </li>
        <li>Ao renderizar o componente a lógica será executada;</li>
      </ul>

      <hr />

      <ul>
        <p>Array de dependências do useEffect</p>
        <li>
          Outra maneira de controlar quando o useEffect será executado é
          colocando algum item no array de dependências;
        </li>
        <li>
          Assim sempre que o item for alterado, teremos o useEffect sendo
          executado novamente;
        </li>
        <li>
          Nos fornecendo um maior controle de quando a função deve ou não ser
          executada;
        </li>
      </ul>
      <p>Another number: {anotherNumb}</p>
      <button onClick={() => setAnotherNumb(anotherNumb + 1)}>click me</button>

      <hr />

      <ul>
        <p>Limpeza do useEffect</p>
        <li>
          Alguns efeitos precisam ter uma técnica de cleanup (limpeza) para
          garantir o seu funcionamento
        </li>
        <li>Não fazer isso pode gerar erros ou comportamentos indesejados;</li>
        <li>
          Exemplo: um timeout que ao mudar de página pode continuar a ser
          executado, pela falta desta limpeza;
        </li>
      </ul>
    </div>
  );
};

export default HookUseEffect;
