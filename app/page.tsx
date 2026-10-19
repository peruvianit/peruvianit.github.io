const skills = [
  {
    number: "01",
    title: "Backend engineering",
    items: ["Java", "Spring Boot / Spring Web", "Quarkus / Jakarta EE", "REST API / Web Services", "Unit Testing"],
  },
  {
    number: "02",
    title: "Software architecture",
    items: ["Microservices Architecture", "Event-Driven Architecture", "Distributed Systems", "Design Patterns & Clean Code", "Transactional Outbox / Inbox"],
  },
  {
    number: "03",
    title: "Data & delivery",
    items: ["PostgreSQL / Oracle", "Redis (Caching)", "Artemis", "Docker & Kubernetes", "CI/CD Pipelines & Cloud (Azure)"],
  },
  {
    number: "04",
    title: "Technical leadership",
    items: ["Technical Analysis & Design", "Team Mentoring & Coaching", "Code Review & Standards", "Agile / Scrum Methodologies", "Problem Solving & Troubleshooting"],
  },
];

const experiences = [
  {
    sector: "Pubblica amministrazione",
    title: "Servizi backend e workflow digitali",
    description:
      "Sviluppo di API, processi amministrativi, monitoraggio dati e produzione documentale per piattaforme istituzionali.",
    stack: "Java · Spring · Quarkus · PostgreSQL · Oracle",
  },
  {
    sector: "Trasporti",
    title: "Bigliettazione elettronica nazionale",
    description:
      "Contributo a un sistema centrale per la gestione di tariffe e reti del trasporto nazionale e regionale.",
    stack: "Java EE · REST · Oracle · Red Hat Linux",
  },
  {
    sector: "Telecomunicazioni",
    title: "Monitoraggio di reti complesse",
    description:
      "Sistemi per l’analisi del traffico TCP/IP, DHCP, RADIUS e IPTV, con particolare attenzione a prestazioni e affidabilità.",
    stack: "Java · C/C++ · C# · Linux · Network protocols",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sergio Arellano, torna all'inizio">
          <img className="brand-avatar" src="/sergio-avatar.png" alt="Avatar di Sergio Arellano" />
          <span className="brand-initials">SA<span>.</span></span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#profilo">Profilo</a>
          <a href="#competenze">Competenze</a>
          <a href="#esperienza">Esperienza</a>
          <a href="#contatti">Contatti</a>
        </nav>
        <a className="header-cta" href="#contatti">Parliamone <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Senior Software Engineer · Roma, Italia</p>
          <h1>
            25 anni tra codice,<br />
            <em>sistemi complessi</em><br />
            e soluzioni affidabili.
          </h1>
          <p className="hero-lead">
            Oltre 25 anni di esperienza nella progettazione e nello sviluppo di
            applicazioni enterprise, architetture distribuite e soluzioni software
            mission critical.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#progetto">Scopri il mio lavoro <span>↓</span></a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/sergioarellanodiaz/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Architettura di sistema distribuito">
          <p className="visual-kicker">Progetto attuale · architettura distribuita</p>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="satellite-ring satellite-ring-inner">
            <div className="satellite-slot satellite-slot-a"><div className="node"><span>01</span>Spring Boot</div></div>
            <div className="satellite-slot satellite-slot-b"><div className="node"><span>02</span>Outbox</div></div>
            <div className="satellite-slot satellite-slot-c"><div className="node"><span>03</span>Artemis</div></div>
            <div className="satellite-slot satellite-slot-d"><div className="node"><span>04</span>Inbox</div></div>
          </div>
          <div className="satellite-ring satellite-ring-outer">
            <div className="satellite-slot satellite-slot-e"><div className="node node-small"><span>05</span>Oracle</div></div>
            <div className="satellite-slot satellite-slot-f"><div className="node node-small"><span>06</span>.NET Core</div></div>
            <div className="satellite-slot satellite-slot-g"><div className="node node-small"><span>07</span>Azure</div></div>
            <div className="satellite-slot satellite-slot-h"><div className="node node-small"><span>08</span>IntelliJ IDEA</div></div>
            <div className="satellite-slot satellite-slot-i"><div className="node node-small"><span>09</span>Codex</div></div>
            <div className="satellite-slot satellite-slot-j"><div className="node node-small"><span>10</span>Red Hat OpenShift</div></div>
          </div>
          <div className="core"><small>PROGETTO</small><strong>ATTUALE</strong><small>ARCHITETTURA</small></div>
        </div>

        <div className="hero-stats">
          <div><strong>25+</strong><span>Anni di esperienza</span></div>
          <div><strong>4</strong><span>Settori enterprise</span></div>
          <div><strong>∞</strong><span>Problemi da risolvere</span></div>
        </div>
      </section>

      <section className="statement" id="profilo">
        <p className="section-label">Profilo / 01</p>
        <div className="statement-content">
          <h2>Esperienza tecnica.<br /><em>Visione architetturale.</em></h2>
          <div>
            <p>
              Sono un analista programmatore specializzato nella progettazione e
              realizzazione di sistemi software enterprise. Traduco requisiti complessi
              in architetture sostenibili, leggibili e pronte a evolvere.
            </p>
            <p>
              Ho lavorato in pubblica amministrazione, trasporti, telecomunicazioni e
              gestione aziendale, collaborando con team multidisciplinari e internazionali.
            </p>
          </div>
        </div>
      </section>

      <section className="expertise" id="competenze">
        <div className="section-heading">
          <div>
            <p className="section-label">Competenze / 02</p>
            <h2>Dalla strategia<br />alla produzione.</h2>
          </div>
          <p>Competenze costruite sul campo, attraverso sistemi reali e problemi che richiedono rigore, collaborazione e responsabilità.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.number}>
              <span className="skill-number">{skill.number}</span>
              <h3>{skill.title}</h3>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="project" id="progetto">
        <div className="project-intro">
          <p className="section-label section-label-light">In evidenza / Progetto attuale</p>
          <h2>Messaggi affidabili.<br /><em>Servizi indipendenti.</em></h2>
          <p>
            Un’applicazione enterprise distribuita, costruita con microservizi <strong>Spring Boot</strong> e <strong>.NET Core</strong>.
            La comunicazione asincrona utilizza Apache ActiveMQ Artemis, mentre i pattern Inbox e
            Transactional Outbox proteggono il sistema da perdite e duplicazioni. L&apos;intera
            architettura è orchestrata e gestita su piattaforme cloud-native tramite <strong>Kubernetes</strong> e <strong>OpenShift</strong>.
          </p>
          <div className="tags">
            <span>Spring Boot</span><span>.NET Core</span><span>Docker</span>
            <span>Artemis</span><span>Event-driven</span><span>Inbox / Outbox</span>
            <span>Kubernetes</span><span>OpenShift</span>
          </div>
        </div>

        <div className="flow" aria-label="Flusso del pattern Inbox Outbox">
          <div className="flow-line" />
          <div className="flow-item active"><span>01</span><strong>Artemis</strong><small>Message broker</small></div>
          <div className="flow-item"><span>02</span><strong>Inbox</strong><small>Idempotency check</small></div>
          <div className="flow-item"><span>03</span><strong>Service</strong><small>Business processing</small></div>
          <div className="flow-item"><span>04</span><strong>Outbox</strong><small>Reliable event</small></div>
          <div className="flow-item"><span>05</span><strong>Consumer</strong><small>Safe processing</small></div>
        </div>

        <div className="project-benefits">
          <div><span>01</span><p>Consistenza tra database e broker</p></div>
          <div><span>02</span><p>Protezione dai messaggi duplicati</p></div>
          <div><span>03</span><p>Retry controllati e tracciabilità</p></div>
        </div>
      </section>

      <section className="experience" id="esperienza">
        <div className="section-heading">
          <div>
            <p className="section-label">Esperienza / 03</p>
            <h2>Sistemi che contano.</h2>
          </div>
          <p>Una selezione di ambiti nei quali tecnologia, affidabilità e impatto operativo devono procedere insieme.</p>
        </div>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <article key={item.title}>
              <span className="experience-index">0{index + 1}</span>
              <div><p className="experience-sector">{item.sector}</p><h3>{item.title}</h3></div>
              <p>{item.description}</p>
              <small>{item.stack}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="principle">
        <p>“Il software migliore non è quello più complesso.<br />È quello che il team può comprendere, mantenere e far evolvere.”</p>
      </section>

      <footer id="contatti">
        <p className="section-label section-label-light">Contatti / 04</p>
        <div className="footer-main">
          <div>
            <h2>Esperienza, metodo<br /><em>e visione tecnica.</em></h2>
            <p>Un percorso costruito progettando sistemi enterprise affidabili, affrontando problemi complessi e condividendo soluzioni concrete.</p>
          </div>
          <a className="contact-circle" href="mailto:sergioarellanodiaz@gmail.com"><span>Scrivimi</span><strong>↗</strong></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sergio Arellano</span>
          <div>
            <a href="https://github.com/peruvianit" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/sergioarellanodiaz/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <a href="#top">Torna su ↑</a>
        </div>
      </footer>
    </main>
  );
}
