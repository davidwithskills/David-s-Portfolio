import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Braces,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronUp,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Send,
  ServerCog,
  ShieldCheck,
  Terminal,
  TestTube2,
  X,
} from "lucide-react";

type ProjectCategory = "All" | "Web App" | "Game" | "Startup";

type Project = {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  demo?: string;
  github?: string;
  role?: string;
  technologies: string[];
  description: string;
  features: string[];
  visual: string;
};

const navItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

const skills = [
  {
    title: "Programming Languages",
    icon: Braces,
    items: [
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 84 },
      { name: "TypeScript", level: 78 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "C++", level: 68 },
    ],
  },
  {
    title: "Software Engineering",
    icon: ServerCog,
    items: [
      { name: "Object-Oriented Programming", level: 86 },
      { name: "Software Design", level: 80 },
      { name: "System Analysis", level: 76 },
      { name: "Testing & Debugging", level: 82 },
      { name: "Database Design", level: 74 },
      { name: "Version Control", level: 86 },
    ],
  },
  {
    title: "Tools",
    icon: Layers3,
    items: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 72 },
    ],
  },
];

const projects: Project[] = [
  {
    title: "SwiftShip",
    category: "Web App",
    demo: "https://davidwithskills.github.io/SwiftShip/",
    github: "https://github.com/davidwithskills/SwiftShip",
    technologies: ["HTML", "JavaScript"],
    description:
      "A logistics and delivery management web application designed to simplify package tracking and shipment coordination through an intuitive and responsive interface.",
    features: ["Shipment tracking", "Responsive design", "Interactive dashboard", "User-friendly interface"],
    visual: "logistics",
  },
  {
    title: "Snake Game",
    category: "Game",
    demo: "https://davidwithskills.github.io/Snake-Game/",
    github: "https://github.com/davidwithskills/Snake-Game",
    technologies: ["HTML", "Python"],
    description:
      "A modern implementation of the classic Snake Game featuring smooth gameplay mechanics, collision detection, and score management.",
    features: ["Real-time gameplay", "Score tracking", "Collision detection", "Responsive controls"],
    visual: "snake",
  },
  {
    title: "Ludo Game",
    category: "Game",
    demo: "https://davidwithskills.github.io/Ludo-Game/",
    github: "https://github.com/davidwithskills/Ludo-Game",
    technologies: ["TypeScript", "CSS"],
    description:
      "A browser-based Ludo game focused on game logic implementation, interactive gameplay, and TypeScript-based architecture.",
    features: ["Turn-based gameplay", "Interactive game board", "TypeScript architecture", "State management"],
    visual: "ludo",
  },
  {
    title: "Fruitful Bough Startup",
    category: "Startup",
    role: "Founder / Developer",
    technologies: ["Product Strategy", "Software Development", "Digital Innovation"],
    description:
      "A startup initiative focused on creating innovative technology solutions and digital products while demonstrating entrepreneurship and product development skills.",
    features: ["Business development", "Product planning", "Software development", "Digital innovation"],
    visual: "startup",
  },
];

const processSteps = [
  { title: "Requirements Analysis", icon: BookOpen },
  { title: "System Design", icon: Database },
  { title: "Development", icon: Code2 },
  { title: "Testing", icon: TestTube2 },
  { title: "Deployment", icon: Rocket },
  { title: "Maintenance", icon: ShieldCheck },
];

const coursework = [
  "Software Engineering",
  "Data Structures & Algorithms",
  "Database Systems",
  "Computer Architecture",
  "Cloud Computing",
  "Big Data Systems",
];

const sectionMotion = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
};

function scrollToSection(label: string) {
  document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-navy text-ink">
      <div className="fixed inset-0 -z-10 bg-radial-blue" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] grid-pattern" />

      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects activeFilter={activeFilter} setActiveFilter={setActiveFilter} projects={filteredProjects} />
        <Process />
        <Education />
        <GithubActivity />
        <Contact />
      </main>

      <Footer />

      <button
        aria-label="Scroll to top"
        onClick={() => scrollToSection("Home")}
        className="fixed bottom-5 right-5 z-40 rounded-full border border-white/10 bg-card/85 p-3 text-accent shadow-glow backdrop-blur transition hover:-translate-y-1 hover:bg-accent hover:text-navy"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}

function Navigation({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <button onClick={() => scrollToSection("Home")} className="group flex items-center gap-3" aria-label="David Yusuf home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent font-bold text-navy shadow-glow">DY</span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold tracking-wide">David Yusuf</span>
            <span className="block text-xs text-slate-400">Full-Stack Developer</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-accent"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="rounded-md border border-white/10 p-2 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-navy/95 px-5 py-3 md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setMenuOpen(false);
              }}
              className="block w-full rounded-md px-3 py-3 text-left text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-accent"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pb-16 pt-28 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Terminal size={16} /> Internship-ready software portfolio
          </span>
          <h1 className="mt-7 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">David Yusuf</h1>
          <p className="mt-5 text-xl font-semibold text-accent sm:text-2xl">Software Engineering Student | Full-Stack Developer</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build software solutions, web applications, and interactive digital experiences using modern technologies.
            Passionate about software engineering, system design, and creating products that solve real-world problems.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button onClick={() => scrollToSection("Projects")} className="btn-primary">
              View Projects <ArrowRight size={18} />
            </button>
            <a className="btn-secondary" href="/David-Yusuf-Internship-CV.docx" download>
              Download CV
            </a>
            <a className="btn-secondary" href="https://github.com/davidwithskills" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <CodeVisual />
        </motion.div>
      </div>
    </section>
  );
}

function CodeVisual() {
  const lines = [
    "const developer = 'David Yusuf';",
    "build(product.idea)",
    "  .with(React, TypeScript)",
    "  .test().deploy();",
    "return scalableSolutions;",
  ];

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/70 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/60 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs text-slate-400">portfolio.tsx</span>
        </div>
        <div className="relative p-6 sm:p-8">
          <div className="code-orbit" />
          {lines.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="mb-4 flex gap-4 font-mono text-sm text-slate-200 sm:text-base"
            >
              <span className="select-none text-slate-500">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="text-accent">{line.slice(0, line.indexOf("(") > -1 ? line.indexOf("(") : 5)}</span>
                {line.indexOf("(") > -1 ? line.slice(line.indexOf("(")) : line.slice(5)}
              </span>
            </motion.div>
          ))}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["API", "UI", "DB"].map((label, index) => (
              <motion.div
                key={label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.25 }}
                className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-4 text-center text-sm font-semibold text-accent"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <motion.section id="about" className="section" {...sectionMotion}>
      <SectionHeader eyebrow="About Me" title="Engineering Practical, Scalable Products" />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-7">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <BriefcaseBusiness size={30} />
          </div>
          <h3 className="mt-6 text-2xl font-bold">Software Engineering Student</h3>
          <p className="mt-4 leading-8 text-slate-300">
            Software Engineering student with experience developing web applications, interactive games, and
            business-oriented software solutions. Strong interest in software architecture, system design, cloud
            technologies, and full-stack development. Passionate about turning ideas into practical and scalable software
            products.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["4+", "Featured builds"],
            ["3", "Project domains"],
            ["6", "Core coursework areas"],
            ["100%", "Recruiter-focused presentation"],
          ].map(([value, label]) => (
            <div className="glass-card p-6" key={label}>
              <p className="text-3xl font-black text-accent">{value}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Skills() {
  return (
    <motion.section id="skills" className="section" {...sectionMotion}>
      <SectionHeader eyebrow="Skills" title="Technical Stack And Engineering Fundamentals" />
      <div className="grid gap-6 lg:grid-cols-3">
        {skills.map((group, groupIndex) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={24} />
                </span>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-accent shadow-glow"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}

function Projects({
  activeFilter,
  setActiveFilter,
  projects,
}: {
  activeFilter: ProjectCategory;
  setActiveFilter: React.Dispatch<React.SetStateAction<ProjectCategory>>;
  projects: Project[];
}) {
  const filters: ProjectCategory[] = ["All", "Web App", "Game", "Startup"];

  return (
    <motion.section id="projects" className="section" {...sectionMotion}>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <SectionHeader eyebrow="Featured Projects" title="Proof Of Problem-Solving" compact />
        <div className="flex flex-wrap gap-2" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-accent bg-accent text-navy"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-accent/60 hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="glass-card overflow-hidden">
      <ProjectVisual type={project.visual} title={project.title} />
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-accent">{project.category}</p>
            <h3 className="mt-1 text-2xl font-bold">{project.title}</h3>
            {project.role && <p className="mt-1 text-sm text-slate-400">{project.role}</p>}
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a className="icon-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {tech}
            </span>
          ))}
        </div>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="shrink-0 text-accent" /> {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a className="btn-primary py-2.5 text-sm" href={project.demo} target="_blank" rel="noreferrer">
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a className="btn-secondary py-2.5 text-sm" href={project.github} target="_blank" rel="noreferrer">
              GitHub <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ type, title }: { type: string; title: string }) {
  return (
    <div className={`project-visual ${type}`} aria-label={`${title} screenshot style preview`}>
      <div className="visual-window">
        <div className="visual-bar" />
        <div className="visual-content">
          {type === "logistics" && (
            <>
              <div className="visual-map" />
              <div className="visual-route" />
              <div className="visual-panel">
                <span />
                <span />
                <span />
              </div>
            </>
          )}
          {type === "snake" && (
            <div className="snake-board">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} className={index === 8 || index === 9 || index === 10 || index === 16 ? "snake-cell active" : "snake-cell"} />
              ))}
            </div>
          )}
          {type === "ludo" && (
            <div className="ludo-board">
              <span className="red" />
              <span className="yellow" />
              <span className="blue" />
              <span className="green" />
            </div>
          )}
          {type === "startup" && (
            <div className="startup-chart">
              <span />
              <span />
              <span />
              <div />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <motion.section className="section" {...sectionMotion}>
      <SectionHeader eyebrow="Software Engineering Process" title="From Idea To Maintained Product" />
      <div className="relative grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card relative p-5 text-center"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon size={23} />
              </span>
              <h3 className="mt-4 text-sm font-bold text-slate-100">{step.title}</h3>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

function Education() {
  return (
    <motion.section id="education" className="section" {...sectionMotion}>
      <SectionHeader eyebrow="Education" title="Academic Foundation" />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card p-7">
          <GraduationCap className="text-accent" size={38} />
          <h3 className="mt-5 text-2xl font-bold">Bachelor of Science in Software Engineering</h3>
          <p className="mt-4 leading-7 text-slate-300">
            Focused on building a strong foundation in computer science, engineering methods, software architecture, and
            practical product development.
          </p>
        </div>
        <div className="glass-card p-7">
          <h3 className="text-xl font-bold">Relevant Coursework</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {coursework.map((course) => (
              <div key={course} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200">
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function GithubActivity() {
  return (
    <motion.section className="section" {...sectionMotion}>
      <SectionHeader eyebrow="GitHub Activity" title="Consistent Building And Learning" />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">davidwithskills</h3>
              <p className="mt-1 text-sm text-slate-400">Contribution graph placeholder</p>
            </div>
            <a className="btn-secondary py-2.5 text-sm" href="https://github.com/davidwithskills" target="_blank" rel="noreferrer">
              Profile <Github size={16} />
            </a>
          </div>
          <div className="contribution-grid" aria-label="GitHub contribution graph placeholder">
            {Array.from({ length: 112 }).map((_, index) => (
              <span key={index} className={`level-${(index * 7 + index) % 5}`} />
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["Repositories", "Project portfolio with web apps and games"],
            ["Coding Activity", "Frontend, game logic, software experiments"],
            ["Focus", "React, TypeScript, JavaScript, Python"],
          ].map(([title, body]) => (
            <div className="glass-card p-5" key={title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">{title}</p>
              <p className="mt-2 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section id="contact" className="section" {...sectionMotion}>
      <SectionHeader eyebrow="Contact" title="Let’s Build Something Useful" />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card p-7">
          <h3 className="text-2xl font-bold">Recruiters and collaborators</h3>
          <p className="mt-4 leading-8 text-slate-300">
            Open to internship opportunities, software engineering projects, and product-focused collaborations.
          </p>
          <div className="mt-7 space-y-3">
            <a className="contact-link" href="https://github.com/davidwithskills" target="_blank" rel="noreferrer">
              <Github size={19} /> GitHub
            </a>
            <a className="contact-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={19} /> LinkedIn
            </a>
            <a className="contact-link" href="mailto:davidwithskills@gmail.com">
              <Mail size={19} /> davidwithskills@gmail.com
            </a>
          </div>
        </div>
        <form className="glass-card grid gap-4 p-7" action="mailto:davidwithskills@gmail.com" method="post" encType="text/plain">
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span>Name</span>
              <input required name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input required name="email" type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input required name="subject" type="text" placeholder="Internship opportunity" />
          </label>
          <label>
            <span>Message</span>
            <textarea required name="message" rows={5} placeholder="Tell me about the role or project." />
          </label>
          <button className="btn-primary w-fit" type="submit">
            Send Message <Send size={17} />
          </button>
        </form>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
      <p>© {new Date().getFullYear()} David Yusuf. Software Engineering Portfolio.</p>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, compact = false }: { eyebrow: string; title: string; compact?: boolean }) {
  return (
    <div className={compact ? "" : "mx-auto mb-10 max-w-3xl text-center"}>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export default App;
