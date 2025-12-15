// pages/create.js
import { useMemo, useState } from "react";
import Link from "next/link";
import SkillCard from "../components/SkillCard";

export default function CreatePage() {
  const [habilidades, setHabilidades] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [industria, setIndustria] = useState("");
  const [tiempo, setTiempo] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState(null);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [copied, setCopied] = useState(false);

  const MP_PLUS_URL =
    "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=1230df0521c548d2bca0729d6f293df8";
  const MP_PRO_URL =
    "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=08a30c0db23f4e6587e70cf1e4cf6848";

  const examples = useMemo(
    () => ({
      habilidades: [
        "Análisis de datos + Excel + KPIs",
        "Diseño + creatividad + manualidades",
        "Programación web + IA + automatización",
      ],
      objetivo: ["Ingresos extra", "Trabajo remoto", "Cambiar de carrera"],
      industria: ["Tecnología", "Educación", "Marketing/Contenido", "Logística"],
      tiempo: ["5 horas/semana", "10 horas/semana", "30 min/día"],
    }),
    []
  );

  function useExample(setter, value) {
    setter(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    setResult(null);
    setShowUpgrade(false);
    setCopied(false);

    if (!habilidades || !objetivo || !industria || !tiempo) {
      setErrorMsg("Completá los 4 campos para generar una SkillSynth Card.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/compose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ habilidades, objetivo, industria, tiempo }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) setShowUpgrade(true);
        setErrorMsg(
          data?.error ||
            "Ocurrió un error al generar tu SkillSynth. Intentá nuevamente."
        );
        return;
      }

      setResult(data);
    } catch (err) {
      console.error(err);
      setErrorMsg("Error de conexión. Intentá nuevamente en unos minutos.");
    } finally {
      setLoading(false);
    }
  }

  async function copyJSON() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(result, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setErrorMsg("No pude copiar al portapapeles (revisá permisos del navegador).");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Fondo sutil */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-64 left-1/3 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="container-app pt-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="btn-ghost px-4 py-2 text-xs">
            ← Volver al inicio
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <a href={MP_PLUS_URL} target="_blank" rel="noreferrer" className="btn-emerald px-4 py-2 text-xs">
              Comprar Plus
            </a>
            <a href={MP_PRO_URL} target="_blank" rel="noreferrer" className="btn-violet px-4 py-2 text-xs">
              Comprar Pro
            </a>
          </div>
        </div>
      </header>

      <section className="container-app pt-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Crear mi SkillSynth
          </h1>
          <p className="muted mt-2">
            Completá tu perfil en 2 minutos y generá una SkillSynth Card lista para ejecutar.
          </p>

          {/* Plan summary */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="card p-4 border-sky-500/60">
              <p className="text-xs uppercase tracking-widest text-sky-300 mb-1">
                Plan actual
              </p>
              <p className="text-white font-semibold">Starter</p>
              <p className="muted text-xs mt-1">
                Gratis • Hasta 5 tarjetas/mes • 1 proyecto activo
              </p>
            </div>

            <div className="card p-4 border-emerald-500/60">
              <p className="text-xs uppercase tracking-widest text-emerald-300 mb-1">
                Plus (-60%)
              </p>
              <p className="text-white font-semibold">ARS 6.900 / mes</p>
              <p className="muted text-xs mt-1">
                50 tarjetas/mes • Proyectos ilimitados • Sin marca de agua
              </p>
              <a
                href={MP_PLUS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald mt-3 w-full"
              >
                Pasar a Plus
              </a>
            </div>

            <div className="card p-4 border-violet-500/60">
              <p className="text-xs uppercase tracking-widest text-violet-300 mb-1">
                Pro (-40%)
              </p>
              <p className="text-white font-semibold">ARS 16.800 / mes</p>
              <p className="muted text-xs mt-1">
                Ilimitado • Uso comercial • Máxima prioridad
              </p>
              <a
                href={MP_PRO_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-violet mt-3 w-full"
              >
                Pasar a Pro
              </a>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="card mt-6 p-5 md:p-7">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="label">¿Qué habilidades tenés hoy?</label>
                <textarea
                  className="textarea"
                  rows={4}
                  placeholder="Ej: análisis de datos, logística, creatividad, programación, trato con clientes..."
                  value={habilidades}
                  onChange={(e) => setHabilidades(e.target.value)}
                  disabled={loading}
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {examples.habilidades.map((ex) => (
                    <button
                      key={ex}
                      type="button"
                      className="pill hover:bg-slate-900/70 transition"
                      onClick={() => useExample(setHabilidades, ex)}
                      disabled={loading}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
                <p className="help">
                  Tip: mezclá duro + blando (ej. “KPIs + storytelling”).
                </p>
              </div>

              <div>
                <label className="label">¿Qué objetivo te gustaría lograr?</label>
                <input
                  className="input"
                  placeholder="Ej: generar ingresos extras, trabajar remoto, cambiar de carrera..."
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value)}
                  disabled={loading}
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {examples.objetivo.map((ex) => (
                    <button
                      key={ex}
                      type="button"
                      className="pill hover:bg-slate-900/70 transition"
                      onClick={() => useExample(setObjetivo, ex)}
                      disabled={loading}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
                <p className="help">
                  Mientras más concreto, mejor el resultado.
                </p>
              </div>

              <div>
                <label className="label">Industrias de interés</label>
                <input
                  className="input"
                  placeholder="Ej: tecnología, educación, contenidos digitales, IA aplicada..."
                  value={industria}
                  onChange={(e) => setIndustria(e.target.value)}
                  disabled={loading}
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {examples.industria.map((ex) => (
                    <button
                      key={ex}
                      type="button"
                      className="pill hover:bg-slate-900/70 transition"
                      onClick={() => useExample(setIndustria, ex)}
                      disabled={loading}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label">Tiempo disponible por semana</label>
                <input
                  className="input"
                  placeholder="Ej: 5 horas por semana, 30 minutos por día..."
                  value={tiempo}
                  onChange={(e) => setTiempo(e.target.value)}
                  disabled={loading}
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {examples.tiempo.map((ex) => (
                    <button
                      key={ex}
                      type="button"
                      className="pill hover:bg-slate-900/70 transition"
                      onClick={() => useExample(setTiempo, ex)}
                      disabled={loading}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
                <p className="help">
                  Esto influye en el “plan de 30 días”.
                </p>
              </div>
            </div>

            {errorMsg && (
              <div className="mt-5 rounded-2xl border border-rose-700 bg-rose-950/40 px-4 py-3 text-sm text-rose-100">
                {errorMsg}
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
                {loading ? "Generando SkillSynth..." : "Generar SkillSynth"}
              </button>

              <button
                type="button"
                className="btn-ghost w-full sm:w-auto"
                disabled={loading}
                onClick={() => {
                  setHabilidades("");
                  setObjetivo("");
                  setIndustria("");
                  setTiempo("");
                  setErrorMsg("");
                  setResult(null);
                  setShowUpgrade(false);
                  setCopied(false);
                }}
              >
                Limpiar
              </button>

              <p className="help sm:ml-auto">
                Puede tardar unos segundos.
              </p>
            </div>

            {loading && (
              <div className="mt-4 text-xs text-slate-500">
                Generando… tip: si querés una skill más específica, agregá tu “tipo de cliente ideal”.
              </div>
            )}
          </form>

          {/* UPGRADE al límite */}
          {showUpgrade && (
            <section className="mt-6 rounded-3xl border border-amber-500/70 bg-amber-950/30 p-5 md:p-6">
              <h2 className="text-lg font-semibold text-amber-100">
                Llegaste al límite del plan Starter
              </h2>
              <p className="text-amber-100/90 text-sm mt-2">
                Ya usaste tus 5 SkillSynth de este mes. Para seguir, elegí un plan:
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-500/50 bg-emerald-950/20 p-4">
                  <p className="text-emerald-200 font-semibold">Plus (-60%)</p>
                  <p className="text-emerald-100 text-sm mt-1">
                    ARS 6.900/mes • 50 tarjetas/mes • proyectos ilimitados
                  </p>
                  <a
                    href={MP_PLUS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-emerald mt-3 w-full"
                  >
                    Pasar al Plan Plus
                  </a>
                </div>

                <div className="rounded-2xl border border-violet-500/50 bg-violet-950/20 p-4">
                  <p className="text-violet-200 font-semibold">Pro (-40%)</p>
                  <p className="text-violet-100 text-sm mt-1">
                    ARS 16.800/mes • ilimitado • uso comercial
                  </p>
                  <a
                    href={MP_PRO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-violet mt-3 w-full"
                  >
                    Pasar al Plan Pro
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* RESULTADO */}
          {result && (
            <div className="mt-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Resultado
                  </p>
                  <h2 className="text-xl font-semibold text-white">
                    Tu SkillSynth ya está lista
                  </h2>
                  <p className="muted text-sm mt-1">
                    Guardala copiando el JSON o generá otra variante ajustando inputs.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="btn-ghost" onClick={copyJSON}>
                    {copied ? "✅ Copiado" : "Copiar JSON"}
                  </button>
                  <Link href="/" className="btn-ghost">
                    Volver
                  </Link>
                </div>
              </div>

              <SkillCard data={result} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
