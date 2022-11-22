import './App.css';

function App() {
  const name = "Matheus Basttisti";

  return (

    <div className="App">
      <h1>Hello World!</h1>
      <p>Eu estou fazendoo curso do professor <span className="span-name">{name}</span></p>
    </div>
  );
}

export default App;
