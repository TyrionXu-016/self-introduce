import { setRequestLocale } from "next-intl/server";
import ResumeAwards from "@/components/resume/ResumeAwards";
import ResumeCerts from "@/components/resume/ResumeCerts";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeHero from "@/components/resume/ResumeHero";
import ResumeMetrics from "@/components/resume/ResumeMetrics";
import ResumeProjects from "@/components/resume/ResumeProjects";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeSummary from "@/components/resume/ResumeSummary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <ResumeHero />
      <ResumeMetrics />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeAwards />
      <ResumeEducation />
      <ResumeCerts />
    </main>
  );
}
