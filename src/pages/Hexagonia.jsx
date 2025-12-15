import Sidebar from "../components/Sidebar";

export default function Hexagonia() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex items-center justify-center p-10 bg-gradient-to-b from-[#fff7fb] to-[#fff7fb]">
        <h1 className="text-4xl font-serif italic text-[#B85A76]">
          Selecciona una sección en el menú 💖
        </h1>
      </main>
    </div>
  );
}
