"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/lib/data";

export default function Projects() {
  const t = useTranslations("projects");
  const tProjects = useTranslations("projectsData");

  return (
    <section id="projects" className="scroll-mt-20 border-t border-zinc-200 px-4 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {t("title")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.key}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <h3 className="mb-2 font-semibold text-zinc-900 transition group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                {tProjects(`${project.key}.title`)}
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                {tProjects(`${project.key}.description`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
