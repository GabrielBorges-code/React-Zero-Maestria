import React, { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum Nome");

  useEffect(() => {
    console.log("2")
    setName("Mudou o nome")
  }, [])

  useLayoutEffect(() => { //se eu mudar para useEffect esse vai ser executado por último
    console.log("1");
    setName("outro nome")
  }, [])
  
  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <ul>
        <li>Muito parecido com o useEffect</li>
        <li>
          A grande diferença é que este hook roda antes de renderizar o
          componente
        </li>
        <li>
          Ou seja, o hook é síncrono, bloqueando o carregamento da página para o
          sucesso da sua funcionalidade
        </li>
        <li>A ideia é executar algo antes que o usuário veja a página</li>
        <li>as ordens do useEffect importam</li>
      </ul>

      <p>{name}</p>

      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
