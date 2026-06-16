// Lista central de publicaciones. Para añadir una nueva entrada:
// 1) Duplica /portfolio/writeups/_template.html (o /portfolio/tools/_template.html)
// 2) Renómbralo (ej: writeups/htb-mi-maquina.html) y edita el contenido.
// 3) Agrega un objeto aquí con la info y la ruta `url`.
window.POSTS = [
  {
    kind: "writeup",
    title: "HTB — Expressway",
    date: "2026-06-14",
    summary: "Recon completo, enumeración servicios UDP y escalada de privilegios vía sudo vuln version.",
    tags: ["HTB", "Linux", "UDP"],
    url: "static/writeups/expressway_htb.html",
  },
  {
    kind: "writeup",
    title: "HTB — Checkpoint",
    date: "2026-06-17",
    summary: "Recon completo, enumeración active directory LDAP y SMB y escalada de privilegios CVE.",
    tags: ["HTB", "Windows", "AD"],
    url: "static/writeups/checkpoint_htb.html",
  },
  {
    kind: "tool",
    title: "Evil VSIX extension",
    date: "2026-06-17",
    summary: "Extension maliciosa para VSCode 1.118.0 que genera una reverse shell",
    tags: ["Windows", "Reverse Shell", "Extension"],
    url: "static/tools/evilvsix.html",
  },
];
