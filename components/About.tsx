"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-20 border-t border-zinc-200 px-4 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {t("title")}
        </h2>
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <p className="leading-relaxed">
            {t("bio")}
          </p>
        </div>
      </div>
    </section>
  );
}
