import { getTranslations } from "next-intl/server";
import { resumeMetrics } from "@/lib/resume";

export default async function ResumeMetrics() {
  const t = await getTranslations("resume.metrics");

  return (
    <section className="resume-in mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: "80ms" }}>
      {resumeMetrics.map((metric) => (
        <article
          key={metric.key}
          className="border border-[var(--resume-line)] bg-[var(--resume-panel)] px-3 py-4"
        >
          <p className="font-mono text-2xl text-[var(--resume-accent)]">{metric.value}</p>
          <p className="mt-1 text-sm text-[var(--resume-fg)]">{t(`${metric.key}.label`)}</p>
          <p className="mt-1 font-mono text-[10px] text-[var(--resume-dim)]">
            {t(`${metric.key}.hint`)}
          </p>
        </article>
      ))}
    </section>
  );
}
