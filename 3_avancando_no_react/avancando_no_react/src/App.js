import { useState } from "react";

import ListRender from "./Components/ListRender";
import ManageData from "./Components/ManageData";
import ShowUserName from "./Components/ShowUserName";
import ConditionalRender from "./Components/ConditionalRender";

import image from "./assets/developer.jpg";
import CarDetails from "./Components/CarDetails";
import Fragment from "./Components/Fragment";
import ContainerChildren from "./Components/ContainerChildren";
import ExecuteFunction from "./Components/ExecuteFunction";
import Messge from "./Components/Messge";
import ChangeMessageState from "./Components/ChangeMessageState";

function App() {
  const [name] = useState("Gabriel B");
  const [age] = useState(24);
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const cars = [
    { id: 1, brand: "BMW", color: "Cinza", newCar: true, km: 0 },
    { id: 2, brand: "Mercedes", color: "Preto", newCar: false, km: 12556 },
    { id: 3, brand: "Ford", color: "Azul", newCar: true, km: 0 },
    { id: 4, brand: "Chevrolet", color: "Roxo", newCar: false, km: 120 },
    { id: 5, brand: "Fiat", color: "Branco", newCar: false, km: 1244 },
    { id: 6, brand: "Tesla", color: "Amarelo", newCar: true, km: 0 },
    { id: 7, brand: "VW", color: "Vermelho", newCar: true, km: 0 },
    { id: 8, brand: "Volvo", color: "Verde", newCar: false, km: 12345 },
  ];

  function showMensage() {
    console.log("evento de componente");
  }

  return (
    <div className="App">
      <h1>Avançando com React :)</h1>

      <div>
        {/* imagens públicas não precisam passar todo o path */}
        <img src="/programing.jpg" alt="Uma pessoa programando" />
      </div>

      <div>
        <img src={image} alt="Pessoa olhando para o monitor" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} age={age} />

      {/* components "estáticos" */}
      {/* <CarDetails newCar={false} brand="Audi" km={15623} color="Black"/>
      <CarDetails newCar={true} brand="Chevrolet" km={12346} color="Verde"/> */}

      {/* components "dinâmicos" */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          newCar={car.newCar}
          color={car.color}
          brand={car.brand}
          km={car.km}
        />
      ))}

      <Fragment />

      <ContainerChildren myValue="teste">
        <p>Este é o conteúdo</p>
      </ContainerChildren>

      <ExecuteFunction myFunction={showMensage} />

      <Messge msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
