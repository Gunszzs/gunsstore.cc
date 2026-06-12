import fs from "fs";
import path from "path";

const root = "C:/Users/BO7ki/Desktop/Insanesec Website";
const set = new Set();

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith("_")) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith(".html")) {
      const t = fs.readFileSync(p, "utf8");
      const re = /class="([^"]*)"/g;
      let m;
      while ((m = re.exec(t))) {
        m[1]
          .split(/\s+/)
          .filter(Boolean)
          .forEach((c) => set.add(c));
      }
    }
  }
}

walk(root);
const list = [...set].sort();
fs.writeFileSync(path.join(root, "_all-classes.txt"), list.join("\n"), "utf8");
console.log("classes", list.length);
