import React from "react";

import styles from "./Carcard.module.css";

const CarCard = ({ brand, model, yearOfManufacture, color }) => {
  return (
    <div className={styles.card}>
      <div>
        <p>Marca: <span>{brand}</span></p>
        <p>Modelo: <span>{model}</span></p>
      </div>
      <div>
        <p>Ano de Lançamento: <span>{yearOfManufacture}</span></p>
        <p>Cor: <span>{color}</span></p>
      </div>
    </div>
  );
};

export default CarCard;
