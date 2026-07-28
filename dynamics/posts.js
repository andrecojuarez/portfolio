// Lista central de publicaciones. Para añadir una nueva entrada:
// 1) Duplica /portfolio/writeups/_template.html (o /portfolio/tools/_template.html)
// 2) Renómbralo (ej: writeups/htb-mi-maquina.html) y edita el contenido.
// 3) Agrega un objeto aquí con la info y la ruta `url`.
window.POSTS = [
  {
    kind: "writeup",
    title: "HTB — Expressway",
    date: "2026-06-14",
    summary: "Full reconnaissance, UDP service enumeration, and privilege escalation via a vulnerable sudo version.",
    tags: ["HTB", "Linux", "UDP"],
    url: "static/writeups/expressway_htb.html",
  },
  {
    kind: "writeup",
    title: "HTB — Checkpoint",
    date: "2026-06-17",
    summary: "Full reconnaissance, Active Directory enumeration (LDAP and SMB), and privilege escalation via CVE.",
    tags: ["HTB", "Windows", "AD"],
    url: "static/writeups/checkpoint_htb.html",
  },
  {
    kind: "tool",
    title: "Evil VSIX extension",
    date: "2026-06-17",
    summary: "Malicious extension for VSCode 1.118.0 that generates a reverse shell.",
    tags: ["Windows", "Reverse Shell", "Extension"],
    url: "static/tools/evilvsix.html",
  },
];
