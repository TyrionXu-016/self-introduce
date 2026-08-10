import { getTranslations } from "next-intl/server";
import { resumeEmail } from "@/lib/resume";

export default async function ResumeHero() {
  const t = await getTranslations("resume");

  return (
    <section className="resume-in pb-8">
      <p className="font-mono text-[10px] tracking-[0.28em] text-[var(--resume-accent)]">
        SYS / RESUME · TYRION
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        TYRION
      </h1>
      <p className="mt-3 text-lg text-[var(--resume-fg)]">{t("role")}</p>
      <p className="mt-1 font-mono text-xs text-[var(--resume-muted)]">{t("tagline")}</p>
      <a
        href={`mailto:${resumeEmail}`}
        className="mt-5 inline-flex font-mono text-sm text-[var(--resume-accent)] hover:underline"
      >
        {t("emailLabel")}: {resumeEmail}
      </a>
    </section>
  );
}
