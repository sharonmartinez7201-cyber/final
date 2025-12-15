import Sidebar from "../components/Sidebar";

export default function Inicio() {
  return (
    // 1. Contenedor principal: Cambiamos a 'flex' para que los elementos se coloquen en fila.
    // Mantenemos min-h-screen para que ocupe toda la altura.
    <div className="flex min-h-screen">
      
     {/* Sidebar fijo al lado izquierdo */}
      <Sidebar />

      {/* 3. El contenido principal: Lo envolvemos en <main> y le damos 'flex-1'
         para que ocupe todo el espacio sobrante al lado del Sidebar. */}
      <main className="flex-1 py-10 px-6 bg-gradient-to-b from-[#fff7fb] to-[#fff7fb] text-center flex flex-col items-center justify-center">
        
        {/* Tu contenido original */}
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-equipo-femenino-dibujado-mano_23-2150245851.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Logo del grupo Chicas Tec"
          className="w-110 h-auto mb-70 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 "
        />

        {/* Frase representativa */}
        <p className="text-2xl italic text-[#B85A76] font-serif max-w-xl -mt-55">
          “Innovación, pasión y tecnología en cada paso que damos.”
        </p>
      
      </main>
    </div>
  );
}

