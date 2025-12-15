// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user }   = useAuth();
  const navigate   = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-7xl font-bold text-pink-500 mb-4">
        ¡Hola, {user.username || user.email}!
      </h1>
      <p className="text-gray-700 mb-5">
        Bienvenido a tu página de inicio
      </p>
    </div>
  );
}
