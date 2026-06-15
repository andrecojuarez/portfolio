import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Terminal,
  Shield,
  Code2,
  Mail,
  Phone,
  MapPin,
  
  ExternalLink,
  ChevronRight,
  Wrench,
  FileText,
  GraduationCap,
  Briefcase,
  Cpu,
  Network,
  Bug,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eduardo Juárez — Junior Penetration Tester (eJPT)" },
      {
        name: "description",
        content:
          "Portafolio de ciberseguridad de Eduardo Andreco Juárez Salgado — Junior Penetration Tester certificado eJPT. Pentesting web, reconocimiento, explotación y write-ups.",
      },
      { property: "og:title", content: "Eduardo Juárez — Junior Pentester" },
      {
        property: "og:description",
        content:
          "Pentesting web, reconocimiento, explotación, write-ups y herramientas.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#tools", label: "tools" },
  { href: "#writeups", label: "writeups" },
  { href: "#contact", label: "contact" },
];

const SKILLS: { title: string; icon: React.ComponentType<{ className?: string }>; items: string[] }[] = [
  { title: "Seguridad Web", icon: Bug, items: ["XSS", "SQLi", "SSRF", "SSTI", "CSRF"] },
  {
    title: "Pentesting",
    icon: Shield,
    items: ["Reconocimiento", "Enumeración", "Explotación", "Post-explotación"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    items: ["Burp Suite", "Nmap", "Metasploit", "CrackMapExec", "Gobuster"],
  },
  {
    title: "Desarrollo",
    icon: Code2,
    items: ["Laravel", "PHP", "MySQL", "APIs REST"],
  },
  { title: "Scripting", icon: Terminal, items: ["Python", "Bash"] },
  { title: "Redes & SO", icon: Network, items: ["TCP/IP", "HTTP", "DNS", "Linux", "Windows"] },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundFx />
      <Nav />
      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Tools />
        <Writeups />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function BackgroundFx() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "var(--gradient-hero)" }}
    />
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2 text-sm font-bold text-neon text-glow">
          <span className="text-cyber">~/</span>eduardo
          <span className="caret" />
        </a>
        <nav className="hidden gap-1 text-xs md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded px-3 py-1.5 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              <span className="text-neon">$</span> {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md border border-neon/60 bg-neon/10 px-3 py-1.5 text-xs font-semibold text-neon transition hover:bg-neon/20 hover:glow md:inline-flex"
        >
          ./hire_me.sh
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="terminal-card overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-border/60 bg-secondary/40 px-4 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-warn/80" />
            <span className="h-3 w-3 rounded-full bg-neon/80" />
          </div>
          <span>eduardo@kali: ~/portfolio</span>
          <span className="text-cyber">zsh</span>
        </div>

        <div className="space-y-6 p-6 md:p-10">
          <div className="text-xs text-muted-foreground">
            <span className="text-neon">$</span> whoami
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
            Eduardo Andreco{" "}
            <span className="text-neon text-glow">Juárez Salgado</span>
          </h1>

          <div className="text-xs text-muted-foreground">
            <span className="text-neon">$</span> cat role.txt
          </div>
          <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
            <span className="text-cyber text-glow-cyber">Junior Penetration Tester</span>{" "}
            certificado <span className="text-neon">eJPT</span>. Pentesting web,
            reconocimiento, explotación y automatización con Burp Suite, Nmap,
            Metasploit y Python.
            <span className="caret" />
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#writeups"
              className="inline-flex items-center gap-2 rounded-md bg-neon px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:glow"
            >
              <FileText className="h-4 w-4" /> ver write-ups
            </a>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 rounded-md border border-cyber/60 bg-cyber/10 px-4 py-2 text-sm font-semibold text-cyber transition hover:bg-cyber/20 hover:glow-cyber"
            >
              <Wrench className="h-4 w-4" /> herramientas
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> contacto
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-neon" /> CDMX, México
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-neon" /> +52 56 1505 8421
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-neon" /> eduardoandreco2004@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-cyber" /> eJPT ID: 160743036
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeader({
  num,
  cmd,
  title,
}: {
  num: string;
  cmd: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-border/60 pb-3">
      <div>
        <div className="text-xs text-muted-foreground">
          <span className="text-cyber">[{num}]</span>{" "}
          <span className="text-neon">$</span> {cmd}
        </div>
        <h2 className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
      </div>
      <ChevronRight className="h-5 w-5 text-neon" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 pt-24">
      <SectionHeader num="01" cmd="cat about.md" title="// sobre mí" />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="terminal-card p-6 md:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            Junior Penetration Tester con certificación{" "}
            <span className="text-neon">eJPT</span> y experiencia en desarrollo web
            backend y seguridad ofensiva. Conocimiento práctico en{" "}
            <span className="text-foreground">pentesting web</span>, reconocimiento,
            explotación y automatización. Desarrollo aplicaciones web con Laravel,
            con manejo de autenticación, bases de datos y arquitectura
            cliente-servidor, con foco en identificar y entender vulnerabilidades.
          </p>
        </div>
        <div className="terminal-card p-6">
          <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            stats.json
          </div>
          <ul className="space-y-2 text-sm">
            <Stat k="role" v="Jr. Pentester" />
            <Stat k="cert" v="eJPT" />
            <Stat k="focus" v="Web AppSec" />
            <Stat k="lang" v="ES / EN B2+" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-center justify-between border-b border-border/40 pb-1.5">
      <span className="text-muted-foreground">"{k}":</span>
      <span className="text-neon">"{v}"</span>
    </li>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 pt-24">
      <SectionHeader num="02" cmd="ls -la skills/" title="// skills" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="terminal-card group p-5 transition hover:border-neon/60 hover:glow"
          >
            <div className="mb-3 flex items-center gap-2">
              <s.icon className="h-5 w-5 text-neon" />
              <h3 className="font-semibold text-foreground">{s.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="rounded border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground transition group-hover:text-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pt-24">
      <SectionHeader num="03" cmd="git log --experience" title="// experiencia & educación" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="terminal-card p-6">
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-cyber">
            <Briefcase className="h-4 w-4" /> trabajo
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Desarrollador Web
          </h3>
          <p className="text-sm text-neon">
            Dirección General de Estudios Técnicos Especializados — UNAM
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Desarrollo y mantenimiento de aplicaciones web con Laravel, PHP y MySQL.",
              "Bases de datos relacionales y lógica backend.",
              "Sistemas de autenticación, sesiones y control de acceso.",
              "Integración frontend ↔ backend / APIs.",
              "Validaciones de entrada y prácticas de desarrollo seguro.",
              "Git / GitHub para control de versiones.",
              "Documentación técnica de procesos y funcionalidades.",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-neon">▸</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="terminal-card p-6">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-cyber">
              <GraduationCap className="h-4 w-4" /> educación
            </div>
            <h3 className="text-lg font-semibold text-foreground">UNAM</h3>
            <p className="text-sm text-muted-foreground">
              Lic. en Matemáticas · CDMX, México
            </p>
            <div className="mt-3 border-t border-border/50 pt-3">
              <h4 className="font-semibold text-foreground">UNAM</h4>
              <p className="text-sm text-muted-foreground">
                Estudio Técnico Especializado en Computación
              </p>
            </div>
          </div>

          <div className="terminal-card p-6">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-cyber">
              <Shield className="h-4 w-4" /> certificación
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              eLearnSecurity Junior Penetration Tester{" "}
              <span className="text-neon">(eJPT)</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              INE / INTERNETWORK EXPERT
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              ID: <span className="text-neon">160743036</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmptyState({
  icon: Icon,
  title,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  hint: string;
}) {
  return (
    <div className="terminal-card flex flex-col items-center justify-center gap-3 p-10 text-center">
      <Icon className="h-10 w-10 text-neon" />
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="max-w-md text-sm text-muted-foreground">{hint}</p>
      <div className="mt-2 rounded border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
        <span className="text-neon">$</span> waiting for upload...
        <span className="caret" />
      </div>
    </div>
  );
}

function Tools() {
  return (
    <section id="tools" className="scroll-mt-20 pt-24">
      <SectionHeader num="04" cmd="ls tools/" title="// herramientas" />
      <EmptyState
        icon={Wrench}
        title="Próximamente: herramientas personalizadas"
        hint="Aquí se publicarán scripts y herramientas propias (Python / Bash). Sube los archivos y se mostrarán aquí con descripción, repo y comando de uso."
      />
    </section>
  );
}

function Writeups() {
  return (
    <section id="writeups" className="scroll-mt-20 pt-24">
      <SectionHeader num="05" cmd="ls writeups/" title="// write-ups" />
      <EmptyState
        icon={FileText}
        title="Próximamente: write-ups de máquinas y CTFs"
        hint="HTB, THM, retos y máquinas vulnerables. Comparte los archivos / enlaces y los integramos como tarjetas con dificultad, tags y enlace completo."
      />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pt-24">
      <SectionHeader num="06" cmd="./contact.sh" title="// contacto" />
      <div className="terminal-card overflow-hidden">
        <div className="border-b border-border/60 bg-secondary/40 px-4 py-2 text-xs text-muted-foreground">
          contact@eduardo:~$ establish_connection --secure
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-3">
          <ContactCard
            icon={Mail}
            label="email"
            value="eduardoandreco2004@gmail.com"
            href="mailto:eduardoandreco2004@gmail.com"
          />
          <ContactCard
            icon={Phone}
            label="phone"
            value="+52 56 1505 8421"
            href="tel:+525615058421"
          />
          <ContactCard icon={MapPin} label="location" value="CDMX, México" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-start gap-3 rounded-md border border-border bg-secondary/30 p-4 transition hover:border-neon/60 hover:glow">
      <Icon className="mt-0.5 h-5 w-5 text-neon" />
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-sm text-foreground group-hover:text-neon">
          {value}
        </div>
      </div>
      {href && <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />}
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
      <p>
        <span className="text-neon">$</span> echo "© {new Date().getFullYear()}{" "}
        Eduardo Andreco Juárez Salgado — built with{" "}
        <Cpu className="inline h-3 w-3 text-neon" /> & <Lock className="inline h-3 w-3 text-cyber" />"
      </p>
    </footer>
  );
}
