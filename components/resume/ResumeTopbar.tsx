"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function ResumeTopbar() {
  const t = useTranslations("resume");

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--resume-line)] bg-[color-mix(in_srgb,var(--resume-bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-xs tracking-wide text-[var(--resume-accent)] transition hover:text-[var(--resume-fg)] sm:text-sm"
        >
          ← {t("backHome")}
        </Link>
        <LanguageSwitcher variant="dossier" />
      </div>
    </header>
  );
}
