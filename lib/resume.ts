export const resumeEmail = "tyrion0016@gmail.com";

export const resumeSections = [
  { id: "summary", key: "summary" },
  { id: "skills", key: "skills" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "awards", key: "awards" },
  { id: "education", key: "education" },
  { id: "certs", key: "certs" },
] as const;

export const resumeMetrics = [
  { key: "years", value: "6+" },
  { key: "qps", value: "300%+" },
  { key: "latency", value: "60%" },
  { key: "uptime", value: "99.9%" },
] as const;

export const resumeSkillGroups = [
  "backend",
  "architecture",
  "data",
  "engineering",
  "business",
] as const;

export const resumeExperiences = [
  {
    key: "web3",
    blocks: ["business", "stability", "ai"] as const,
  },
  { key: "sangfor" },
  { key: "payton" },
  { key: "perfect" },
] as const;

export const resumeProjects = [
  "fundlink",
  "aiperception",
  "pcas",
  "pqc",
] as const;

export const resumeAwards = ["underwater", "chinaRobot"] as const;

export const resumeEducation = ["fudan", "dlnu"] as const;

export const resumeCerts = ["cet4"] as const;
