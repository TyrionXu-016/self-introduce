"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { resumeSections } from "@/lib/resume";

export default function ResumeRail() {
  const t = useTranslations("resume.sections");
  const [active, setActive] = useState<(typeof resumeSections)[number]["id"]>(
    "summary",
  );

  useEffect(() => {
    const nodes = resumeSections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id as (typeof resumeSections)[number]["id"]);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        aria-label="Resume sections"
        className="hidden lg:sticky lg:top-20 lg:block lg:self-start"
      >
        <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-[var(--resume-accent)]">
          NAV
        </p>
        <ul className="space-y-1 border-l border-[var(--resume-line)]">
          {resumeSections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block border-l-2 px-3 py-1.5 font-mono text-xs transition ${
                    isActive
                      ? "-ml-px border-[var(--resume-accent)] bg-[var(--resume-accent-deep)] text-[var(--resume-fg)]"
                      : "-ml-px border-transparent text-[var(--resume-muted)] hover:text-[var(--resume-fg)]"
                  }`}
                >
                  {t(section.key)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav
        aria-label="Resume sections"
        className="sticky top-14 z-30 -mx-4 mb-8 overflow-x-auto border-b border-[var(--resume-line)] bg-[var(--resume-bg)] px-4 py-2 lg:hidden"
      >
        <ul className="flex min-w-max gap-2">
          {resumeSections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`inline-block rounded-full px-3 py-1 font-mono text-xs transition ${
                    isActive
                      ? "bg-[var(--resume-accent-deep)] text-[var(--resume-fg)]"
                      : "text-[var(--resume-muted)] hover:text-[var(--resume-fg)]"
                  }`}
                >
                  {t(section.key)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
