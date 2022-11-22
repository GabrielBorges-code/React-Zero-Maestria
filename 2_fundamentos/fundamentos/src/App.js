// Components
import FirstComponent from './Components/FirstComponent';
import TemplateExpressions from './Components/TemplateExpressions';
import MyComponent from './Components/MyComponent';
import Events from './Components/Events';

// Styles
import './App.css';
import Challenge from './Components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>

      <Events/>

      <Challenge/>

    </div>
  );
}

export default App;
