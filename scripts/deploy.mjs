// Builds the site and publishes ./dist to the `gh-pages` branch of `origin`.
// Usage: npm run deploy
import { execSync } from "node:child_process";
import { writeFileSync, rmSync, existsSync } from "node:fs";

const run = (cmd, opts = {}) => execSync(cmd, { stdio: "inherit", ...opts });
const out = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const remote = out("git remote get-url origin");

run("npm run build");
writeFileSync("dist/.nojekyll", "");

if (existsSync("dist/.git")) rmSync("dist/.git", { recursive: true, force: true });
run("git init -b gh-pages", { cwd: "dist" });
run("git add -A", { cwd: "dist" });
run('git commit -m "Deploy portfolio"', { cwd: "dist" });
run(`git push --force "${remote}" gh-pages`, { cwd: "dist" });
rmSync("dist/.git", { recursive: true, force: true });

console.log("\nPublished to the gh-pages branch.");
