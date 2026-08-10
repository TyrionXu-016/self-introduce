import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const zh = JSON.parse(readFileSync(join(root, "messages/zh.json"), "utf8"));
const en = JSON.parse(readFileSync(join(root, "messages/en.json"), "utf8"));

function leafKeys(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      typeof item === "object" && item !== null
        ? leafKeys(item, `${prefix}${index}.`)
        : [`${prefix}${index}`],
    );
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) =>
      leafKeys(child, `${prefix}${key}.`),
    );
  }
  return [prefix.slice(0, -1)];
}

const errors = [];
if (!zh.resume) errors.push("missing zh.resume");
if (!en.resume) errors.push("missing en.resume");
if (!zh.nav?.resume) errors.push("missing zh.nav.resume");
if (!en.nav?.resume) errors.push("missing en.nav.resume");
if (!zh.hero?.fullResume) errors.push("missing zh.hero.fullResume");
if (!en.hero?.fullResume) errors.push("missing en.hero.fullResume");

if (zh.resume && en.resume) {
  const zhKeys = leafKeys(zh.resume).sort();
  const enKeys = leafKeys(en.resume).sort();
  const missingEn = zhKeys.filter((key) => !enKeys.includes(key));
  const missingZh = enKeys.filter((key) => !zhKeys.includes(key));
  if (missingEn.length) errors.push(`en missing: ${missingEn.join(", ")}`);
  if (missingZh.length) errors.push(`zh missing: ${missingZh.join(", ")}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`ok ${leafKeys(zh.resume).length} resume keys`);
