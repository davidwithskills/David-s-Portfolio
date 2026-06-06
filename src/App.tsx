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
  TestTube2,
  X,
} from "lucide-react";

type ProjectCategory = "All" | "Web App" | "Game";

type Project = {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  demo?: string;
  github?: string;
  role?: string;
  technologies: string[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  learned: string[];
  future: string[];
  timeline: string[];
  workflow: string[];
  visual: string;
  featured?: boolean;
};

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

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
    problem:
      "Small logistics teams need a clear way to communicate shipment status, surface delivery information quickly, and reduce confusion around package movement.",
    solution:
      "SwiftShip presents shipment tracking, operational information, and dashboard-style interactions in a responsive web interface that feels familiar and easy to scan.",
    features: ["Shipment tracking", "Responsive design", "Interactive dashboard", "User-friendly interface"],
    challenges: [
      "Designing a dashboard that stays readable on small screens",
      "Organizing shipment information without overwhelming the user",
      "Creating interactive behavior with a lightweight frontend stack",
    ],
    learned: [
      "How to structure user flows around operational tasks",
      "How responsive layouts improve trust in business tools",
      "How dashboard UI patterns support fast decision-making",
    ],
    future: [
      "Add authenticated customer and admin portals",
      "Connect tracking cards to a real shipment database",
      "Introduce delivery status notifications and analytics",
    ],
    timeline: ["Requirements mapping", "Interface wireframe", "Dashboard build", "Responsive testing", "Deployment"],
    workflow: ["Analyze delivery workflow", "Model shipment states", "Build UI components", "Test across breakpoints"],
    visual: "logistics",
    featured: true,
  },
  {
    title: "Snake Game",
    category: "Game",
    demo: "https://davidwithskills.github.io/Snake-Game/",
    github: "https://github.com/davidwithskills/Snake-Game",
    technologies: ["HTML", "Python"],
    description:
      "A modern implementation of the classic Snake Game featuring smooth gameplay mechanics, collision detection, and score management.",
    problem:
      "Classic games are useful practice grounds for learning loops, user input, state updates, collision logic, and real-time feedback.",
    solution:
      "The Snake Game rebuilds the familiar gameplay loop with responsive controls, scoring, and collision handling to demonstrate core programming logic.",
    features: ["Real-time gameplay", "Score tracking", "Collision detection", "Responsive controls"],
    challenges: [
      "Keeping movement consistent while user input changes direction",
      "Detecting self-collisions and wall collisions reliably",
      "Balancing game speed with responsive player control",
    ],
    learned: [
      "How real-time state changes affect gameplay feel",
      "How collision detection depends on predictable data structures",
      "How small features like scoring improve replay value",
    ],
    future: [
      "Add difficulty levels and pause/resume controls",
      "Store high scores locally",
      "Improve mobile touch controls and visual effects",
    ],
    timeline: ["Game loop design", "Movement logic", "Collision rules", "Score system", "Play testing"],
    workflow: ["Define board state", "Handle keyboard input", "Update frame state", "Validate collision outcomes"],
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
    problem:
      "Board games require predictable state management, turn sequencing, and user interactions that remain understandable as game complexity grows.",
    solution:
      "The Ludo Game uses TypeScript-oriented structure and an interactive board to separate game state, turn behavior, and visual feedback.",
    features: ["Turn-based gameplay", "Interactive game board", "TypeScript architecture", "State management"],
    challenges: [
      "Representing turn-based rules in a maintainable way",
      "Keeping UI state synchronized with game state",
      "Designing board interactions that feel clear to players",
    ],
    learned: [
      "How typed data models make game logic easier to reason about",
      "How state transitions shape user experience",
      "How visual feedback helps users understand rules",
    ],
    future: [
      "Add multiplayer support",
      "Implement full rule validation and dice animations",
      "Add save/resume game state",
    ],
    timeline: ["Rule breakdown", "State model", "Board interface", "Turn handling", "Interaction polish"],
    workflow: ["Map game entities", "Implement turn flow", "Render board state", "Test player actions"],
    visual: "ludo",
  },
  {
    title: "NextTech",
    category: "Web App",
    demo: "https://davidwithskills.github.io/NextTech/",
    github: "https://github.com/davidwithskills/NextTech",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A modern technology-focused web project presenting digital solutions through a clean, responsive, and professional interface.",
    problem:
      "Technology brands need a polished web presence that communicates services clearly and feels credible across desktop and mobile devices.",
    solution:
      "NextTech uses a modern landing-page structure, responsive content sections, and clean interaction patterns to present a professional digital brand.",
    features: ["Responsive layout", "Modern landing page", "Interactive interface", "Professional web design"],
    challenges: [
      "Creating a premium first impression with simple web technologies",
      "Balancing visual appeal with clear content hierarchy",
      "Maintaining responsive spacing across viewport sizes",
    ],
    learned: [
      "How SaaS-style presentation improves perceived product quality",
      "How consistent spacing and typography shape trust",
      "How interaction details make static websites feel more polished",
    ],
    future: [
      "Add real service pages and customer testimonials",
      "Introduce contact form submission handling",
      "Add performance analytics and SEO content expansion",
    ],
    timeline: ["Brand direction", "Landing layout", "Responsive sections", "Interaction polish", "Deployment"],
    workflow: ["Plan page sections", "Build responsive components", "Refine visual hierarchy", "Test content flow"],
    visual: "nexttech",
  },
];

const workExperience = [
  {
    role: "Founder / Developer",
    company: "Fruitful Bough Startup",
    description:
      "A startup initiative focused on creating innovative technology solutions and digital products while demonstrating entrepreneurship and product development skills.",
    highlights: ["Business development", "Product planning", "Software development", "Digital innovation"],
  },
  {
    role: "Robotics Trainer",
    company: "LEGO MindStorms",
    description:
      "Trained students in robotics fundamentals using LEGO MindStorms kits, helping learners build, program, test, and troubleshoot interactive robot systems.",
    highlights: ["Robotics education", "Student mentoring", "Robot programming", "Troubleshooting"],
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
        <WorkExperience />
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
            <a className="btn-secondary" href={`${import.meta.env.BASE_URL}David-Yusuf-Internship-CV.pdf`} download>
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
  const filters: ProjectCategory[] = ["All", "Web App", "Game"];

  return (
    <section id="projects" className="section">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <SectionHeader eyebrow="Project Case Studies" title="Engineering Decisions, Product Thinking, And Delivery" compact />
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Each project is presented as a software engineering case study, showing the problem, solution, technical
            decisions, implementation workflow, and next improvements.
          </p>
        </div>
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

      <motion.div layout className="mt-12 space-y-10">
        {projects.map((project, index) => (
          <ProjectCaseStudy key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
      className={`case-study ${project.featured ? "featured-case-study" : ""}`}
    >
      {project.featured && <span className="featured-ribbon">Featured Project</span>}
      <div className={`grid gap-8 xl:grid-cols-[1.06fr_0.94fr] ${reversed ? "xl:[&>*:first-child]:order-2" : ""}`}>
        <div className="space-y-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">{project.category}</p>
              <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">{project.title}</h3>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">{project.description}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <CaseBlock title="Problem" body={project.problem} />
            <CaseBlock title="Solution" body={project.solution} />
          </div>

          <div>
            <p className="case-label">Technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
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

        <div className="space-y-5">
          <div className="case-screenshot">
            <ProjectVisual type={project.visual} title={project.title} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="feature-pill">
                <CheckCircle2 size={16} className="shrink-0 text-accent" /> {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <CaseList title="Challenges" items={project.challenges} />
        <CaseList title="What I Learned" items={project.learned} />
        <CaseList title="Future Improvements" items={project.future} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="case-panel">
          <p className="case-label">Project Timeline</p>
          <div className="mt-5 space-y-4">
            {project.timeline.map((item, timelineIndex) => (
              <div key={item} className="timeline-item">
                <span>{String(timelineIndex + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-panel">
          <p className="case-label">Engineering Workflow</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.workflow.map((item) => (
              <div key={item} className="workflow-step">
                <Code2 size={16} className="text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="case-panel">
      <p className="case-label">{title}</p>
      <p className="mt-3 leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="case-panel">
      <p className="case-label">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
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
          {type === "nexttech" && (
            <div className="nexttech-screen">
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

function WorkExperience() {
  return (
    <motion.section id="experience" className="section" {...sectionMotion}>
      <SectionHeader eyebrow="Work Experience" title="Entrepreneurship And Product Development" />
      <div className="grid gap-6 lg:grid-cols-2">
        {workExperience.map((item) => (
          <article className="glass-card p-7" key={item.company}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{item.company}</p>
            <h3 className="mt-3 text-2xl font-bold">{item.role}</h3>
            <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="shrink-0 text-accent" /> {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
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
      <SectionHeader eyebrow="Contact" title="Let's Build Something Useful" />
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
      <p>Copyright {new Date().getFullYear()} David Yusuf. Software Engineering Portfolio.</p>
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
