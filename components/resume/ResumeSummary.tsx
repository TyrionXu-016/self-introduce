import { getTranslations } from "next-intl/server";

export default async function ResumeSummary() {
  const t = await getTranslations("resume");

  return (
    <section id="summary" className="resume-in mb-12 scroll-mt-28" style={{ animationDelay: "140ms" }}>
      <h2 className="font-mono text-xs tracking-[0.22em] text-[var(--resume-accent)]">
        {t("sections.summary")}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--resume-fg)] sm:text-base">
        {t("summary.body")}
      </p>
    </section>
  );
}
