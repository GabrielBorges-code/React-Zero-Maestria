// esse é um comentário de teste
import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // Essa função faz tal ação

    return (
        <div>
            <h1>Meu "primeiro" component</h1>
            <p className="teste">Teste do component</p>
            {/* <p>Aqui vai ser um comentário</p> */}
            <MyComponent/>
        </div>
    );
}

export default FirstComponent;
