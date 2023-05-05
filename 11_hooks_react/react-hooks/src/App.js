import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HookUseEffect from "./components/HookUseEffect";
import HookUseReducer from "./components/HookUseReducer";
import HookUseState from "./components/HookUseState";
import { HookUseContext } from "./components/HookUseContext";

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul className="menu-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/usestate">useState</Link>
          </li>
          <li>
            <Link to="/usereducer">useReducer</Link>
          </li>
          <li>
            <Link to="/useeffect">useEffect</Link>
          </li>
        </ul>
        <HookUseContext>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/usestate" element={<HookUseState />} />
            <Route path="/usereducer" element={<HookUseReducer />} />
            <Route path="/useeffect" element={<HookUseEffect />} />
          </Routes>
        </HookUseContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
