:root {
  --bg: #0d1117;
  --bg-card: #161b22;
  --text: #e6edf3;
  --text-muted: #8b949e;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --border: #30363d;
}

[data-theme="light"] {
  --bg: #ffffff;
  --bg-card: #f6f8fa;
  --text: #1f2328;
  --text-muted: #656d76;
  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --border: #d0d7de;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  transition: background-color 0.25s, color 0.25s;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  gap: 0.5rem;
}

.icon-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
}

.icon-btn:hover {
  border-color: var(--accent);
}

/* Hero */
.hero {
  padding: 5.5rem 1.5rem 4rem;
}

.hero-tag {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 680px;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background-color: var(--accent);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: var(--accent-hover);
}

.btn-secondary {
  background-color: var(--bg-card);
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--accent);
}

/* Sections */
.section {
  padding: 4rem 1.5rem;
  border-top: 1px solid var(--border);
}

.section-title {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

/* About */
.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2.5rem;
}

.about-text p {
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.skills-box h3 {
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tags span {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--text);
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.timeline-header h3 {
  font-size: 1.15rem;
}

.company {
  color: var(--accent);
  font-weight: 500;
  font-size: 0.95rem;
}

.period {
  font-size: 0.85rem;
  color: var(--text-muted);
  background: var(--bg);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  border: 1px solid var(--border);
}

.timeline-item ul {
  padding-left: 1.2rem;
  color: var(--text-muted);
}

.timeline-item li {
  margin-bottom: 0.5rem;
}

/* Cards */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1.25rem;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.2s, border-color 0.2s;
}

.card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.card-tag {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.card p {
  color: var(--text-muted);
  font-size: 0.92rem;
}

/* Education */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.edu-block {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
}

.edu-block h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--accent);
}

.clean-list {
  list-style: none;
}

.clean-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.93rem;
  color: var(--text-muted);
}

.clean-list li:last-child {
  border-bottom: none;
}

.clean-list strong {
  color: var(--text);
}

/* Contact & Footer */
.contact-section {
  text-align: center;
}

.contact-section p {
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 2rem;
}

.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .about-grid {
    grid-template-columns: 1fr;
  }
}
