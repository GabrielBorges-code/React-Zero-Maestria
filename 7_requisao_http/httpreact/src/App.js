import { useFetch } from "./hooks/useFetch";

import RegisterProduct from "./components/RegisterProduct";

import "./App.css";
import CardProduct from "./components/CardProduct";

const url = "http://localhost:3001/products";

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url);

  return (
    <div className="App">
      <RegisterProduct loading={loading} httpConfig={httpConfig} />

      <hr />
      {loading && <p>Carregando...</p>}

      {error && <p>{error}</p>}

      {!error && <CardProduct httpConfig={httpConfig} products={items} />}
    </div>
  );
}

export default App;
