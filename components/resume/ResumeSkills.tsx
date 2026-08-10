import { getTranslations } from "next-intl/server";
import { resumeSkillGroups } from "@/lib/resume";

export default async function ResumeSkills() {
  const t = await getTranslations("resume");

  return (
    <section id="skills" className="resume-in mb-12 scroll-mt-28" style={{ animationDelay: "200ms" }}>
      <h2 className="font-mono text-xs tracking-[0.22em] text-[var(--resume-accent)]">
        {t("sections.skills")}
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {resumeSkillGroups.map((group) => {
          const items = t.raw(`skills.groups.${group}.items`) as string[];
          return (
            <article
              key={group}
              className="border border-[var(--resume-line)] bg-[var(--resume-panel)] p-4"
            >
              <h3 className="text-sm font-medium text-white">
                {t(`skills.groups.${group}.title`)}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--resume-muted)]">
                {items.map((item) => (
                  <li key={item} className="border-l border-[var(--resume-line)] pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
