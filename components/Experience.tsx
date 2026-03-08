"use client";

import { useTranslations } from "next-intl";
import { experiences } from "@/lib/data";

export default function Experience() {
  const t = useTranslations("experience");
  const tExps = useTranslations("experiencesData");

  return (
    <section id="experience" className="scroll-mt-20 border-t border-zinc-200 px-4 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {t("title")}
        </h2>
        <div className="relative space-y-8 pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
          {experiences.map((exp) => (
            <div key={exp.key} className="relative">
              <div className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-500" />
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {tExps(`${exp.key}.role`)} @ {tExps(`${exp.key}.company`)}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {tExps(`${exp.key}.period`)}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {tExps(`${exp.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
