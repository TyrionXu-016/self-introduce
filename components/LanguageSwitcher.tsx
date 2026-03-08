"use client";

import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-2 text-sm font-medium">
      <Link
        href={pathname}
        locale="zh"
        className={`rounded px-2 py-1 transition ${
          locale === "zh"
            ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
      >
        中文
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={`rounded px-2 py-1 transition ${
          locale === "en"
            ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100"
            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
