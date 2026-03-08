"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { profile } from "@/lib/data";

export default function Hero() {
  const t = useTranslations("hero");
  const tProfile = useTranslations("profile");

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-block overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <Image
            src={profile.avatar}
            alt={tProfile("name")}
            width={160}
            height={160}
            className="h-40 w-40 object-cover"
            priority
            unoptimized
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          {tProfile("name")}
        </h1>
        <p className="mb-6 text-xl text-zinc-600 dark:text-zinc-400">
          {tProfile("title")}
        </p>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          {tProfile("bio")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#skills"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t("viewSkills")}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            {t("contactMe")}
          </a>
        </div>
      </div>
    </section>
  );
}
