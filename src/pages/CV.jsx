import React from "react";
import Sidebar from "../components/Sidebar";

export default function CV() {
  const grupo = {
    nombre: "GRUPO HEXAGONIA",
    tagline: "Formando talento técnico con enfoque social y de género",
    mision:
      "Fomentamos el uso responsable y proactivo de la programación entre jóvenes, con especial énfasis en niñas y mujeres. Ofrecemos formación, mentoría y acompañamiento para mejorar el acceso y trato en entornos laborales técnicos.",
    servicios: [
      "Cursos presenciales y online (introducción y avanzados)",
      "Talleres prácticos enfocados en proyectos reales",
      "Mentoría profesional y preparación para entrevistas",
      "Programas de inclusión y acompañamiento a mujeres",
    ],
    impacto: {
      anos: 1,
      estudiantesFormadas: 30,
      talleres: 3,
      colaboraciones: 4,
    },
    miembros: [
      {
        nombre: "Sharon Martinez.",
        rol: "Cordinadora",
        bio: "Ingeniera de software con experiencia en educación técnica.",
      },
      {
        nombre: "Astrid",
        rol: "Educadora ",
        bio: "Diseñadora enfocada en experiencia de usuario y accesibilidad.",
      },
      {
        nombre: "Zuarlet",
        rol: "Gestión de proyectos",
        bio: "Encargada de alianzas y programas de inclusión.",
      },
    ],
    contacto: {
      email: "Hexagonia@gmail.com",
      web: "www.Hexagonia.pe.org",
      telefono: "+51 987 654 321",
    },
  };

  return (
    <div className="flex min-h-screen bg-[#fff7fb]">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 bg-gray-50 text-gray-800 p-6 md:p-12 font-sans">

        {/* HEADER */}
        <header className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
         <div className="flex-shrink-0 w-28 h-28 overflow-hidden rounded-full shadow-md">
              <img src={"https://i.postimg.cc/7LmkdjCq/Chat-GPT-Image-12-dic-2025-04-51-38-p-m.png"} alt="Logo Hexagonia" className="w-full h-full object-cover" />
        </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{grupo.nombre}</h1>
            <p className="mt-1 text-sm md:text-base text-gray-600">
              {grupo.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${grupo.contacto.email}`}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:shadow-sm"
              >
                Contactar
              </a>
              <a
                href={"#servicios"}
                className="px-4 py-2 rounded-full bg-pink-600 text-white text-sm hover:opacity-90"
              >
                Nuestros servicios
              </a>
              <a
                href={"#impacto"}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm"
              >
                Impacto
              </a>
            </div>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <section className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold">Quiénes somos</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {grupo.mision}
            </p>

            <h3 id="servicios" className="mt-6 text-lg font-semibold">
              Servicios
            </h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {grupo.servicios.map((s, i) => (
                <li key={i} className="p-3 border rounded-lg bg-gray-50">
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Metodología</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Programas basados en aprendizaje activo: proyectos por equipo,
              pair-programming, revisión de código, y simulaciones de entrevistas laborales.
              En cada curso promovemos la seguridad psicológica, lenguaje inclusivo y
              herramientas que facilitan el acceso a carreras tecnológicas.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Programas destacados</h3>
            <div className="mt-3 space-y-3">
              <div className="p-4 border rounded-lg">
                <strong>Bootcamp Intro</strong>
                <p className="text-sm text-gray-600 mt-1">
                  6 semanas de fundamentos prácticos: HTML, CSS, JavaScript y bases de proyectos.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <strong>Taller de Proyectos para mujeres</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Mentoría y prácticas enfocadas a generar portafolios y confianza para el mercado laboral.
                </p>
              </div>
            </div>
          </article>

          {/* IMPACTO */}
          <aside className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold">Impacto</h2>
            <div
              id="impacto"
              className="mt-4 grid grid-cols-2 gap-4 text-center"
            >
              <div>
                <div className="text-2xl font-bold">
                  {grupo.impacto.estudiantesFormadas}+
                </div>
                <div className="text-sm text-gray-500">
                  estudiantes formadas
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">{grupo.impacto.talleres}</div>
                <div className="text-sm text-gray-500">talleres</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {grupo.impacto.colaboraciones}
                </div>
                <div className="text-sm text-gray-500">alianzas</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{grupo.impacto.anos}</div>
                <div className="text-sm text-gray-500">años de trabajo</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold">Contacto</h3>
              <p className="text-sm text-gray-600 mt-2">
                Email:{" "}
                <a
                  href={`mailto:${grupo.contacto.email}`}
                  className="underline"
                >
                  {grupo.contacto.email}
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Web:{" "}
                <a
                  href={`https://${grupo.contacto.web}`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  {grupo.contacto.web}
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Tel: {grupo.contacto.telefono}
              </p>

              <a
                href={`mailto:${grupo.contacto.email}?subject=Interes%20en%20colaboración`}
                className="mt-4 inline-block w-full text-center px-4 py-2 rounded-lg bg-pink-800 text-white text-sm"
              >
                Escríbenos
              </a>
            </div>
          </aside>
        </section>

        {/* EQUIPO */}
        <section className="max-w-6xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold">Equipo</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {grupo.miembros.map((m, i) => (
              <div
                key={i}
                className="p-4 border rounded-lg flex flex-col gap-2 items-start"
              >
                <div className="w-full flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{m.nombre}</div>
                    <div className="text-sm text-gray-500">{m.rol}</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                    Img
                  </div>
                </div>

                <p className="text-sm text-gray-600">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
