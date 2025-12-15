import React from "react";
import Sidebar from "../components/Sidebar";

const mujeres = [
  {
    nombre: "Marie Curie",
    imagen: "https://www.laizquierdadiario.com/IMG/arton142325.jpg?1573254659",
    descripcion:
      "Pionera en la investigación científica y primera persona en recibir dos premios Nobel. Su dedicación transformó la ciencia moderna.",
  },
  {
    nombre: "Malala Yousafzai",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x4vxIq5AtBP089MV1HiOVfVvD-u7OxZ5ew&s",
    descripcion:
      "Defensora del derecho a la educación de las niñas. Su valentía y voz han inspirado a millones alrededor del mundo.",
  },
  {
    nombre: "Ada Lovelace",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    descripcion:
      "Considerada la primera programadora de la historia. Su visión sentó las bases de la informática moderna.",
  },
  {
    nombre: "Frida Kahlo",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrtKaM6trFZDLtZ0d98mMSCSbTk27gjUZJA&s",
    descripcion:
      "Artista icónica que convirtió el dolor y la identidad en obras que marcaron la historia del arte mundial.",
  },
  {
    nombre: "Katherine Johnson",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0rUNXRnCH8wPHHjJ6nXi_Zfrf2-P2QaJqg&s",
    descripcion:
      "Matemática de la NASA cuyas ecuaciones fueron vitales para las misiones espaciales de EE.UU.",
  },
];

export default function Inspiracion() {
  return (
    <div className="flex">

      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 py-10 px-6 bg-gradient-to-b from-[#fff7fb] to-[#fff7fb] min-h-screen">

        <h2 className="text-4xl font-serif text-center text-[#B85A76] italic mb-12 drop-shadow-sm">
          MUJERES QUE INSPIRAN EL CAMBIO
        </h2>

        <div className="flex flex-col items-center space-y-10">

          {/* Fila 1: tres cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {mujeres.slice(0, 3).map((mujer, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col items-center w-[320px] h-[420px]"
              >
                <img
                  src={mujer.imagen}
                  alt={mujer.nombre}
                  className="w-48 h-48 object-cover rounded-full mb-5 border-4 border-[#C8A97E]/40 shadow-md"
                />
                <h3 className="text-xl font-semibold text-pink-600 mb-2 text-center">
                  {mujer.nombre}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {mujer.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Fila 2: dos cards */}
          <div className="flex justify-center gap-10">
            {mujeres.slice(3).map((mujer, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col items-center w-[320px] h-[420px]"
              >
                <img
                  src={mujer.imagen}
                  alt={mujer.nombre}
                  className="w-48 h-48 object-cover rounded-full mb-5 border-4 border-[#C8A97E]/40 shadow-md"
                />
                <h3 className="text-xl font-semibold text-pink-600 mb-2 text-center">
                  {mujer.nombre}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {mujer.descripcion}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
