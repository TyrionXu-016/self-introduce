import ResumeRail from "./ResumeRail";
import ResumeTopbar from "./ResumeTopbar";

export default function ResumeShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="resume-shell">
      <ResumeTopbar />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[180px_minmax(0,1fr)] lg:py-10">
        <ResumeRail />
        <div>{children}</div>
      </div>
    </div>
  );
}
