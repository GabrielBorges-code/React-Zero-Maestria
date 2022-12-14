import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { CouterContextProvider } from "./context/CouterContext";
import { TitleColorContextProvider } from "./context/TitleColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CouterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CouterContextProvider>
  </React.StrictMode>
);
