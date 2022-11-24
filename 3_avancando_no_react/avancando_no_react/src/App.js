import image from "./assets/developer.jpg";
import ConditionalRender from "./Components/ConditionalRender";
import ListRender from "./Components/ListRender";
import ManageData from "./Components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Avançando com React :)</h1>

      <div>
        {/* imagens públicas não precisam passar todo o path */}
        <img src="/programing.jpg" alt="Uma pessoa programando" />
      </div>

      <div>
        <img src={image} alt="Pessoa olhando para o monitor" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
