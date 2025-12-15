import React from "react";
import Sidebar from "../components/Sidebar";

export default function MetasPage() {
  const metas = [
    {
      id: 1,
      titulo: "Luchar contra la desigualdad de género",
      texto:
        "Nuestro esfuerzo está dirigido a reducir las brechas de género en todos los ámbitos: educación, trabajo y participación social. Queremos oportunidades justas para todas las personas.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 2,
      titulo: "Motivar y apoyar a la gente",
      texto:
        "Ayudamos a todas las personas para motivarlas a cumplir sus objetivos y acceder a mejores chambas —con recursos, mentoría y herramientas para crecer profesionalmente.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 7l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 3,
      titulo: "Promover la tecnología",
      texto:
        "Promulgamos el uso de la tecnología como herramienta clave para el presente y el futuro: formación digital, acceso y proyectos que reduzcan la brecha tecnológica.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 4,
      titulo: "Fomentar la creatividad y el buen diseño",
      texto:
        "Promover actividades creativas que faciliten procesos y mejoren la experiencia de usuario en páginas y herramientas, buscando soluciones prácticas y estéticas.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16 5.5 20l2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Contenido */}
      <main className="min-h-screen flex-1 bg-gradient-to-b from-[#fff7fb] to-[#fdeef4] py-16 px-6">

        <section className="w-full max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif italic text-[#B85A76]">
              Nuestras metas
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Cuatro pilares que guían nuestro trabajo y cada proyecto que emprendemos.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {metas.map((meta, idx) => (
              <article
                key={meta.id}
                className={`
                  bg-white rounded-2xl shadow-lg p-6 transform transition
                  duration-400 hover:-translate-y-2 hover:shadow-2xl flex flex-col gap-4
                  ${idx === 3 ? "lg:col-start-2 lg:col-end-3" : ""}
                `}
                aria-labelledby={`meta-${meta.id}`}>
                
                <div className="flex items-center gap-4">
                  <div className="text-pink-600 bg-pink-50 rounded-xl p-2">
                    {meta.icon}
                  </div>
                  <h2 id={`meta-${meta.id}`} className="text-xl font-semibold text-gray-800">
                    {meta.titulo}
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed flex-1">
                  {meta.texto}
                </p>

                <div>
                  <button
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-[#B85A76] text-white hover:bg-[#a14a63] transition"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Saber más
                  </button>
                </div>

              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
