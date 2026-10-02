import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Code2,
  Database,
  GitBranch,
  Mail,
  Menu,
  MonitorCog,
  Server,
  Settings2,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "automation",
    icon: Database,
    eyebrow: "01",
    title: "Data Pipelines & Automation",
    headline: "Automate the boring data work.",
    description:
      "Turn repetitive file, spreadsheet, API and database workflows into reliable automated processes.",
    bullets: [
      "CSV, Excel & file processing",
      "SFTP ingestion",
      "Data validation & transformation",
      "Scheduled processing",
      "ETL / ELT pipelines",
      "Automated reports",
    ],
  },
  {
    id: "integration",
    icon: GitBranch,
    eyebrow: "02",
    title: "Backend Systems & Integration",
    headline: "Make your systems talk to each other.",
    description:
      "Connect the systems you already use so information moves automatically instead of being copied between them.",
    bullets: [
      "REST API integrations",
      "Webhooks",
      "Database integrations",
      "System synchronisation",
      "Background processing",
      "Event-driven systems",
    ],
  },
  {
    id: "devops",
    icon: Server,
    eyebrow: "03",
    title: "DevOps & Deployment Automation",
    headline: "Go from 'it works' to reliably deployed.",
    description:
      "Make your applications easier to test, deploy and operate with repeatable engineering practices.",
    bullets: [
      "Dockerisation",
      "GitLab / GitHub CI/CD",
      "Automated testing",
      "Container deployments",
      "Kubernetes",
      "Release automation",
    ],
  },
  {
    id: "reliability",
    icon: MonitorCog,
    eyebrow: "04",
    title: "Monitoring & Operational Reliability",
    headline: "Know when something breaks — and why.",
    description:
      "Build useful monitoring around applications, pipelines and dependencies so problems become easier to find and fix.",
    bullets: [
      "System health monitoring",
      "Application monitoring",
      "Data-flow monitoring",
      "Dependency monitoring",
      "Useful alerts",
      "Operational dashboards",
    ],
  },
];

const technologies = [
  "Python",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "GitLab CI/CD",
  "RabbitMQ",
  "Linux",
  "REST APIs",
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" onClick={closeMobile}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Backend &amp; Automation</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <a href="#services" onClick={closeMobile}>Services</a>
          <a href="#process" onClick={closeMobile}>How it works</a>
          <a href="#about" onClick={closeMobile}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMobile}>
            Contact me
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="eyebrow-pill">
              <span className="status-dot" />
              Backend &amp; automation engineering
            </div>
            <h1>
              Reliable software.
              <br />
              Automated processes.
              <br />
              <span>Less manual work.</span>
            </h1>
            <p className="hero-lead">
              I help Danish companies automate data-heavy processes, connect
              their systems, and make their software easier to deploy and
              operate.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Tell me about your process
                <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#services">
                See the services
                <ChevronDown size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <span><Check size={15} /> Python &amp; backend</span>
              <span><Check size={15} /> Data processing</span>
              <span><Check size={15} /> Production systems</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="flow">
                <div className="flow-node">
                  <Database size={18} />
                  <strong>Input</strong>
                  <small>Files / API</small>
                </div>
                <div className="flow-line"><span /></div>
                <div className="flow-node active">
                  <Zap size={18} />
                  <strong>Process</strong>
                  <small>Validate &amp; transform</small>
                </div>
                <div className="flow-line"><span /></div>
                <div className="flow-node">
                  <Server size={18} />
                  <strong>Output</strong>
                  <small>Database / report</small>
                </div>
              </div>
              <div className="visual-status">
                <CircleCheck size={17} />
                <span>Pipeline healthy</span>
                <strong>99.98%</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <span className="section-label">What I do</span>
              <h2>Four areas. One practical approach.</h2>
            </div>
            <p>
              I focus on concrete engineering problems: remove manual work,
              connect systems, simplify deployment and make production
              behaviour easier to understand.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.id}>
                  <div className="service-top">
                    <span className="service-number">{service.eyebrow}</span>
                    <span className="service-icon"><Icon size={21} /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <h4>{service.headline}</h4>
                  <p>{service.description}</p>
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Check size={15} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="process-band" id="process">
          <div className="section narrow">
            <div className="section-heading process-heading">
              <div>
                <span className="section-label">How it works</span>
                <h2>Start with the process, not the technology.</h2>
              </div>
              <p>
                You don't need to know whether you need an API, a queue or a
                data pipeline. Show me what happens today; we'll work out the
                engineering afterwards.
              </p>
            </div>

            <div className="process-grid">
              {[
                ["01", "Tell me about the process", "Walk me through what happens today and where the friction is."],
                ["02", "Find the opportunity", "I identify what can be automated, integrated or made more reliable."],
                ["03", "Agree on a small project", "We define a concrete outcome, scope and way to measure success."],
                ["04", "Build and implement", "I develop, test and deploy the solution — and document what matters."],
              ].map(([number, title, text]) => (
                <div className="process-step" key={number}>
                  <span className="step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case section">
          <div className="case-intro">
            <span className="section-label">A typical opportunity</span>
            <h2>From manual file handling to an automated flow.</h2>
            <p>
              A common pattern in data-heavy businesses: employees spend time
              downloading files, checking them, moving values between systems
              and producing recurring reports.
            </p>
          </div>

          <div className="case-flow">
            <div className="case-column before">
              <span className="case-label">Before</span>
              {[
                "Fetch files manually",
                "Open Excel and validate data",
                "Copy data into another system",
                "Prepare the report manually",
              ].map((item) => (
                <div className="case-item" key={item}>
                  <X size={15} />
                  {item}
                </div>
              ))}
            </div>

            <div className="case-arrow">
              <ArrowRight size={25} />
            </div>

            <div className="case-column after">
              <span className="case-label">After</span>
              {[
                "Files arrive automatically",
                "Data is validated and transformed",
                "Results are stored automatically",
                "Reports are generated on schedule",
              ].map((item) => (
                <div className="case-item" key={item}>
                  <Check size={15} />
                  {item}
                </div>
              ))}
            </div>

            <div className="case-result">
              <CircleCheck size={23} />
              <strong>The result</strong>
              <ul>
                <li>Less manual work</li>
                <li>Fewer errors</li>
                <li>Faster processing</li>
                <li>Better visibility</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-card">
            <div className="about-copy">
              <span className="section-label">About</span>
              <h2>Engineering experience that comes from running real systems.</h2>
              <p>
                I am a backend software engineer with more than ten years of
                experience building and operating data-processing systems.
                My work sits close to researchers and operational users, where
                reliability and predictable processing matter.
              </p>
              <p>
                I work primarily with Python and the surrounding backend
                ecosystem, including PostgreSQL, Docker, Kubernetes, Linux,
                CI/CD and event-driven systems.
              </p>
              <a className="text-link" href="#contact">
                Let's talk about your system <ArrowRight size={16} />
              </a>
            </div>
            <div className="about-stack">
              <div className="stack-header">
                <Code2 size={18} />
                <span>Technology stack</span>
              </div>
              <div className="tech-grid">
                {technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="trust-row">
                <ShieldCheck size={19} />
                <span>Practical solutions over unnecessary complexity.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div>
              <span className="section-label light">Have a process that shouldn't be manual?</span>
              <h2>Tell me how it works today.</h2>
              <p>
                You don't need a polished specification. A short description
                of the process, what takes time and what systems are involved
                is enough to start a conversation.
              </p>
            </div>
            <a
              className="button light-button"
              href="mailto:hello@example.com?subject=Automation%20project"
            >
              <Mail size={17} />
              Start a conversation
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <strong>Backend &amp; Automation</strong>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-meta">
          <span>Denmark</span>
          <span>·</span>
          <span>Backend · Automation · Reliability</span>
        </div>
      </footer>
    </div>
  );
}

export default App;