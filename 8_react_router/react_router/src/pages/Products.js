import { useFetch } from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();

  const url = "http://localhost:3001/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      {/* <p>Id do produto {id}</p> */}

      {error && <p>Ocorreu um erro.</p>}

      {loading && <p>Carregando...</p>}

      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          <Link to={`/product/${product.id}/info`}>Main informações</Link>
        </div>
      )}
    </>
  );
};

export default Products;
