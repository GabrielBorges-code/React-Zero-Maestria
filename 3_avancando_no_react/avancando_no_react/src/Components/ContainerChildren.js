import React from "react";

const ContainerChildren = ({ children, myValue }) => {
  return (
    <>
      <h2>Esse é o título do container</h2>
      {children}
      <p>Valor é: {myValue}</p>
    </>
  );
};

export default ContainerChildren;
