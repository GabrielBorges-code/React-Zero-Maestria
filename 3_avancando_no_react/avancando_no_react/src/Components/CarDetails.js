import React from 'react'

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {newCar &&<li>Esse carro é novo</li>}
            {!newCar &&<li>Esse carro é usado</li>}
        </ul>
    </>
  )
}

export default CarDetails