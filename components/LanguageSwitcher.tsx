"use client";

import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

type Props = {
  variant?: "default" | "dossier";
};

export default function LanguageSwitcher({ variant = "default" }: Props) {
  const locale = useLocale();
  const pathname = usePathname();

  const active =
    variant === "dossier"
      ? "bg-[var(--resume-accent-deep)] text-[var(--resume-fg)]"
      : "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100";
  const idle =
    variant === "dossier"
      ? "text-[var(--resume-dim)] hover:text-[var(--resume-fg)]"
      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100";

  return (
    <div className="flex gap-2 text-sm font-medium">
      <Link
        href={pathname}
        locale="zh"
        className={`rounded px-2 py-1 transition ${locale === "zh" ? active : idle}`}
      >
        中文
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={`rounded px-2 py-1 transition ${locale === "en" ? active : idle}`}
      >
        EN
      </Link>
    </div>
  );
}
