import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Sparkles,
  Target,
  Mail,
  FileText,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const menu = [
    { label: "Inicio", ruta: "/hexagonia/inicio", icon: <Home size={18} /> },
    { label: "Nosotras", ruta: "/hexagonia/nosotras", icon: <Users size={18} /> },
    { label: "Inspiración", ruta: "/hexagonia/inspiracion", icon: <Sparkles size={18} /> },
    { label: "Metas", ruta: "/hexagonia/metas", icon: <Target size={18} /> },
    { label: "Formulario", ruta: "/hexagonia/formulario", icon: <Mail size={18} /> },
    { label: "CV", ruta: "/hexagonia/cv", icon: <FileText size={18} /> }
  ];

  return (
    <>
      {/* Botón menú móvil */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-30 bg-white/80 backdrop-blur-md px-3 py-2 rounded-lg shadow-md border border-gray-200"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-gradient-to-b from-[#fbe9f4] to-[#f7e7ff]
        shadow-xl backdrop-blur-xl border-r border-white/40
        transform transition-transform duration-300 z-20
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        <div className="p-6 border-b border-white/40 text-center">
          <h1 className="text-3xl font-bold text-[#A75BA0] tracking-wide">
            Hexagonia
          </h1>
          <p className="text-sm text-gray-600 mt-1">Proyecto Femenino</p>
        </div>

        <div className="p-4 flex flex-col space-y-3">
          {menu.map((btn) => (
            <button
              key={btn.ruta}
              onClick={() => navigate(btn.ruta)}
              className="flex items-center gap-3 px-4 py-2 rounded-xl 
              text-[#854d86] font-medium
              hover:bg-white hover:text-[#A75BA0] hover:shadow-md 
              transition-all duration-200"
            >
              {btn.icon}
              {btn.label}
            </button>
          ))}

          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-3 px-4 py-2 rounded-xl font-medium
            bg-white/60 text-gray-700 hover:bg-white hover:shadow-md 
            border border-white/40 mt-4 transition-all"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 mt-auto mb-4">
          © Hexagonia 2025
        </p>
      </aside>
    </>
  );
}
