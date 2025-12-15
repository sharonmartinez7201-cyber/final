
export default function PaginaInicio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg bg-gradient-to-b from-[#fff7fb] to-[#fff7fb] text-center px-4 ">
      {/* Imagen principal */}
      <img
        src="https://img.freepik.com/vector-gratis/ilustracion-equipo-femenino-dibujado-mano_23-2150245851.jpg?semt=ais_hybrid&w=740&q=80" // 🔸 aquí coloca la URL de tu imagen o logo
        alt="Logo del grupo Chicas Tec"
        className="w-110 h-auto mb-70 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 "
      />

      {/* Frase representativa */}
      <p className="text-2xl italic text-[#B85A76] font-serif max-w-xl -mt-55">
        “Innovación, pasión y tecnología en cada paso que damos.”
      </p>
    </div>
  );
}

