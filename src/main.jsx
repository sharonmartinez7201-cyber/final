// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,HashRouter } from "react-router-dom";
import App from "./App";                  // 👈 importante esta ruta
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
