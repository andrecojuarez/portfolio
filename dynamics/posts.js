// Lista central de publicaciones. Para añadir una nueva entrada:
// 1) Duplica /portfolio/writeups/_template.html (o /portfolio/tools/_template.html)
// 2) Renómbralo (ej: writeups/htb-mi-maquina.html) y edita el contenido.
// 3) Agrega un objeto aquí con la info y la ruta `url`.
window.POSTS = [
  {
    kind: "writeup",
    title: "HTB — Sample Machine",
    date: "2025-10-12",
    summary: "Recon completo, enumeración web y escalada de privilegios vía cron mal configurado.",
    tags: ["HTB", "Linux", "Web"],
    url: "static/templates/writeupex.html",
  },
  {
    kind: "tool",
    title: "recon-runner",
    date: "2025-11-02",
    summary: "Script en Python que orquesta Nmap, Gobuster y Nuclei contra un target y genera un reporte Markdown.",
    tags: ["Python", "Recon", "Automation"],
    url: "static/templates/toolex.html",
  },
  {
    kind: "writeup",
    title: "HTB — Expressway",
    date: "2026-06-14",
    summary: "Recon completo, enumeración servicios UDP y escalada de privilegios vía sudo vuln version.",
    tags: ["HTB", "Linux", "UDP"],
    url: "static/writeups/expressway_htb.html",
  },
];
