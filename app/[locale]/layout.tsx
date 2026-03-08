import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metadata = {
    zh: {
      title: "徐阳 | 全栈工程师",
      description: "复旦大学硕士在读，多年全栈开发经验，熟悉微服务架构，精通 Vibe Coding",
    },
    en: {
      title: "Tyrion Xu | Full Stack Engineer",
      description: "Fudan University master's candidate, years of full-stack experience, microservices architecture, proficient in Vibe Coding",
    },
  };
  const m = metadata[locale as keyof typeof metadata] ?? metadata.zh;
  return {
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.description },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
