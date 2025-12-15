export default function SkillCard({ data }) {
  if (!data) return null;

  const {
    skill_name,
    description_short,
    why_valuable,
    niches,
    salary_range,
    tasks,
    tools_needed,
    day_30_plan,
    brand_names,
  } = data;

  const latam = salary_range?.latam_usd || "A estimar";
  const usa = salary_range?.usa_usd || "A estimar";

  return (
    <section className="card mt-8 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="pill border-sky-500/30 bg-sky-950/20 text-sky-200">
              SkillSynth Card
            </span>
            <span className="pill">30 días</span>
            <span className="pill">Monetizable</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {skill_name}
          </h2>
          <p className="text-slate-300 mt-2 leading-relaxed">
            {description_short}
          </p>
        </div>

        {brand_names && brand_names.length > 0 && (
          <div className="lg:w-[320px] rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
            <p className="uppercase tracking-widest text-[11px] text-slate-500 mb-2">
              Nombres de marca sugeridos
            </p>
            <div className="flex flex-wrap gap-2">
              {brand_names.slice(0, 6).map((name, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-xs text-slate-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Core grid */}
      <div className="grid lg:grid-cols-3 gap-6 mt-7 text-sm">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
          <h3 className="font-semibold text-slate-100 mb-2">¿Por qué es valiosa?</h3>
          <p className="text-slate-400 whitespace-pre-line leading-relaxed">
            {why_valuable}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
          <h3 className="font-semibold text-slate-100 mb-2">Nichos donde encaja</h3>
          <div className="flex flex-wrap gap-2">
            {niches?.slice(0, 10).map((niche, idx) => (
              <span key={idx} className="pill">
                {niche}
              </span>
            ))}
          </div>
          {!niches?.length && (
            <p className="text-slate-500 text-xs">Aún sin nichos sugeridos.</p>
          )}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
          <h3 className="font-semibold text-slate-100 mb-2">Rango de ingresos</h3>
          <div className="space-y-2">
            <p className="text-slate-300">
              <span className="text-slate-500">LATAM:</span>{" "}
              <span className="font-semibold text-white">{latam}</span>{" "}
              <span className="text-slate-500">USD/mes</span>
            </p>
            <p className="text-slate-300">
              <span className="text-slate-500">USA/Global:</span>{" "}
              <span className="font-semibold text-white">{usa}</span>{" "}
              <span className="text-slate-500">USD/mes</span>
            </p>
          </div>
          <p className="help mt-3">
            Los rangos pueden variar por seniority, portfolio y país.
          </p>
        </div>
      </div>

      {/* Collapsables */}
      <div className="mt-6 grid lg:grid-cols-2 gap-4">
        <details className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 open:bg-slate-950/55">
          <summary className="cursor-pointer select-none font-semibold text-slate-100">
            Tareas que podrías hacer
            <span className="muted font-normal text-xs ml-2">
              (abrir/cerrar)
            </span>
          </summary>
          <ul className="mt-3 text-slate-400 space-y-1 text-sm">
            {tasks?.map((task, idx) => (
              <li key={idx}>• {task}</li>
            ))}
          </ul>
        </details>

        <details className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 open:bg-slate-950/55">
          <summary className="cursor-pointer select-none font-semibold text-slate-100">
            Herramientas sugeridas
            <span className="muted font-normal text-xs ml-2">
              (abrir/cerrar)
            </span>
          </summary>
          <ul className="mt-3 text-slate-400 space-y-1 text-sm">
            {tools_needed?.map((tool, idx) => (
              <li key={idx}>• {tool}</li>
            ))}
          </ul>
        </details>
      </div>

      <details className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-4 open:bg-slate-950/55">
        <summary className="cursor-pointer select-none font-semibold text-slate-100">
          Plan de 30 días
          <span className="muted font-normal text-xs ml-2">(abrir/cerrar)</span>
        </summary>

        <div className="mt-4 grid md:grid-cols-4 gap-3 text-xs md:text-sm">
          {day_30_plan?.map((week, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3"
            >
              <p className="text-sky-300 font-semibold mb-1">
                Semana {week.week}
              </p>
              <p className="text-slate-200 mb-2">{week.focus}</p>
              <ul className="text-slate-400 space-y-1">
                {week.tasks?.map((t, tIdx) => (
                  <li key={tIdx}>• {t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}

