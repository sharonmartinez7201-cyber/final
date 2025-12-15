import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    edad: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado!"); // Aquí puedes integrar tu backend o Firebase
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-6 md:ml-56 min-h-screen bg-gradient-to-b from-[#fff7fb] to-[#fff7fb]">
        <h2 className="text-4xl font-serif text-center text-[#B85A76] italic mb-12">
          Contáctanos
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-300 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Correo</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="ej: correo@ejemplo.com"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-300 outline-none"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Contraseña</label>
              <input
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="Mínimo 8 caracteres"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-300 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Edad</label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                placeholder="ej: 28"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-300 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
              className="w-full rounded-lg border border-gray-300 p-3 min-h-[120px] focus:ring-2 focus:ring-pink-300 outline-none"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Limpiar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
