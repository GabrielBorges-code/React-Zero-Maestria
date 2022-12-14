// import { useContext } from "react";

// import { CouterContext } from "../context/CouterContext";

import { useCouterContext } from "../hooks/useCouterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {
  // const { couter } = useContext(CouterContext);
  const { couter } = useCouterContext();

  const { color } = useTitleColorContext();


  return (
    <div>
      <h1 style={{ color: color }}>Página de produtos.</h1>
      <p>{ couter }</p>
    </div>
  )
}

export default Products