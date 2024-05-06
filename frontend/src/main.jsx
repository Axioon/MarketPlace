// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CountProvider } from "./context/CountProvider.jsx";
import { CarritoProvider } from "./context/CarritoProvider.jsx";
import { AxiosProvider } from "./context/AxiosProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AxiosProvider>
      <CarritoProvider>
        <CountProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CountProvider>
      </CarritoProvider>
    </AxiosProvider>
  </React.StrictMode>
);
