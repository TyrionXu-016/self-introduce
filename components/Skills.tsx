"use client";

import { useTranslations } from "next-intl";
import { skills } from "@/lib/data";

export default function Skills() {
  const t = useTranslations("skills");
  const tSkills = useTranslations("skillsData");

  return (
    <section id="skills" className="scroll-mt-20 border-t border-zinc-200 px-4 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {t("title")}
        </h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.key}>
              <div className="mb-2 flex justify-between">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {tSkills(skill.key)}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full bg-zinc-700 transition-all dark:bg-zinc-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
