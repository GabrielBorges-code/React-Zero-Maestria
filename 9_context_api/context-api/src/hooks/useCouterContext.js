import { useContext } from "react";
import { CouterContext } from "../context/CouterContext";

export const useCouterContext = () => {

    const context = useContext(CouterContext);

    if(!context) {
        console.log('contexto não encontrado')
    
    }

    return context;

}