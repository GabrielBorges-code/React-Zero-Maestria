import { useContext } from "react";
import { CouterContext } from "../context/CouterContext";


const ChangeCouter = () => {
    const { couter, setCouter } = useContext(CouterContext);

    const handleSumCouter = () => {
        setCouter(couter+1)
    }
    
    const handleSubCouter = () => {
        setCouter(couter-1)
    }

  return (
    <div>
        <button onClick={handleSubCouter}>Subtraí o cauter</button>
        <button onClick={handleSumCouter}>Soma o cauter</button>
    </div>
  )
}

export default ChangeCouter