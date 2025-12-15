// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail]       = useState("");
  const [loading, setLoading]   = useState(false);
  const navigate                = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      alert(
        "Te hemos enviado un correo para restablecer tu contraseña. Revisa tu bandeja de entrada o spam."
      );
      navigate("/login");
    } catch (error) {
      console.error("Error al enviar correo de recuperación:", error);
      if (error.code === "auth/user-not-found") {
        alert("No existe un usuario con ese correo.");
      } else if (error.code === "auth/invalid-email") {
        alert("El correo no es válido.");
      } else {
        alert("Ocurrió un error al intentar recuperar la contraseña.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <form
        onSubmit={handleChangePassword}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">
          Recuperar contraseña
        </h2>
        <input
          type="email"
          placeholder="Correo"
          className="border p-2 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-400 text-white w-full py-2 rounded hover:bg-pink-500 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar correo de recuperación"}
        </button>
      </form>
    </div>
  );
}
