import { getTranslations } from "next-intl/server";
import { resumeExperiences } from "@/lib/resume";

export default async function ResumeExperience() {
  const t = await getTranslations("resume");

  return (
    <section id="experience" className="resume-in mb-12 scroll-mt-28" style={{ animationDelay: "260ms" }}>
      <h2 className="font-mono text-xs tracking-[0.22em] text-[var(--resume-accent)]">
        {t("sections.experience")}
      </h2>
      <div className="mt-5 space-y-8">
        {resumeExperiences.map((item) => {
          const bullets =
            "blocks" in item
              ? null
              : (t.raw(`experience.${item.key}.bullets`) as string[]);

          return (
            <article key={item.key} className="border-l border-[var(--resume-line)] pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-medium text-white">
                  {t(`experience.${item.key}.company`)}
                </h3>
                <p className="font-mono text-xs text-[var(--resume-dim)]">
                  {t(`experience.${item.key}.period`)}
                </p>
              </div>
              <p className="mt-1 text-sm text-[var(--resume-accent)]">
                {t(`experience.${item.key}.role`)}
              </p>
              {"blocks" in item ? (
                <div className="mt-4 space-y-4">
                  {item.blocks.map((block) => {
                    const blockBullets = t.raw(
                      `experience.${item.key}.blocks.${block}.bullets`,
                    ) as string[];
                    return (
                      <div key={block}>
                        <h4 className="font-mono text-xs text-[var(--resume-muted)]">
                          {t(`experience.${item.key}.blocks.${block}.title`)}
                        </h4>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-6 text-[var(--resume-fg)]">
                          {blockBullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-[var(--resume-fg)]">
                  {bullets?.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
