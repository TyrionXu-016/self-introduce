import { getTranslations } from "next-intl/server";
import { resumeProjects } from "@/lib/resume";

export default async function ResumeProjects() {
  const t = await getTranslations("resume");

  return (
    <section id="projects" className="resume-in mb-12 scroll-mt-28" style={{ animationDelay: "320ms" }}>
      <h2 className="font-mono text-xs tracking-[0.22em] text-[var(--resume-accent)]">
        {t("sections.projects")}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {resumeProjects.map((key) => (
          <article
            key={key}
            className="border border-[var(--resume-line)] bg-[var(--resume-panel)] p-4"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-white">
                {t(`projects.${key}.name`)}
              </h3>
              <p className="font-mono text-[10px] text-[var(--resume-dim)]">
                {t(`projects.${key}.period`)}
              </p>
            </div>
            <p className="mt-2 font-mono text-xs text-[var(--resume-accent)]">
              {t(`projects.${key}.role`)}
            </p>
            <p className="mt-2 text-sm text-[var(--resume-muted)]">
              {t(`projects.${key}.result`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
