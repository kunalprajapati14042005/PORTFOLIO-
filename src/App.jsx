import { useEffect, useState } from "react";
import "./App.css";

const GITHUB = "https://github.com/kunalprajapati14042005";
const LINKEDIN = "https://linkedin.com/in/kunalprajapati-cse";
const EMAIL = "mailto:Prajapatikunal4096@gmail.com";
const PHONE = "tel:+917011655597";

const projects = [
  {
    number: "01",
    title: "Ease 2 Council",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "A user-friendly college registration platform that automates enrollment and gives students and administrators separate portals for secure registration and centralized application management.",
    impact:
      "Reduced registration time by 60% and paperwork by 90% compared with the traditional offline process.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github:
      "https://github.com/kunalprajapati14042005/Ease2-Council-",
    live:
      "https://e2cadminpanel.vercel.app/home",
    accent: "lime",
  },
  {
    number: "02",
    title: "VRINDA",
    type: "AUTOMATED VULNERABILITY SCANNER",
    description:
      "A security-focused tool that scans networks for vulnerabilities using Python and Nmap, then produces structured scan reports.",
    impact:
      "Containerized with Docker for reproducible deployments and automated vulnerability detection and reporting.",
    tech: ["Python", "Nmap", "Docker"],
    github: null,
    live: null,
    accent: "violet",
  },
  {
    number: "03",
    title: "Web Development Projects",
    type: "HTML / CSS / JAVASCRIPT",
    description:
      "A collection of smaller web development projects built while practicing frontend fundamentals, responsive layouts, UI implementation, and modern web development techniques.",
    impact:
      "Built multiple practical projects covering HTML, CSS, JavaScript, responsive design, layouts, and frontend interactions.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github:
      "https://github.com/kunalprajapati14042005/WebdevelopmentProjectsHTML_CSS",
    live: null,
    accent: "blue",
  },
];

const experiences = [
  {
    date: "JUNE 2026 — AUGUST 2026",
    role: "WEB DEVELOPMENT INTERN",
    company: "Dwarkadheesh Polytechnic",
    location: "New Delhi · Marketing Department",
    description:
      "Worked as a Web Development Intern within the Marketing department from 10 June 2026 to 6 August 2026.",
    tags: ["Web Development", "Marketing", "Internship"],
  },
  {
    date: "2026",
    role: "FULL-STACK DEVELOPER",
    company: "Mynerva",
    location: "Remote",
    description:
      "Collaborated with the development team to build responsive and user-friendly web applications using component-based design. Worked with Tailwind CSS, TypeScript, Next.js, responsive design principles, and Git/GitHub for collaborative development and pull-request reviews. Improved overall application performance by 30% and reduced code rewrite by 70%.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Git/GitHub"],
  },
  {
    date: "JULY 2024 — SEPTEMBER 2024",
    role: "CYBER SECURITY INTERN",
    company: "CFSS",
    location: "Haryana, India",
    description:
      "Performed web application security assessments using Burp Suite, Nmap, Wireshark and Metasploit. Identified and documented vulnerabilities, assisted in penetration-testing engagements, and prepared technical vulnerability reports with remediation recommendations.",
    tags: ["Burp Suite", "Nmap", "Wireshark", "Metasploit"],
  },
];

const skills = {
  "Frontend & UI": [
    "ReactJS",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Figma",
    "Canva",
  ],
  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Django",
    "Spring Boot (Learning)",
    "REST APIs",
    "Mongoose",
  ],
  "Data & Development": [
    "MongoDB",
    "MySQL",
    "Python",
    "C++",
    "Java",
    "Pandas",
    "Chart.js",
    "Prismic",
    "Slice Machine",
  ],
  "Tools & CS": [
    "Git/GitHub",
    "Postman",
    "DSA",
    "OOPS",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
};

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M4 12 12 4M6 4h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 2v11M4 9l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .8a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.73 2.62 1.23 3.26.94.1-.73.39-1.23.71-1.52-2.5-.28-5.12-1.25-5.12-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.12 1.15a10.9 10.9 0 0 1 5.68 0c2.17-1.45 3.11-1.15 3.11-1.15.62 1.55.23 2.7.12 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.63 5.29-5.14 5.56.4.35.76 1.04.76 2.1v3.1c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .8Z"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? "open" : ""}`} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

function ProjectVisual({ accent, number, title }) {
  return (
    <div className={`project-visual ${accent}`}>
      <div className="visual-noise" />

      <div className="browser-bar">
        <span />
        <span />
        <span />
        <b>
          {number} / {title.toUpperCase()}
        </b>
      </div>

      <div className="visual-content">
        <div className="visual-sidebar">
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="visual-main">
          <div className="visual-line wide" />
          <div className="visual-line" />

          <div className="visual-grid">
            <div className="visual-card large" />
            <div className="visual-card" />
            <div className="visual-card" />
          </div>

          <div className="visual-footer" />
        </div>
      </div>

      <div className="visual-title">{title}</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "work", "experience", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.05, 0.25, 0.5],
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="page-grid" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="navbar">
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Kunal Prajapati home"
        >
          <span className="brand-mark">KP</span>
          <span className="brand-name">Kunal Prajapati</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          {["work", "experience", "about"].map((item) => (
            <a
              key={item}
              className={activeSection === item ? "active" : ""}
              href={`#${item}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="status-dot" />
              Open to web development opportunities
            </div>

            <p className="hero-kicker">
              COMPUTER SCIENCE & ENGINEERING · CYBER SECURITY
            </p>

            <h1>
              I build <span>useful</span>
              <br />
              web products.
            </h1>

            <p className="hero-description">
              Full-Stack Developer and B.Tech CSE (Cyber Security) student at
              K.R. Mangalam University, building responsive interfaces, APIs,
              and practical web applications with modern technologies.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work <ArrowUpRight />
              </a>

              <a
                className="button button-ghost"
                href="/Kunal-Prajapati-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume <ArrowUpRight />
              </a>

              <a
                className="button button-ghost"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon /> GitHub
              </a>
            </div>

            <div className="hero-tech-line">
              <span>React.js</span>
              <i />
              <span>Next.js</span>
              <i />
              <span>Node.js</span>
              <i />
              <span>Express.js</span>
              <i />
              <span>MongoDB</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-one">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-card-back" />

            <div className="hero-photo-frame">
              <img
                src="/Profile photo.jpeg"
                alt="Kunal Prajapati"
              />

              <div className="photo-label">
                <span>KP / 01</span>
                <span>BUILD · SHIP · LEARN</span>
              </div>
            </div>

            <div className="hero-floating-card">
              <span className="mini-label">CURRENT FOCUS</span>

              <strong>
                Full-stack
                <br />
                web development
              </strong>

              <span className="mini-arrow">
                <ArrowUpRight />
              </span>
            </div>

            <div className="hero-scroll">
              <ArrowDown /> SCROLL TO EXPLORE
            </div>
          </div>
        </section>

        {/* TECHNOLOGY MARQUEE */}
        <section className="marquee-strip" aria-label="Technologies">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, repeat) => (
              <div className="marquee-set" key={repeat}>
                <span>REACT.JS</span>
                <b>✦</b>

                <span>NEXT.JS</span>
                <b>✦</b>

                <span>NODE.JS</span>
                <b>✦</b>

                <span>EXPRESS</span>
                <b>✦</b>

                <span>MONGODB</span>
                <b>✦</b>

                <span>TYPESCRIPT</span>
                <b>✦</b>

                <span>PYTHON</span>
                <b>✦</b>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="section section-pad">
          <div className="section-heading reveal">
            <div>
              <p className="section-number">01 / SELECTED WORK</p>

              <h2>
                Things I've <span>built.</span>
              </h2>
            </div>

            <p className="section-intro">
              Projects across full-stack development, security tooling, and
              frontend development.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article
                className={`project-card reveal ${
                  index % 2 ? "reverse" : ""
                }`}
                key={project.number}
              >
                <ProjectVisual
                  accent={project.accent}
                  number={project.number}
                  title={project.title}
                />

                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.type}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <p className="project-impact">
                    <strong>Impact:</strong> {project.impact}
                  </p>

                  <div className="tech-tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View GitHub <ArrowUpRight />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          style={{ marginLeft: "20px" }}
                        >
                          Live Project <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="section section-pad experience-section"
        >
          <div className="section-heading reveal">
            <div>
              <p className="section-number">02 / EXPERIENCE</p>

              <h2>
                Where I've <span>worked.</span>
              </h2>
            </div>

            <p className="section-intro">
              Development and security experience across internships and
              collaborative engineering work.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article
                className="experience-card reveal"
                key={`${experience.company}-${index}`}
              >
                <div className="experience-date">
                  {experience.date}
                </div>

                <div className="experience-main">
                  <p className="experience-type">
                    {experience.role}
                  </p>

                  <h3>{experience.company}</h3>

                  <p className="experience-location">
                    {experience.location}
                  </p>

                  <p>
                    {experience.description}
                  </p>

                  <div className="tech-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="experience-index">
                  0{index + 1}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section-pad about-section">
          <div className="about-grid">
            <div className="about-title reveal">
              <p className="section-number">03 / ABOUT</p>

              <h2>
                Building with
                <br />
                <span>purpose.</span>
              </h2>
            </div>

            <div className="about-copy reveal delay-one">
              <p className="about-lead">
                I'm Kunal Prajapati, a B.Tech Computer Science & Engineering
                (Cyber Security) student at K.R. Mangalam University,
                Gurugram.
              </p>

              <p>
                I work across frontend and backend development, with
                experience in React, Next.js, Node.js, Express.js, MongoDB,
                TypeScript and modern UI technologies. My security background
                also shapes how I think about web applications and their
                underlying systems.
              </p>

              <p>
                Alongside development, I've worked in student leadership and
                campus activities, including coordinating the Afterdark Media
                and Photography Society and serving as a Google Gemini Campus
                Ambassador Intern.
              </p>

              <div className="about-links">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight />
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight />
                </a>

                <a href={EMAIL}>
                  Email <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="education-card reveal">
            <div>
              <p className="section-number">EDUCATION</p>

              <h3>K.R. Mangalam University</h3>

              <p>
                Bachelor of Technology · Computer Science & Engineering
                (Cyber Security)
              </p>
            </div>

            <div className="education-meta">
              <strong>7.2 / 10</strong>
              <span>Aug 2023 — Jun 2027</span>
              <span>Gurugram, Haryana</span>
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="leadership-grid">
            <article className="mini-profile reveal">
              <p className="section-number">LEADERSHIP</p>

              <h3>Afterdark</h3>

              <p className="mini-role">
                Media and Photography Society · Coordinator
              </p>

              <p>
                Reformed the society with an emphasis on teamwork and
                systematic work, and proposed and executed marketing and
                network activities to raise awareness.
              </p>

              <span>Oct 2025 — Jan 2026</span>
            </article>

            <article className="mini-profile reveal delay-one">
              <p className="section-number">CAMPUS</p>

              <h3>Google Gemini</h3>

              <p className="mini-role">
                Campus Ambassador Intern · Coordinator
              </p>

              <p>
                Campus ambassador experience alongside ongoing academic and
                technical development.
              </p>

              <span>May 2026 — Present</span>
            </article>
          </div>

          {/* SKILLS */}
          <div className="skills-block reveal">
            <div className="skills-heading">
              <p className="section-number">04 / TOOLKIT</p>
              <span>Technologies & coursework</span>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div className="skill-group" key={category}>
                  <p>{category}</p>

                  <div>
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="achievements reveal">
            <div>
              <p className="section-number">ACHIEVEMENTS</p>

              <h3>Consistency matters.</h3>
            </div>

            <div className="achievement-items">
              <div>
                <strong>100+</strong>
                <span>day LeetCode coding streak</span>
              </div>

              <div>
                <strong>2025</strong>
                <span>LeetCode 100 Days badge</span>
              </div>

              <div>
                <strong>Multiple</strong>
                <span>projects built & deployed</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section section-pad">
          <div className="contact-inner reveal">
            <p className="section-number">05 / CONTACT</p>

            <h2>
              Let's build something
              <br />
              <span>useful.</span>
            </h2>

            <p>
              Open to web development internships, full-stack opportunities,
              and meaningful projects.
            </p>

            <div className="contact-actions">
              <a className="button button-primary" href={EMAIL}>
                Email me <ArrowUpRight />
              </a>

              <a className="button button-ghost" href={PHONE}>
                Call <ArrowUpRight />
              </a>

              <a
                className="button button-ghost"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-pad">
        <span>© {new Date().getFullYear()} Kunal Prajapati</span>

        <div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href={EMAIL}>Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
