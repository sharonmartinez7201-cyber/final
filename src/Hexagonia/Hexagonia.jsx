import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Inicio from "./inicio";
import Inspiracion from "./Inspiracion";
import Nosotras from "./nosotras";
import Metas from "./Metas";
import Formulario from "./formulario";

export default function Hexagonia() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Verificar si hay usuario logueado
  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (!stored) {
      navigate("/login"); // si no hay usuario, lo mando a login
    } else {
      setCurrentUser(JSON.parse(stored));
    }
  }, [navigate]);

  const botones = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotras", label: "Nosotras" },
    { id: "inspiracion", label: "Inspiración" },
    { id: "metas", label: "Metas" },
    { id: "formulario", label: "Formulario" },
  ];

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  // Mientras carga el usuario, opcionalmente devolver algo
  if (!currentUser) return null;

  return (
    <div className="relative flex">
      {/* Botón hamburguesa (solo en móvil) */}
      <button
        onClick={toggleMenu}
        className="md:hidden bg-pink-600 text-white p-3 rounded-md m-4 fixed z-20"
      >
        ☰
      </button>

      {/* Menú lateral */}
      <aside
        className={`fixed top-0 left-0 h-full w-56 bg-white border-r shadow-lg transform ${
          menuAbierto ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block`}
      >
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold text-black mb-4">Menú</h2>

          <p className="mb-2 text-sm text-gray-600">
            {/* 👇 saludo en el menú */}
            Hola, <span className="font-semibold">{currentUser.username}</span> 💕
          </p>

          {botones.map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                const section = document.getElementById(btn.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
                setMenuAbierto(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-md hover:bg-[#ffc8f2] text-gray-700"
            >
              {btn.label}
            </button>
          ))}

          <button
            onClick={logout}
            className="mt-4 w-full bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 md:ml-56 min-h-screen bg-gradient-to-b from-[#fff7fb] to-[#fff7fb]">
        <section id="inicio" className="mb-16">
          {/* 👇 saludo grande arriba */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#b05e81] mb-4">
            ¡Bienvenida, {currentUser.username}! 💖
          </h2>

          <h1 className="text-center text-4xl md:text-6xl lg:text-8xl italic font-serif text-[#b05e81]">
            HEXAGONIA
          </h1>
          <Inicio />
        </section>

        <section id="nosotras" className="mb-16">
          <Nosotras />
        </section>

        <section id="inspiracion" className="mb-16">
          <Inspiracion />
        </section>

        <section id="metas" className="mb-16">
          <Metas />
        </section>

        <section id="formulario" className="mb-16">
          <Formulario />
        </section>
      </main>
    </div>
  );
}
