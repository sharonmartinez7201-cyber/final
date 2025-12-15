import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Auth pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";

// Hexagonia pages
import Hexagonia from "./pages/Hexagonia";
import Inicio from "./pages/inicio";
import Nosotras from "./pages/Nosotras";
import Inspiracion from "./pages/Inspiracion";
import Metas from "./pages/Metas";
import Formulario from "./pages/Formulario";
import CV from "./pages/CV";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />

        {/* Hexagonia */}
        <Route path="/hexagonia" element={<Hexagonia />} />
        <Route path="/hexagonia/inicio" element={<Inicio />} />
        <Route path="/hexagonia/nosotras" element={<Nosotras />} />
        <Route path="/hexagonia/inspiracion" element={<Inspiracion />} />
        <Route path="/hexagonia/metas" element={<Metas />} />
        <Route path="/hexagonia/formulario" element={<Formulario />} />
        <Route path="/hexagonia/cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
