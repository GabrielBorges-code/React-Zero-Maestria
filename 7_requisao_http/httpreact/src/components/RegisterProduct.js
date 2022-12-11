import React, { useState } from "react";

const FormData = ({ httpConfig, loading }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name: name,
      price: price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Produto:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <br />

      <label>
        Preço:
        <input
          type="number"
          minLength="0"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <br />

      {loading && <input type="submit" disabled value="Aguarde..." />}
      {!loading && <input type="submit" value="Enviar" />}
    </form>
  );
};

export default FormData;
