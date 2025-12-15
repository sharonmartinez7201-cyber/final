// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();

      // Firebase login
      const user = await login(cleanEmail, password);

      // Guarda el usuario para Hexagonia
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: cleanEmail.split("@")[0],
          email: cleanEmail,
          uid: user?.uid || null,
        })
      );

      navigate("/hexagonia");
    } catch (error) {
      console.error(error);

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        alert("Correo o contraseña incorrectos");
      } else if (error.code === "auth/invalid-email") {
        alert("El correo no es válido");
      } else {
        alert("Ocurrió un error al iniciar sesión. Intenta de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">
          Iniciar sesión
        </h2>

        <input
          type="email"
          placeholder="Correo"
          autoComplete="email"
          className="border p-2 w-full mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          autoComplete="current-password"
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
          {loading ? "Ingresando..." : "Entrar"}
        </button>

        <p
          className="text-sm text-center mt-3 text-pink-600 cursor-pointer"
          onClick={() => navigate("/forgot")}
        >
          ¿Olvidaste tu contraseña?
        </p>

        <p
          className="text-sm text-center mt-2 text-pink-600 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          ¿No tienes cuenta? Crear cuenta
        </p>
      </form>
    </div>
  );
}
