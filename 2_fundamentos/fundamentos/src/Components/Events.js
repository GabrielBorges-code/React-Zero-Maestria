const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    alert("Clicou no botão");
  };

  const renderSomething = (x) => {
    if (!x) return <h1>Renderizou outra coisa</h1>;

    return <h1>Renderiza isso</h1>;
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>clica aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou no segundo link")}>
          Clica aqui também
        </button>
      </div>

      {renderSomething(false)}
      
    </div>
  );
};

export default Events;
