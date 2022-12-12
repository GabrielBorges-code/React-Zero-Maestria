import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import React from "react";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3001/products?" + searchParams;

  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Resultados Disponíveis</h1>

      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              <Link to={`product/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
