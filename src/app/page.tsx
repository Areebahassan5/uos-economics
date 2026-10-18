"use client";

import { useState } from "react";

const faculty = [
  { name: "Dr. Mahmood ul Hasan", role: "Associate Professor / Chairman", initials: "MH" },
  { name: "Dr. Masood Sarwar Awan", role: "Professor", initials: "MA" },
  { name: "Dr. Nisar Ahmad", role: "Associate Professor", initials: "NA" },
  { name: "Dr. Shahzad Mushtaq", role: "Assistant Professor", initials: "SM" },
  { name: "Dr. Saif Ullah", role: "Assistant Professor", initials: "SU" },
  { name: "Dr. Zahid Ullah Khan", role: "Lecturer", initials: "ZK" },
];

const programs = [
  { number: "01", title: "BS Economics", duration: "4 Years", detail: "Build a strong foundation in economic theory, policy, and analysis.", level: "Undergraduate" },
  { number: "02", title: "BS Economics with Data Science", duration: "4 Years", detail: "Explore economics alongside data-driven decision-making.", level: "Undergraduate" },
  { number: "03", title: "MSc Economics", duration: "2 Years", detail: "Develop advanced understanding of economic systems and policies.", level: "Graduate" },
  { number: "04", title: "PhD Economics", duration: "Research degree", detail: "Contribute original research to the field of economics.", level: "Research" },
];

const researchAreas = [
  { icon: "↗", title: "Development Economics", text: "Explore economic growth, poverty reduction, and inclusive development." },
  { icon: "◈", title: "Public Policy", text: "Understand public finance, policy choices, and their social impact." },
  { icon: "⌁", title: "Data & Econometrics", text: "Use evidence, statistics, and analytical methods to study markets." },
];

export default function EconomicsHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [facultySearch, setFacultySearch] = useState("");
  const [programFilter, setProgramFilter] = useState("All");

  const filteredFaculty = faculty.filter((person) =>
    `${person.name} ${person.role}`.toLowerCase().includes(facultySearch.toLowerCase())
  );

  const filteredPrograms = programs.filter((program) =>
    programFilter === "All" || program.level === programFilter
  );

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        UNIVERSITY OF SARGODHA
        <span className="announcement-divider">/</span>
        DEPARTMENT OF ECONOMICS
        <a href="https://su.edu.pk/department/economics" target="_blank" rel="noreferrer">
          Official department website ↗
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Economics Department home">
          <div className="brand-seal">U<span>o</span>S</div>
          <div className="brand-copy">
            <strong>ECONOMICS</strong>
            <span>UNIVERSITY OF SARGODHA</span>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Programs", "#programs"],
            ["Faculty", "#faculty"],
            ["Research", "#research"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Get in touch <span>↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">
            <span /> LEARN · QUESTION · TRANSFORM
          </div>
          <h1>
            Understanding
            <br />
            the world<span className="gold-dot">.</span>
            <br />
            <em>Shaping its future.</em>
          </h1>
          <p>
            Explore how economies work, how policies shape our lives, and how
            thoughtful research can create opportunities for a better tomorrow.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#programs">
              Explore our programs <span>↗</span>
            </a>
            <a className="button button-outline" href="#about">
              Discover the department <span>↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            ACADEMICS · RESEARCH · IMPACT
          </div>
        </div>
        <div className="hero-side-label">DEPARTMENT OF ECONOMICS · SARGODHA, PAKISTAN</div>
        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </a>
      </section>

      <section className="quick-strip">
        <div className="quick-intro">A place to think beyond the numbers.</div>
        <a href="#programs"><span>01</span> Academic programs <b>↗</b></a>
        <a href="#faculty"><span>02</span> Faculty & mentorship <b>↗</b></a>
        <a href="#research"><span>03</span> Research & ideas <b>↗</b></a>
      </section>

      <section className="section about-section" id="about">
        <div className="section-kicker"><span>01</span> GET TO KNOW US</div>
        <div className="about-grid">
          <div>
            <h2 className="section-heading">
              Economics is more
              <br />
              than <em>numbers.</em>
            </h2>
            <div className="gold-rule" />
          </div>
          <div className="about-copy">
            <p className="lead">
              It is the study of choices, opportunities, and the forces that
              shape our everyday lives.
            </p>
            <p>
              The Department of Economics at the University of Sargodha
              encourages students and researchers to examine economic
              challenges, understand public policy, and contribute to
              sustainable growth through learning and research.
            </p>
            <a className="text-link" href="https://su.edu.pk/department/economics" target="_blank" rel="noreferrer">
              Explore the official department profile <span>↗</span>
            </a>
          </div>
        </div>

        <div className="mission-grid">
          <article className="mission-card">
            <span className="card-index">A / OUR VISION</span>
            <div className="mission-icon">◎</div>
            <h3>Think globally.</h3>
            <p>
              Strive for excellence in academics and research, contributing
              to a modern economy in an increasingly connected world.
            </p>
          </article>
          <article className="mission-card mission-card-dark">
            <span className="card-index">B / OUR MISSION</span>
            <div className="mission-icon">✳</div>
            <h3>Make knowledge matter.</h3>
            <p>
              Develop capable professionals and thoughtful leaders equipped
              to respond to local and global economic challenges.
            </p>
          </article>
          <article className="mission-card">
            <span className="card-index">C / OUR APPROACH</span>
            <div className="mission-icon">⌘</div>
            <h3>Question. Research. Grow.</h3>
            <p>
              Connect economic theory with evidence, critical thinking,
              research, and practical understanding.
            </p>
          </article>
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-heading">
          <span>THE BIGGER PICTURE</span>
          <h2>Ideas that move<br /><em>economies forward.</em></h2>
        </div>
        <div className="stat-item"><strong>01</strong><span>Critical<br />thinking</span></div>
        <div className="stat-item"><strong>02</strong><span>Evidence-led<br />research</span></div>
        <div className="stat-item"><strong>03</strong><span>Real-world<br />perspectives</span></div>
        <div className="stats-footnote">Our focus is on knowledge, curiosity, and meaningful contribution.</div>
      </section>

      <section className="section programs-section" id="programs">
        <div className="section-kicker"><span>02</span> FIND YOUR PATH</div>
        <div className="section-title-row">
          <div>
            <h2 className="section-heading">A degree with<br /><em>a bigger picture.</em></h2>
            <p className="section-subtitle">
              Discover pathways to understanding markets, policy, and economic change.
            </p>
          </div>
          <div className="filter-tabs" aria-label="Filter degree programs">
            {["All", "Undergraduate", "Graduate", "Research"].map((filter) => (
              <button
                key={filter}
                className={programFilter === filter ? "filter-tab active" : "filter-tab"}
                onClick={() => setProgramFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="program-grid">
          {filteredPrograms.map((program) => (
            <article className="program-card" key={program.number}>
              <div className="program-top">
                <span className="program-number">{program.number}</span>
                <span className="program-arrow">↗</span>
              </div>
              <span className="program-level">{program.level}</span>
              <h3>{program.title}</h3>
              <p>{program.detail}</p>
              <div className="program-bottom">
                <span>Duration</span>
                <strong>{program.duration}</strong>
              </div>
            </article>
          ))}
        </div>
        <p className="small-note">
          Program availability, eligibility, and duration should be confirmed
          using the university's current official admissions information.
        </p>
        <a className="button button-navy" href="https://www.su.edu.pk/Faculty-of-Social-Sciences/degrees" target="_blank" rel="noreferrer">
          View official degree listings <span>↗</span>
        </a>
      </section>

      <section className="faculty-section" id="faculty">
        <div className="section faculty-inner">
          <div className="section-kicker light-kicker"><span>03</span> PEOPLE WHO INSPIRE</div>
          <div className="section-title-row faculty-title-row">
            <div>
              <h2 className="section-heading light-heading">
                Guided by experience.<br /><em>Driven by curiosity.</em>
              </h2>
              <p className="section-subtitle light-subtitle">
                Meet a selection of faculty members listed on the university's department page.
              </p>
            </div>
            <label className="faculty-search">
              <span>⌕</span>
              <input
                type="search"
                value={facultySearch}
                onChange={(event) => setFacultySearch(event.target.value)}
                placeholder="Search faculty..."
                aria-label="Search faculty members"
              />
            </label>
          </div>

          <div className="faculty-grid">
            {filteredFaculty.map((person, index) => (
              <article className="faculty-card" key={person.name}>
                <div className={`faculty-avatar avatar-${index % 3}`}>
                  {person.initials}
                </div>
                <div className="faculty-info">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <span>DEPARTMENT OF ECONOMICS</span>
                </div>
                <span className="faculty-card-arrow">↗</span>
              </article>
            ))}
            {filteredFaculty.length === 0 && (
              <p className="no-results">No matching faculty members. Try another name.</p>
            )}
          </div>
          <a className="faculty-link" href="https://su.edu.pk/department/economics" target="_blank" rel="noreferrer">
            See the official department page for the full faculty directory <span>↗</span>
          </a>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-kicker"><span>04</span> QUESTIONS THAT MATTER</div>
        <div className="research-grid">
          <div>
            <h2 className="section-heading">
              Research with<br /><em>real-world purpose.</em>
            </h2>
            <p className="section-subtitle research-intro">
              Economic research helps us understand complex challenges,
              evaluate choices, and find better ways forward.
            </p>
            <a className="text-link" href="https://su.edu.pk/department/economics" target="_blank" rel="noreferrer">
              Discover university research <span>↗</span>
            </a>
          </div>
          <div className="research-list">
            {researchAreas.map((area, index) => (
              <article className="research-item" key={area.title}>
                <span className="research-number">0{index + 1}</span>
                <div className="research-symbol">{area.icon}</div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
                <span className="research-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <p>
          The purpose of economics is to help us understand the choices
          societies make — and the possibilities they can create.
        </p>
        <span>A QUESTION-DRIVEN APPROACH TO LEARNING</span>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div>
            <div className="section-kicker light-kicker"><span>05</span> START A CONVERSATION</div>
            <h2 className="section-heading light-heading">
              Your next chapter<br /><em>starts with a question.</em>
            </h2>
            <p className="contact-description">
              For current admissions, program details, and official department
              information, connect through the University of Sargodha.
            </p>
            <a className="button button-gold" href="https://su.edu.pk/department/economics" target="_blank" rel="noreferrer">
              Visit official website <span>↗</span>
            </a>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <span>VISIT</span>
              <p>Ibne Rushd Block<br />University of Sargodha<br />Sargodha, Punjab, Pakistan</p>
            </div>
            <div className="contact-detail">
              <span>CALL</span>
              <a href="tel:0489230816">048 9230816</a>
            </div>
            <div className="contact-detail">
              <span>ONLINE</span>
              <a href="https://su.edu.pk/department/economics" target="_blank" rel="noreferrer">
                su.edu.pk ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <div className="brand-seal">U<span>o</span>S</div>
          <div className="brand-copy">
            <strong>ECONOMICS</strong>
            <span>UNIVERSITY OF SARGODHA</span>
          </div>
        </a>
        <p>Learning today. Understanding tomorrow.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom">
          <span>Department of Economics · University of Sargodha</span>
          <span>Academic information should be verified through official university sources.</span>
        </div>
      </footer>
    </main>
  );
}