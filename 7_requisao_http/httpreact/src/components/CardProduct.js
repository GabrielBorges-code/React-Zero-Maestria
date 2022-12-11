import React from "react";

const CardProduct = ({ httpConfig, products }) => {
  const handleDeleteProduct = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <h2>Lista de Produtos</h2>

      <ul>
        {products &&
          products.map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <span>
                R$
                {item.price}
              </span>{" "}
              <button onClick={() => handleDeleteProduct(item.id)}>
                Apagar
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CardProduct;
