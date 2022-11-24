import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Maria Joaquina");

  const handleChangeName = () => {
    setName("João");
  }

  return (
    <>
      <h1>Condional Render</h1>

      {x && (
        <p>
          Se X for <b>true</b> eu vou ser imprimido
        </p>
      )}
      {!x && (
        <p>
          Se X for <b>false</b> eu vou ser imprimido
        </p>
      )}

        <h1>If ternario</h1>
      {name === "João" ? (
        <p>O nome é {name}</p>
      ) : (
        <>
            <p>O nome não é João, é {name}</p>
            <button onClick={handleChangeName}>Alterar o nome para João</button>
        </>
      )}

    </>
  );
};

export default ConditionalRender;
