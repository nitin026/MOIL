import fs from "node:fs";
import path from "node:path";
import MoilApp from "./MoilApp";

// The original single-file HTML had two <script> blocks: one defining a
// `DATA` constant (the packed dataset) and one containing all the
// decision-engine / rendering logic that referenced `DATA` as a bare
// global. Both are ported in verbatim as-is:
//  - the dataset lives in embedded/moil-data.json and is imported as a
//    normal JSON module inside the client component (see MoilApp.js)
//  - the body markup and the app logic are read here, at build time, as
//    raw text so nothing about their original source has to be
//    re-escaped or re-parsed as JS/JSX.
const embeddedDir = path.join(process.cwd(), "app", "embedded");
const bodyMarkup = fs.readFileSync(
  path.join(embeddedDir, "body-markup.txt"),
  "utf8",
);
const appLogicSource = fs.readFileSync(
  path.join(embeddedDir, "app-logic.txt"),
  "utf8",
);

export default function Page() {
  return (
    <MoilApp bodyMarkup={bodyMarkup} appLogicSource={appLogicSource} />
  );
}
