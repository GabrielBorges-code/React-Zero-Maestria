// import { useContext } from "react";

// import { CouterContext } from "../context/CouterContext";

import { useCouterContext } from "../hooks/useCouterContext";

import ChangeCouter from "../components/ChangeCouter";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { couter } = useContext(CouterContext);
  const { couter } = useCouterContext();
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{color: color}}>Página Principal</h1>

      <p>Valor do contador: {couter}</p>

      <ChangeCouter />

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
    
      </div>

    </div>
  )
}

export default Home