// Fix paths for github pages deployment -- it requires "./" instead of just "/" for referencing scripts/links
import { readFileSync, writeFileSync } from "fs";

const filePath = "dist/index.html";
let html = readFileSync(filePath, "utf-8");
html = html.replaceAll(`="/`, `="./`);
writeFileSync(filePath, html);
