import { getTranslations } from "next-intl/server";
import { resumeEducation } from "@/lib/resume";

export default async function ResumeEducation() {
  const t = await getTranslations("resume");

  return (
    <section id="education" className="resume-in mb-12 scroll-mt-28" style={{ animationDelay: "440ms" }}>
      <h2 className="font-mono text-xs tracking-[0.22em] text-[var(--resume-accent)]">
        {t("sections.education")}
      </h2>
      <ul className="mt-5 space-y-4">
        {resumeEducation.map((key) => (
          <li key={key} className="border border-[var(--resume-line)] bg-[var(--resume-panel)] p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-white">
                {t(`education.${key}.school`)}
              </h3>
              <p className="font-mono text-xs text-[var(--resume-dim)]">
                {t(`education.${key}.period`)}
              </p>
            </div>
            <p className="mt-1 text-sm text-[var(--resume-muted)]">
              {t(`education.${key}.degree`)} · {t(`education.${key}.major`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
