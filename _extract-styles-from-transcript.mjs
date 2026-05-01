import fs from "fs";
import readline from "readline";

const transcript =
  "C:\\Users\\BO7ki\\.cursor\\projects\\c-Users-BO7ki-Desktop-Insanesec-Website\\agent-transcripts\\84e2015c-6692-40b0-884a-9183bf24c2ee\\84e2015c-6692-40b0-884a-9183bf24c2ee.jsonl";

const markers = [
  "Insanesec Website\\\\styles.css",
  "Insanesec Website\\styles.css",
  "Insanesec%20Website/styles.css",
];

function walkToolInputs(obj, out) {
  if (!obj) return;
  if (Array.isArray(obj)) {
    for (const x of obj) walkToolInputs(x, out);
    return;
  }
  if (typeof obj === "object") {
    if (obj.type === "tool_use" && obj.name === "ApplyPatch" && typeof obj.input === "string") {
      out.push(obj.input);
    }
    for (const v of Object.values(obj)) walkToolInputs(v, out);
  }
}

const rl = readline.createInterface({
  input: fs.createReadStream(transcript, { encoding: "utf8" }),
  crlfDelay: Infinity,
});

let hits = 0;
for await (const line of rl) {
  if (!line.trim()) continue;
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    continue;
  }
  const inputs = [];
  walkToolInputs(msg, inputs);
  for (const input of inputs) {
    if (!markers.some((m) => input.includes(m))) continue;
    hits++;
    const outPath = `C:\\Users\\BO7ki\\Desktop\\Insanesec Website\\_transcript-styles-hit-${hits}.txt`;
    fs.writeFileSync(outPath, input, "utf8");
  }
}

console.log("hits", hits);
