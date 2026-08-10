import { getTranslations } from "next-intl/server";
import { resumeCerts } from "@/lib/resume";

export default async function ResumeCerts() {
  const t = await getTranslations("resume");

  return (
    <section id="certs" className="resume-in mb-4 scroll-mt-28" style={{ animationDelay: "500ms" }}>
      <h2 className="font-mono text-xs tracking-[0.22em] text-[var(--resume-accent)]">
        {t("sections.certs")}
      </h2>
      <ul className="mt-5">
        {resumeCerts.map((key) => (
          <li
            key={key}
            className="border border-[var(--resume-line)] bg-[var(--resume-panel)] px-4 py-3 text-sm text-[var(--resume-fg)]"
          >
            {t(`certs.${key}.name`)}
          </li>
        ))}
      </ul>
    </section>
  );
}
