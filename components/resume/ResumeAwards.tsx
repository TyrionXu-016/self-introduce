import { getTranslations } from "next-intl/server";
import { resumeAwards } from "@/lib/resume";

export default async function ResumeAwards() {
  const t = await getTranslations("resume");

  return (
    <section id="awards" className="resume-in mb-12 scroll-mt-28" style={{ animationDelay: "380ms" }}>
      <h2 className="font-mono text-xs tracking-[0.22em] text-[var(--resume-accent)]">
        {t("sections.awards")}
      </h2>
      <ul className="mt-5 space-y-4">
        {resumeAwards.map((key) => (
          <li key={key} className="border-l border-[var(--resume-line)] pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-medium text-white">
                {t(`awards.${key}.name`)}
              </h3>
              <p className="font-mono text-xs text-[var(--resume-dim)]">
                {t(`awards.${key}.period`)}
              </p>
            </div>
            <p className="mt-1 text-sm text-[var(--resume-muted)]">
              {t(`awards.${key}.result`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
