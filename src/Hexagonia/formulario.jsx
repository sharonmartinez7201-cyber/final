import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Puedes borrar este import si no usas realmente Hexagonia aquí
// import Hexagonia from "./Hexagonia";

export default function ContactoTest() {
  const [panel, setPanel] = useState("contact");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPanel("test");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-100 to-pink-100 text-pink-950 p-8 font-[Inter] flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-[300px_1fr] gap-7">
        {/* ===== SIDEBAR ===== */}
        <aside className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <div className="text-3xl font-extrabold">
              Hx
              <small className="block text-sm font-semibold text-gray-800">
                Perfil Pro • Test & Contacto
              </small>
            </div>

            <nav className="mt-6 space-y-2">
              <button
                onClick={() => setPanel("contact")}
                className={`w-full text-left px-3 py-2 rounded-lg font-semibold ${
                  panel === "contact"
                    ? "bg-gradient-to-r from-gray-400 to-gray-300 text-white shadow-md"
                    : "hover:bg-gray-100"
                }`}
              >
                Contacto
              </button>
            </nav>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            💡 Completa tus datos para continuar.
          </p>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8">
          {/* ---------- PANEL CONTACTO ---------- */}
          {panel === "contact" && (
            <section>
              <h2 className="text-2xl font-bold mb-2">Formulario de contacto</h2>
              <p className="text-gray-600 mb-6">
                Deja tus datos y un mensaje.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold block mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      placeholder="ej: Juan Pérez"
                      className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="ej: correo@ejemplo.com"
                      className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold block mb-1">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-1">
                      Edad
                    </label>
                    <input
                      type="number"
                      placeholder="ej: 28"
                      className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Escribe tu mensaje..."
                    className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 shadow-sm min-h-[120px] focus:ring-2 focus:ring-purple-400 outline-none"
                    required
                  ></textarea>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    type="reset"
                    className="px-4 py-2 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100"
                  >
                    Limpiar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-gray-400 to-gray-400 shadow-md hover:shadow-lg transition"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
