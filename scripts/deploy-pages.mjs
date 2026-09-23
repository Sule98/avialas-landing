// Compila el sitio como export estático y lo publica en la rama `gh-pages`.
// Uso: npm run deploy:pages   (requiere git con permisos de push al remoto `origin`)
import { execSync } from "node:child_process";
import { cpSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: "inherit" });
const read = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const remote = read("git remote get-url origin");

run("npm run build:pages");

const tmp = mkdtempSync(join(tmpdir(), "avialas-pages-"));
try {
  cpSync("out", tmp, { recursive: true });
  // Evita que Jekyll ignore la carpeta _next
  writeFileSync(join(tmp, ".nojekyll"), "");

  run("git init -b gh-pages", tmp);
  run("git add -A", tmp);
  run('git commit -m "deploy: publicar vista previa estatica"', tmp);
  run(`git push --force "${remote}" gh-pages`, tmp);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log("\nPublicado en la rama gh-pages.");
