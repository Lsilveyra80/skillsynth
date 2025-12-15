// pages/index.js
import Link from "next/link";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Fondo sutil */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-64 left-1/3 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* NAV simple */}
      <header className="container-app pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-slate-900/60 border border-slate-800 grid place-items-center">
              <span className="text-sky-300 font-bold">S</span>
            </div>
            <span className="text-sm text-slate-200 font-semibold">
              SkillSynth
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a href="#planes" className="btn-ghost px-4 py-2 text-xs">
              Ver planes
            </a>
            <Link href="/create" className="btn-primary px-4 py-2 text-xs">
              Crear SkillSynth
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container-app pt-14 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            IA aplicada para diseñar una habilidad profesional monetizable
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Convertí lo que ya sabés hacer en una{" "}
            <span className="text-sky-300">habilidad compuesta</span> lista para
            vender
          </h1>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            SkillSynth combina tus habilidades, objetivos e industrias para
            devolverte una <span className="font-semibold">SkillSynth Card</span>{" "}
            con descripción, nichos, rango de ingresos y un plan de 30 días.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/create" className="btn-primary w-full sm:w-auto">
              Crear mi SkillSynth
            </Link>
            <a href="#planes" className="btn-ghost w-full sm:w-auto">
              Ver planes y precios
            </a>
          </div>

          <p className="help mt-3">
            Starter: 5 tarjetas/mes • Sin tarjeta • Probalo en 2 minutos
          </p>
        </div>

        {/* Cómo funciona */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <p className="text-xs text-slate-500 uppercase tracking-widest">
              Paso 1
            </p>
            <p className="mt-2 font-semibold text-white">Cargás tu perfil</p>
            <p className="muted mt-1 text-sm">
              Habilidades, objetivo, industria y tiempo semanal.
            </p>
          </div>
          <div className="card p-5">
            <p className="text-xs text-slate-500 uppercase tracking-widest">
              Paso 2
            </p>
            <p className="mt-2 font-semibold text-white">Generás la card</p>
            <p className="muted mt-1 text-sm">
              IA compone una habilidad nueva + nichos + tareas + herramientas.
            </p>
          </div>
          <div className="card p-5">
            <p className="text-xs text-slate-500 uppercase tracking-widest">
              Paso 3
            </p>
            <p className="mt-2 font-semibold text-white">La convertís en acción</p>
            <p className="muted mt-1 text-sm">
              Te llevás un plan de 30 días para ejecutarlo y monetizar.
            </p>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <div id="planes">
        <PricingSection />
      </div>

      <footer className="container-app pb-12">
        <div className="mt-6 border-t border-slate-900 pt-6 text-center text-xs text-slate-600">
          SkillSynth • MVP 2025
        </div>
      </footer>
    </main>
  );
}
