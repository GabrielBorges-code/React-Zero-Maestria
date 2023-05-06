import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HookUseEffect from "./components/HookUseEffect";
import HookUseReducer from "./components/HookUseReducer";
import HookUseState from "./components/HookUseState";
import { HookUseContext } from "./components/HookUseContext";
import HookUseRef from "./components/HookUseRef";
import HookUseCallback from "./components/HookUseCallback";
import HookUseMemo from "./components/HookUseMemo";
import HookUseLayoutEffect from "./components/HookUseLayoutEffect";
import HookUseImperativeHandle from "./components/HookUseImperativeHandle";
import HookCustom from "./components/HookCustom";

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
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
          <li>
            <Link to="/useref">useRef</Link>
          </li>
          <li>
            <Link to="/usecallback">useCallback</Link>
          </li>
          <li>
            <Link to="/usememo">useMemo</Link>
          </li>
          <li>
            <Link to="/uselayouteffect">useLayoutEffect</Link>
          </li>
          <li>
            <Link to="/useimperativeHandle">useImperativeHandle</Link>
          </li>
          <li>
            <Link to="/customhook">customHook</Link>
          </li>
        </ul>
        <HookUseContext>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/usestate" element={<HookUseState />} />
            <Route path="/usereducer" element={<HookUseReducer />} />
            <Route path="/useeffect" element={<HookUseEffect />} />
            <Route path="/useref" element={<HookUseRef />} />
            <Route path="/usecallback" element={<HookUseCallback />} />
            <Route path="/usememo" element={<HookUseMemo />} />
            <Route path="/uselayouteffect" element={<HookUseLayoutEffect />} />
            <Route
              path="/useimperativeHandle"
              element={<HookUseImperativeHandle />}
            />
            <Route path="/customhook" element={<HookCustom />} />
          </Routes>
        </HookUseContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
