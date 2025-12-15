// components/PricingSection.js
import Link from "next/link";

export default function PricingSection() {
  const MP_PLUS_URL =
    "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=1230df0521c548d2bca0729d6f293df8";
  const MP_PRO_URL =
    "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=08a30c0db23f4e6587e70cf1e4cf6848";

  return (
    <section className="container-app py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Planes de SkillSynth
        </h2>
        <p className="muted mt-3 text-sm md:text-base">
          Elegí un plan claro. Empezá gratis, y si te sirve, escalás a Plus o Pro
          con prioridad y más capacidad.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* STARTER */}
        <div className="card p-7 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Starter</h3>
            <span className="pill">Ideal para probar</span>
          </div>
          <p className="muted mt-2 text-sm">
            Para explorar la herramienta y validar si te sirve.
          </p>

          <div className="mt-6">
            <p className="text-4xl font-bold text-white">$0</p>
            <p className="muted text-sm">Gratis por siempre</p>
          </div>

          <ul className="mt-6 text-sm text-slate-300 space-y-2">
            <li>• Hasta 5 tarjetas por mes</li>
            <li>• 1 proyecto activo</li>
            <li>• Exportación básica</li>
            <li>• Generación estándar</li>
          </ul>

          <Link href="/create" className="btn-primary mt-8">
            Probar gratis
          </Link>

          <p className="help mt-3">
            Tip: si te gusta 1 resultado, Plus ya te alcanza para producir.
          </p>
        </div>

        {/* PLUS */}
        <div className="card-solid p-7 flex flex-col relative border-emerald-500/70">
          <div className="absolute -top-3 right-5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-slate-950 shadow">
            Más popular
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Plus</h3>
            <span className="pill border-emerald-500/40 text-emerald-200 bg-emerald-950/30">
              Para creadores
            </span>
          </div>

          <p className="muted mt-2 text-sm">
            Mejor para freelancers y gente que quiere resultados más consistentes.
          </p>

          <div className="mt-6">
            <p className="text-slate-500 text-sm line-through">
              Antes: ARS 17.250 / mes
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-4xl font-bold text-white">ARS 6.900</p>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-900/30 px-2 py-0.5 rounded-full border border-emerald-500/30">
                -60%
              </span>
            </div>
            <p className="muted text-sm mt-1">por mes</p>
          </div>

          <ul className="mt-6 text-sm text-slate-300 space-y-2">
            <li>• Hasta 50 tarjetas por mes</li>
            <li>• Proyectos ilimitados</li>
            <li>• Sin marca de agua</li>
            <li>• Exportación limpia</li>
            <li>• Prioridad en la generación</li>
          </ul>

          <a
            href={MP_PLUS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-emerald mt-8"
          >
            Comprar Plus en pesos
          </a>

          <p className="help mt-3 text-emerald-200/80">
            Precio de lanzamiento. Luego vuelve a su valor original.
          </p>
        </div>

        {/* PRO */}
        <div className="card p-7 flex flex-col border-violet-500/60">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Pro</h3>
            <span className="pill border-violet-500/30 text-violet-200 bg-violet-950/30">
              Profesional
            </span>
          </div>

          <p className="muted mt-2 text-sm">
            Para uso diario: coaches, RRHH y creadores avanzados.
          </p>

          <div className="mt-6">
            <p className="text-slate-500 text-sm line-through">
              Antes: ARS 28.000 / mes
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-4xl font-bold text-white">ARS 16.800</p>
              <span className="text-xs font-semibold text-violet-200 bg-violet-900/30 px-2 py-0.5 rounded-full border border-violet-500/30">
                -40%
              </span>
            </div>
            <p className="muted text-sm mt-1">por mes</p>
          </div>

          <ul className="mt-6 text-sm text-slate-300 space-y-2">
            <li>• Tarjetas ilimitadas</li>
            <li>• Proyectos ilimitados</li>
            <li>• Uso comercial completo</li>
            <li>• Generación rápida</li>
            <li>• Acceso anticipado a nuevas funciones</li>
            <li>• Exportación HD</li>
          </ul>

          <a
            href={MP_PRO_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-violet mt-8"
          >
            Comprar Pro en pesos
          </a>

          <p className="help mt-3 text-violet-200/80">
            Para quienes ya lo usan como herramienta de trabajo.
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-slate-600 mt-10">
        Todos los planes pueden cancelarse en cualquier momento.
      </p>
    </section>
  );
}
