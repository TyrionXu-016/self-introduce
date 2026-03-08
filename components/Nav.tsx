"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const t = useTranslations("nav");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {t("brand")}
        </a>
        <div className="flex items-center gap-4">
          <ul className="flex flex-wrap justify-end gap-4 text-sm font-medium sm:gap-6">
            <li>
              <a
                href="#about"
                className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {t("skills")}
              </a>
            </li>
            {/* <li>
              <a
                href="#projects"
                className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {t("projects")}
              </a>
            </li> */}
            <li>
              <a
                href="#experience"
                className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {t("experience")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {t("contact")}
              </a>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
