// src/componentes/Navbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext"; 

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
      alert("No se pudo cerrar sesión, intenta de nuevo.");
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Mi App</h1>

      {user ? (
        <div className="flex gap-3 items-center">
          <span className="text-sm">
            {user.username ? user.username : user.email}
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p className="text-sm italic">No conectado</p>
      )}
    </div>
  );
}
