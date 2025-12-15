
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const navigate                = useNavigate();
  const { register }            = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(email, username, password);
      // 👇 Llévalo a Hexagonia
      navigate("/hexagonia");
    } catch (err) {
      console.error(err);
      alert(err.message || "Error al registrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">
          Crear cuenta
        </h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="border p-2 w-full mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          className="border p-2 w-full mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-400 text-white w-full py-2 rounded hover:bg-pink-500 disabled:opacity-60"
        >
          {loading ? "Creando..." : "Registrarme"}
        </button>
      </form>
    </div>
  );
}

