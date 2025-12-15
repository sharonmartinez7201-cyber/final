import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Nosotras() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const mujeres = [
    {
      nombre: "Zuarlet",
      descripcion:
        "me encanta la tecnología. Quiero aprender más sobre información y alcanzar mis metas.",
      imagen:
        "https://iucn.org/sites/default/files/2022-07/3_monarch-butterfly_-joe-schelling_compressed-for-web.jpg",
    },
    {
      nombre: "Astrid",
      descripcion:
        "soy una chica interesada en temas de tecnología, es por eso que estoy aquí dando lo mejor de mí.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8FOjaHtbRyeyWMvRCXgBNCEL1OrZvPlU-w&s",
    },
    {
      nombre: "Sharon",
      descripcion:
        "me apasiona la tecnología. Me gusta aprender y aportar mis ideas para mejorar proyectos innovadores.",
      imagen:
        "https://asiantrails.b-cdn.net/wp-content/uploads/2022/03/full-day-8-dimensions-experience-in-chongqing-3.jpg",
    },
  ];

  return (
    <div className="flex">

      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenido */}
      <main className="flex-1 min-h-screen bg-gradient-to-b from-[#fff7fb] to-[#fff7fb] p-10">

        <h1 className="text-center text-4xl font-bold text-pink-600 mb-10">
          Nosotras
        </h1>

        <div
          className={`flex flex-wrap justify-center gap-10 transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {mujeres.map((mujer, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg w-80 transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden group"
            >
              <img
                src={mujer.imagen}
                alt={mujer.nombre}
                className="w-full h-80 object-cover rounded-t-2xl"
              />

              <div className="p-5 text-center">
                <h2 className="text-3xl font-semibold text-pink-600 mb-2 tracking-wide">
                  {mujer.nombre}
                </h2>
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  {mujer.descripcion}
                </p>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-[200%] h-full top-0 left-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-1000 transform group-hover:translate-x-[100%]" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
