import "./App.css";

import CarCard from "./components/CarCard";

const cars = [
  {
    id: 1,
    brand: "Honda",
    model: "NSX",
    yearOfManufacture: 1990,
    color: "Vermelho",
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Murcielago",
    yearOfManufacture: 2001,
    color: "Amarelo",
  },
  {
    id: 3,
    brand: "Porsche",
    model: "911",
    yearOfManufacture: 1963,
    color: "Prateado",
  },
  {
    id: 4,
    brand: "Nissan",
    model: "GTR",
    yearOfManufacture: 2007,
    color: "Preto",
  },
];

function App() {
  return (
    <>
      <div className="div-title">
        <h1>Meus Carros Favoritos</h1>
      </div>

      {cars?.map((car) => (
        <CarCard
          key={car.id}
          brand={car.brand}
          model={car.model}
          yearOfManufacture={car.yearOfManufacture}
          color={car.color}
        />
      ))}
    </>
  );
}

export default App;
