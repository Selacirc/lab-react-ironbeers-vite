import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BeerProvider } from "./context/beer.context.jsx";

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BeerProvider>
          <App />
      </BeerProvider>
    </BrowserRouter>
  </React.StrictMode>
);