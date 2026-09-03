import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Network,
  Sparkles,
  X,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from './data/personalInfo';

const socialLinks = [
  { label: 'GitHub', href: personalInfo.github, Icon: Github },
  { label: 'LinkedIn', href: personalInfo.linkedin, Icon: Linkedin },
  { label: 'Email', href: `mailto:${personalInfo.email}`, Icon: Mail },
];

const navItems = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Networking',
  'Data',
  'Education',
  'Contact',
];

const skillGroups = [
  {
    title: 'Web Development',
    icon: Globe,
    items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'REST APIs'],
  },
  {
    title: 'Programming',
    icon: Code2,
    items: ['C++', 'Python', 'JavaScript', 'Java', 'Object-Oriented Programming', 'Data Structures & Algorithms'],
  },
  {
    title: 'Networking',
    icon: Network,
    items: ['Computer Networks', 'TCP/IP', 'DNS', 'DHCP', 'HTTP/HTTPS', 'Routing & Switching', 'Network Troubleshooting', 'Network Security Fundamentals', 'Cisco Networking Fundamentals'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MySQL', 'SQL', 'PostgreSQL', 'Database Design', 'ER Diagrams', 'Normalization', 'CRUD Operations'],
  },
  {
    title: 'Tools',
    icon: Monitor,
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Microsoft Office'],
  },
];

const projects = [
  {
    title: 'Personal Portfolio',
    type: 'Placeholder Project',
    description: 'A personal portfolio website concept built to showcase web work, projects, and technical interests with a premium aesthetic.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Network Monitoring Dashboard',
    type: 'Placeholder Project',
    description: 'A monitoring dashboard concept for infrastructure visibility, traffic analysis, and service health tracking.',
    tech: ['Python', 'Networking', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1558494949cc3c4a6ad85d0d0a08a2dd4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Database Management System',
    type: 'Placeholder Project',
    description: 'An example DBMS project focused on structured data handling, CRUD flows, and organizing relational data.',
    tech: ['SQL', 'MySQL', 'Database Design'],
    image: 'https://images.unsplash.com/photo-1544383838-bca9c88b3f4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Full-Stack Web Application',
    type: 'Placeholder Project',
    description: 'A full-stack app concept integrating user flows, APIs, modern UI patterns, and scalable backend logic.',
    tech: ['React', 'Node.js', 'REST API'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
];

const certs = [
  { name: 'Certification Name', organization: 'Organization', year: '2025', link: '#' },
  { name: 'Certification Name', organization: 'Organization', year: '2025', link: '#' },
  { name: 'Certification Name', organization: 'Organization', year: '2025', link: '#' },
];

const journey = [
  { title: 'Learning', text: 'Building a strong foundation in core principles and technologies.' },
  { title: 'Building', text: 'Turning concepts into practical projects and user-focused solutions.' },
  { title: 'Experimenting', text: 'Exploring new tools, architectures, and problem-solving approaches.' },
  { title: 'Improving', text: 'Refining skills through iteration, feedback, and continuous practice.' },
  { title: 'Creating', text: 'Developing impactful digital experiences with confidence and creativity.' },
];

const educationCourses = [
  'Programming',
  'Data Structures',
  'Database Systems',
  'Computer Networks',
  'Web Development',
  'Software Engineering',
];

function App() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    setMounted(true);
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.4 },
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = 'smooth';
  }, []);

  const handleNavClick = (item) => {
    const sectionId = item === 'Home' ? 'home' : item.toLowerCase();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className={`app-shell ${theme}`}>
      <div className="background-glow" />
      <div className="grid-overlay" />
      <div className="particle-layer" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, index) => (
          <span key={index} className="particle" style={{ '--delay': `${index * 0.8}s` }} />
        ))}
      </div>

      <header className="nav-wrap">
        <nav className="navbar">
          <div className="brand">
            <span className="brand-mark">HA</span>
            <span>Hafiz Ali</span>
          </div>

          <div className="nav-links desktop-nav">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={activeSection === (item === 'Home' ? 'home' : item.toLowerCase()) ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <button type="button" className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
            >
              {navItems.map((item) => (
                <button key={item} type="button" className="mobile-link" onClick={() => handleNavClick(item)}>
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 28 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="eyebrow-wrap">
              <span className="eyebrow">Student • Developer • Problem Solver</span>
            </div>
            <h1>
              <span className="name-line">Hafiz Ali Iftikhar</span>
              <span className="headline-block">Building Digital Experiences. Connecting Systems. Solving Problems.</span>
            </h1>
            <p className="subtext">
              Computer Science student at UMT with a passion for web development, networking, databases, and building practical technology solutions.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-btn" onClick={() => handleNavClick('Projects')}>
                View My Work <ArrowRight size={18} />
              </button>
              <a href="/resume.pdf" className="secondary-btn" download>
                <Download size={18} /> Download CV
              </a>
            </div>
            <div className="social-row hero-social-row">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  {...(label === 'Email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="social-link social-link--pill"
                  aria-label={label}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="profile-panel"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.92 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="status-badge">
              <span className="status-dot" /> Available for Opportunities
            </div>
            <div className="profile-frame">
              <div className="ring ring-one" />
              <div className="ring ring-two" />
              <img src="/assets/profile.jpg" alt="Hafiz Ali Iftikhar portrait" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.classList.add('fallback-profile');
              }} />
              <div className="profile-fallback" aria-label="Profile placeholder">HA</div>
            </div>
            <div className="mini-card">
              <Sparkles size={16} />
              <div>
                <strong>Focus</strong>
                <span>Web • Networks • Data</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section-shell section-grid about-section">
          <div className="section-heading">
            <span className="section-tag">About</span>
            <h2>Who I Am</h2>
          </div>
          <div className="about-content">
            <p>
              My name is Hafiz Ali Iftikhar, and I am a student at the University of Management and Technology (UMT), Lahore. I am passionate about technology and enjoy exploring how software, networks, databases, and modern web technologies work together to solve real-world problems.
            </p>
            <p>
              I am continuously improving my technical skills through university projects, experimentation, and self-learning, with a strong focus on building practical and meaningful digital experiences.
            </p>
            <div className="stat-list">
              <div className="stat-pill"><span>🎓</span> UMT Student</div>
              <div className="stat-pill"><span>💻</span> Web Development</div>
              <div className="stat-pill"><span>🌐</span> Networking</div>
              <div className="stat-pill"><span>🗄️</span> Database Technologies</div>
              <div className="stat-pill"><span>🚀</span> Always Learning</div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="section-heading center">
            <span className="section-tag">Skills</span>
            <h2>Technical Skills</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="skill-card" key={title}>
                <div className="skill-icon-wrap"><Icon size={24} /></div>
                <h3>{title}</h3>
                <ul>
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="section-heading row-space">
            <div>
              <span className="section-tag">Work</span>
              <h2>Featured Projects</h2>
            </div>
            <button type="button" className="text-btn">View All Projects</button>
          </div>
          <div className="project-grid">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ rotateX: 2, rotateY: -2, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-badge">{project.type}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href="#" className="secondary-btn small-btn"><Github size={16} /> GitHub</a>
                    <a href="#" className="primary-btn small-btn"><ExternalLink size={16} /> Live Demo</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="networking" className="section-shell networking-section">
          <div className="section-heading center">
            <span className="section-tag">Infrastructure</span>
            <h2>Networking &amp; Infrastructure</h2>
          </div>
          <div className="network-visual">
            <div className="network-line network-line-1" />
            <div className="network-line network-line-2" />
            <div className="network-line network-line-3" />
            <div className="network-node node-internet">Internet</div>
            <div className="network-node node-router">Router</div>
            <div className="network-node node-firewall">Firewall</div>
            <div className="network-node node-switch">Switch</div>
            <div className="network-node node-servers">Servers</div>
            <div className="network-node node-db">Database</div>
            <div className="network-node node-clients">Clients</div>
            <div className="data-packet packet-1" />
            <div className="data-packet packet-2" />
            <div className="data-packet packet-3" />
          </div>
          <div className="info-grid">
            {['Network Architecture', 'TCP/IP', 'Routing', 'Switching', 'Network Security', 'Troubleshooting'].map((item) => (
              <div className="info-card" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section id="data" className="section-shell data-section">
          <div className="section-heading center">
            <span className="section-tag">Data</span>
            <h2>Data &amp; Databases</h2>
          </div>
          <div className="database-visual">
            <div className="db-flow application">Application</div>
            <div className="db-flow api">API</div>
            <div className="db-flow database">Database</div>
            <div className="table-stack">
              <div className="table-box">Users</div>
              <div className="table-box">Projects</div>
              <div className="table-box">Skills</div>
              <div className="table-box">Messages</div>
            </div>
          </div>
          <div className="meta-tags">
            {['SQL', 'Database Design', 'Relationships', 'Normalization', 'Queries', 'CRUD', 'Data Management'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section id="education" className="section-shell education-section">
          <div className="section-heading center">
            <span className="section-tag">Education</span>
            <h2>Academic Background</h2>
          </div>
          <div className="education-card">
            <div className="edu-icon"><GraduationCap size={26} /></div>
            <div>
              <h3>University of Management and Technology (UMT)</h3>
              <p>Lahore, Pakistan</p>
              <p className="degree">Computer Science / IT Student</p>
              <p className="muted">Expected Graduation: [ADD YEAR]</p>
            </div>
          </div>
          <div className="course-grid">
            <h3>Relevant Coursework</h3>
            <div className="course-list">
              {educationCourses.map((course) => (
                <div className="course-pill" key={course}>{course}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-shell">
          <div className="section-heading center">
            <span className="section-tag">Achievements</span>
            <h2>Certifications &amp; Achievements</h2>
          </div>
          <div className="cert-grid">
            {certs.map((cert) => (
              <article className="cert-card" key={cert.name + cert.year}>
                <div className="cert-badge"><CheckCircle2 size={18} /></div>
                <h3>{cert.name}</h3>
                <p>{cert.organization}</p>
                <span>{cert.year}</span>
                <a href={cert.link}>Credential Link</a>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section-shell journey-section">
          <div className="section-heading center">
            <span className="section-tag">Journey</span>
            <h2>My Journey</h2>
          </div>
          <div className="journey-timeline">
            {journey.map((item, index) => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-node" />
                <div className="timeline-card">
                  <span className="timeline-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <div className="contact-box">
            <div className="contact-copy">
              <span className="section-tag">Contact</span>
              <h2>Let&apos;s Build Something Great.</h2>
              <p>
                Have an idea, project, internship opportunity, or simply want to connect? Feel free to reach out.
              </p>
                <div className="social-row contact-socials">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link social-link--icon" aria-label="GitHub">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link social-link--icon" aria-label="LinkedIn">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="social-link social-link--icon" aria-label="Email">
                  <Mail size={18} />
                  <span>{personalInfo.email}</span>
                </a>
              </div>
            </div>
            <form className="contact-form">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="your@email.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea rows="5" placeholder="Tell me about your idea..." />
              </label>
              <button type="submit" className="primary-btn">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <section className="section-shell connect-section">
        <motion.div
          className="connect-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="connect-header">
            <span className="section-tag">Connect</span>
            <h3>Let&apos;s Connect</h3>
          </div>
          <p>
            Interested in working together, discussing technology, or exploring an opportunity? I&apos;d love to hear from you.
          </p>
          <div className="connect-email-block">
            <Mail size={18} />
            <span>{personalInfo.email}</span>
          </div>
          <div className="connect-actions">
            <a href={`mailto:${personalInfo.email}`} className="primary-btn">
              <Mail size={18} /> Email Me
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="secondary-btn">
              <Github size={18} /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-btn">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <h4>{personalInfo.name}</h4>
          <p>Web Developer • Networking Enthusiast • Database Learner</p>
        </div>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
        <p className="copyright">© 2026 Hafiz Ali Iftikhar. All rights reserved.</p>
      </footer>

      <button
        type="button"
        className={showTop ? 'back-to-top visible' : 'back-to-top'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

export default App;
