import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../image/logoProtectAssistance.jpg";
import enlevementImg from "../image/enlevement.jpg";
import agressionImg from "../image/agression.jpg";
import secretImg from "../image/secret.jpg";
import paniqueImg from "../image/panique.jpg";
import jetImg from "../image/jet.jpg";
import captureImg from "../image/capture.jpg";
import alarmeImg from "../image/alarme.jpg";
import voitureImg from "../image/voiture.jpg";
import gpsImg from "../image/gps.jpg";
import chuteImg from "../image/chute.png";
import alzheimerImg from "../image/alzheimer.jpg";
import qrCodeImg from "../image/qr-code.jpg";

const reasons = [
  {
    title: "Personnes âgées vivant seules",
    text: "Un accompagnement discret et fiable pour réagir dès qu’une situation devient dangereuse.",
    icon: "🛡️",
    tag: "Sécurité discrète",
  },
  {
    title: "Maladies neurodégénératives",
    text: "Des alertes intelligentes pour aider à sécuriser les personnes exposées au risque de disparition ou de chute.",
    icon: "🧭",
    tag: "Accompagnement",
  },
  {
    title: "Sécurité personnelle",
    text: "Une protection pensée pour les situations d’urgence, du simple incident à l’urgence critique.",
    icon: "⚡",
    tag: "Réactivité",
  },
];

const features = [
  {
    title: "Authentification sécurisée",
    text: "JWT, comptes personnels et comptes familiaux pour un accès garanti et maîtrisé.",
    image: enlevementImg,
  },
  {
    title: "Profil protégé",
    text: "Informations médicales, contacts d’urgence et données sensibles centralisées et protégées.",
    image: agressionImg,
  },
  {
    title: "Contacts prioritaires",
    text: "Gérez rapidement les personnes à prévenir en cas d’alerte ou de besoin immédiat.",
    image: secretImg,
  },
  {
    title: "Familles connectées",
    text: "Liez plusieurs membres de la famille et partagez l’état de sécurité en temps réel.",
    image: paniqueImg,
  },
  {
    title: "Alertes SOS",
    text: "Déclenchez une alerte robuste avec historique, position et preuves associées.",
    image: jetImg,
  },
  {
    title: "Preuves numériques",
    text: "Audio, photo et vidéo pour documenter les faits et sécuriser les démarches.",
    image: captureImg,
  },
  {
    title: "Zones de sécurité",
    text: "Définissez un périmètre sécurisé et recevez une notification automatique si la zone est franchie.",
    image: alarmeImg,
  },
  {
    title: "Localisation GPS",
    text: "Suivi en direct et intégration Google Maps pour une visibilité immédiate de l’état de la personne.",
    image: gpsImg,
  },
  {
    title: "Notifications instantanées",
    text: "Push notifications via Firebase Cloud Messaging pour une diffusion instantanée.",
    image: voitureImg,
  },
  {
    title: "Prévention des chutes",
    text: "Un système d’alerte autonome pour les incidents physiques et les situations de vulnérabilité.",
    image: chuteImg,
  },
  {
    title: "Protection Alzheimer",
    text: "Des garde-fous pour accompagner les personnes à risque de se perdre ou d’être prises au dépourvu.",
    image: alzheimerImg,
  },
];

const workflow = [
  {
    icon: "bi-exclamation-circle-fill",
    badge: "SOS",
    title: "Je déclenche l’alerte",
    description:
      "Un geste simple active un signal de secours avec toutes les informations essentielles.",
    accent: "accent-red",
  },
  {
    icon: "bi-shield-check",
    badge: "Système",
    title: "Le système sécurise et analyse",
    description:
      "La plateforme traite l’alerte, localise la situation et prépare les preuves utiles.",
    accent: "accent-blue",
  },
  {
    icon: "bi-people-fill",
    badge: "Contacts",
    title: "Les proches sont prévenus",
    description:
      "Les personnes à contacter reçoivent une notification claire et une vue d’ensemble rapide.",
    accent: "accent-gold",
  },
];

const securityPillars = [
  "JWT authentication",
  "APIs protégées",
  "Permissions basées sur les rôles",
  "Mots de passe hashés",
  "Validation robuste",
  "Infrastructure cloud sécurisée",
];

const plans = [
  {
    name: "Essentiel",
    price: "19€ / mois",
    description:
      "Pour une protection de base avec alertes prioritaires et suivi simple.",
    features: [
      "Alerte personnalisée",
      "Contacts de confiance",
      "Suivi de position",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "39€ / mois",
    description:
      "La solution complète pour une sécurité renforcée au quotidien.",
    features: [
      "Tout du plan Essentiel",
      "Capture audio/vidéo",
      "Détection avancée",
    ],
    featured: true,
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    description:
      "Adapté aux besoins spécifiques d’une structure ou d’un groupe.",
    features: [
      "Administration centralisée",
      "Support dédié",
      "Intégrations métiers",
    ],
    featured: false,
  },
];

const faqItems = [
  {
    question: "Comment fonctionne un SOS ?",
    answer:
      "Un simple geste dans l’application déclenche une alerte sécurisée, enregistre la position et notifie immédiatement les contacts prioritaires.",
  },
  {
    question: "Qui reçoit les notifications ?",
    answer:
      "Les proches désignés par l’utilisateur reçoivent des notifications push en temps réel ainsi qu’un accès à l’historique de l’alerte.",
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer:
      "Oui. Protect Assistance s’appuie sur l’authentification JWT, des APIs protégées, des mots de passe sécurisés et un stockage cloud contrôlé.",
  },
  {
    question: "Peut-on ajouter plusieurs membres de la famille ?",
    answer:
      "Oui. La plateforme permet de lier plusieurs personnes et de gérer les permissions selon le rôle de chaque membre.",
  },
  {
    question: "L’application fonctionne-t-elle hors ligne ?",
    answer:
      "La détection et l’envoi de certaines alertes restent possibles lorsque la connexion réseau est faible, avec synchronisation dès que la connexion revient.",
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{text}</p>
    </div>
  );
}

function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const securityRef = useRef(null);
  const workflowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-security");
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (securityRef.current) {
      observer.observe(securityRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (workflowRef.current) {
      observer.observe(workflowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openMailClient = (event) => {
    if (event) {
      event.preventDefault();
    }

    const mailtoLink =
      "mailto:serviceclient@protectassistance-app.fr?subject=Demande%20Protect%20Assistance";

    try {
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <Link to="/" className="brand">
            <img
              src={logo}
              alt="Logo Protect Assistance"
              className="logo-img"
            />
            <div>
              <h1>Protect Assistance</h1>
              <p>Sécurité personnelle intelligente</p>
            </div>
          </Link>

          <div className="nav-links">
            <button type="button" onClick={() => scrollToSection("pourquoi")}>
              Pourquoi
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("fonctionnalites")}
            >
              Fonctionnalités
            </button>
            <button type="button" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-shell">
            <div className="hero-copy">
              <p className="hero-badge">
                Protection intelligente • Réactivité immédiate
              </p>
              <h2>Votre proche est jamais seul, même loin de vous.</h2>
              <p className="hero-description">
                Protect Assistance réunit une application Android, une API
                robuste et un système d’alertes instantané pour protéger les
                personnes vulnérables au quotidien.
              </p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => scrollToSection("telechargement")}
                  style={{ cursor: "pointer" }}
                >
                  Télécharger l’application
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => scrollToSection("fonctionnalites")}
                  style={{ cursor: "pointer" }}
                >
                  Découvrir le produit
                </button>
              </div>
              <div className="hero-highlights">
                <span>JWT sécurisé</span>
                <span>GPS en temps réel</span>
                <span>Push notifications</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="screen-top">
                    <span className="chip">SOS actif</span>
                    <span className="signal-dot" />
                  </div>
                  <div className="screen-card main-card">
                    <p>État de sécurité</p>
                    <h3>Tout va bien</h3>
                    <div className="mini-bars">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="screen-card">
                    <p>Dernière alerte</p>
                    <strong>12:43 • Localisation partagée</strong>
                  </div>
                  <div className="screen-card compact">
                    <p>Contacts</p>
                    <strong>M. Dupont • Famille</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pourquoi" className="section">
          <div className="container">
            <div className="premium-story-shell">
              <div className="story-panel">
                <SectionTitle
                  eyebrow="Pourquoi Protect Assistance"
                  title="Une réponse moderne à l’urgence réelle"
                  text="Le produit a été pensé pour les personnes qui ont besoin d’un soutien instantané, sans complication et sans délai."
                />
                <div className="reason-grid premium-reasons">
                  {reasons.map((reason) => (
                    <article className="reason-card" key={reason.title}>
                      <div className="reason-icon" aria-hidden="true">
                        {reason.icon}
                      </div>
                      <div>
                        <span className="reason-tag">{reason.tag}</span>
                        <h3>{reason.title}</h3>
                        <p>{reason.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="story-panel about-panel">
                <div className="about-card premium-about">
                  <div>
                    <SectionTitle
                      eyebrow="À propos"
                      title="Notre mission : sécuriser sans surcharger"
                      text="Protect Assistance veut offrir une protection discrète, fiable et rapide à ceux qui ont besoin d’un soutien en cas d’urgence."
                    />
                    <p className="about-intro">
                      Chaque interaction a été pensée pour réduire la friction,
                      donner confiance et permettre une réaction rapide dans les
                      moments critiques.
                    </p>
                    <div className="about-pill-list">
                      <span>Réactivité immédiate</span>
                      <span>Protection discrète</span>
                      <span>Confiance renforcée</span>
                    </div>
                  </div>

                  <div className="about-visual">
                    <div className="about-stat-stack">
                      <div className="about-stat-chip">
                        <strong>24/7</strong>
                        <span>réactivité</span>
                      </div>
                      <div className="about-stat-chip">
                        <strong>100%</strong>
                        <span>sécurisé</span>
                      </div>
                      <div className="about-stat-chip">
                        <strong>1</strong>
                        <span>application</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fonctionnalites" className="section section-surface">
          <div className="container">
            <SectionTitle
              eyebrow="Fonctionnalités"
              title="Un produit complet, conçu pour la confiance"
              text="Chaque module a été conçu autour du besoin essentiel : réagir vite, protéger, documenter et rassurer."
            />
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <img src={feature.image} alt="" />
                  <div className="feature-overlay">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section workflow-section">
          <div className="container">
            <div ref={workflowRef} className="workflow-shell">
              <div className="row g-4 align-items-stretch">
                <div className="col-12 col-lg-7">
                  <div className="workflow-copy">
                    <p className="eyebrow">Comment ça marche</p>
                    <h2 className="workflow-title">
                      Une expérience simple, pensée pour agir vite
                    </h2>
                    <p className="workflow-description">
                      Trois étapes simples pour passer d’un besoin urgent à une
                      réponse claire.
                    </p>

                    <div className="workflow-timeline compact-timeline">
                      {workflow.map((step, index) => (
                        <article
                          className={`workflow-step-card ${index === 1 ? "is-active" : ""}`}
                          key={step.title}
                        >
                          <div className="workflow-step-marker">
                            <div
                              className={`workflow-icon-wrap ${step.accent}`}
                            >
                              <i className={`bi ${step.icon}`} />
                            </div>
                            <span className="workflow-step-badge">
                              {step.badge}
                            </span>
                          </div>
                          <div className="workflow-step-content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-5">
                  <div className="workflow-visual-card">
                    <div className="workflow-orb orb-one" />
                    <div className="workflow-orb orb-two" />
                    <div className="workflow-visual-pill">
                      <i className="bi bi-shield-fill-check" />
                      <span>Protection en 3 temps</span>
                    </div>
                    <div className="workflow-visual-grid">
                      <div className="workflow-mini-card">
                        <i className="bi bi-exclamation-circle-fill" />
                        <strong>SOS</strong>
                      </div>
                      <div className="workflow-mini-card">
                        <i className="bi bi-geo-alt-fill" />
                        <strong>Position</strong>
                      </div>
                      <div className="workflow-mini-card">
                        <i className="bi bi-people-fill" />
                        <strong>Contacts</strong>
                      </div>
                    </div>
                    <p className="workflow-visual-caption">
                      Une réponse claire, rapide et rassurante à chaque étape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-surface">
          <SectionTitle
            eyebrow="Sécurité"
            title="Une protection robuste, pensée pour l’urgence"
            text="Protect Assistance allie une architecture fiable, des mécanismes
          d’authentification solides et une expérience sécurisée, pour
          agir vite sans compromettre la confiance."
          />

          <div ref={securityRef} className="container security-revamp">
            <div className="security-hero-card">
              <div className="security-metrics">
                <div>
                  <strong className="security-number">24/7</strong>
                  <span>Réactivité</span>
                </div>

                <div>
                  <strong className="security-number">100%</strong>
                  <span>Confiance</span>
                </div>

                <div>
                  <strong className="security-number">0</strong>
                  <span>Compromis</span>
                </div>
              </div>

              <div className="security-stack">
                {securityPillars.map((item, index) => (
                  <div className="security-pill-card" key={item}>
                    <span className="security-index">0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="telechargement" className="section container">
          <div className="split-grid">
            <div>
              <SectionTitle
                eyebrow="Application mobile"
                title="Une expérience mobile élégante et utile"
                text="Le parcours utilisateur a été pensé pour rester simple, instinctif et rassurant dans les moments critiques."
              />
              <div className="feature-list">
                <div>
                  <strong>Utilisateur protégé</strong>
                  <p>
                    Profil, santé, contacts d’urgence et historique des alertes.
                  </p>
                </div>
                <div>
                  <strong>Membre de la famille</strong>
                  <p>
                    Visualisation des alertes et suivi de la position partagée.
                  </p>
                </div>
                <div>
                  <strong>Alertes en direct</strong>
                  <p>
                    GPS, notifications et zones de sécurité en une seule
                    expérience.
                  </p>
                </div>
              </div>
            </div>
            <div className="mockup-stage">
              <div className="download-qr-card">
                <div className="qr-placeholder" aria-label="Code QR décoratif">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=placeholder"
                    alt="QR Code"
                    className="qr-code"
                  />
                </div>
                <p className="qr-caption">
                  Disponible prochainement sur Google Play
                </p>
                <a
                  href="mailto:serviceclient@protectassistance-app.fr?subject=Demande%20Protect%20Assistance"
                  className="btn btn-primary"
                  onClick={(event) => openMailClient(event)}
                >
                  Télécharger l’application
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container">
            <SectionTitle
              eyebrow="Admin dashboard"
              title="Un futur tableau de bord prêt pour l’observation"
              text="L’interface d’administration permettra de superviser les utilisateurs, les alertes et les statistiques."
            />
            <div className="dashboard-grid">
              <article className="dashboard-card">
                <h3>Utilisateurs</h3>
                <p>Gestion des comptes, rôles et permissions.</p>
              </article>
              <article className="dashboard-card">
                <h3>Alertes</h3>
                <p>Suivi en temps réel des événements signalés.</p>
              </article>
              <article className="dashboard-card">
                <h3>Statistiques</h3>
                <p>Analyse des activités et indicateurs de sécurité.</p>
              </article>
              <article className="dashboard-card">
                <h3>Analytique</h3>
                <p>Vue d’ensemble des usages et des interventions.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="tarifs" className="section section-surface">
          <div className="container">
            <SectionTitle
              eyebrow="Abonnements"
              title="Des offres simples pour une protection de qualité"
              text="La solution grandit avec les besoins de chaque utilisateur ou de chaque structure."
            />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`pricing-card${plan.featured ? " featured" : ""}`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <span className="pricing-badge">Le plus populaire</span>
                  )}
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                  <p className="plan-description">{plan.description}</p>
                  <ul>
                    {plan.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    onClick={() => scrollToSection("contact")}
                    className="btn btn-primary"
                    style={{ cursor: "pointer" }}
                  >
                    Nous contacter
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section container">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions fréquentes"
            text="Tout ce qu’il faut savoir pour mieux comprendre le service et sa valeur."
          />
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <article
                className={`faq-item${openFaq === index ? " open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                {openFaq === index && <p>{item.answer}</p>}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-shell">
          <div id="contact" className="footer-contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h3>Une question, un besoin ou un partenariat ?</h3>
              <p>
                L’équipe Protect Assistance vous répond rapidement pour vous
                accompagner dans votre projet de sécurité personnelle.
              </p>
            </div>
            <button
              type="button"
              className="btn"
              style={{
                background: "#d91f26",
                color: "white",
                cursor: "pointer",
              }}
              onClick={(event) => openMailClient(event)}
            >
              Écrire à l’équipe
            </button>
          </div>

          <div className="footer-content">
            <p>© 2026 Protect Assistance. Tous droits réservés.</p>
            <div className="footer-links">
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/politique-confidentialite">
                Politique de confidentialité
              </Link>
              <Link to="/cgv">CGV</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function LegalPage({ title, intro, sections }) {
  return (
    <div className="legal-page-shell">
      <header className="header legal-header">
        <nav className="navbar container">
          <Link to="/" className="brand">
            <img
              src={logo}
              alt="Logo Protect Assistance"
              className="logo-img"
            />
            <div>
              <h1>Protect Assistance</h1>
              <p>Sécurité personnelle intelligente</p>
            </div>
          </Link>
        </nav>
      </header>

      <main className="container legal-content">
        <div className="legal-intro">
          <p className="eyebrow">Protection et transparence</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>

        {sections.map((section) => (
          <section key={section.title} className="legal-card">
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/mentions-legales"
        element={
          <LegalPage
            title="Mentions légales"
            intro="Les informations ci-dessous décrivent l’identité et les conditions d’utilisation du service Protect Assistance."
            sections={[
              {
                title: "Éditeur du site",
                text: "Protect Assistance est édité par la société Protect Assistance, responsable du site et du service proposé.",
              },
              {
                title: "Hébergement",
                text: "Le site est hébergé sur un serveur sécurisé dans le respect des standards de sécurité applicables.",
              },
              {
                title: "Contact",
                text: "Pour toute demande, vous pouvez nous contacter à l’adresse serviceclient@protectassistance-app.fr.",
              },
            ]}
          />
        }
      />
      <Route
        path="/mentions-legales.html"
        element={
          <LegalPage
            title="Mentions légales"
            intro="Les informations ci-dessous décrivent l’identité et les conditions d’utilisation du service Protect Assistance."
            sections={[
              {
                title: "Éditeur du site",
                text: "Protect Assistance est édité par la société Protect Assistance, responsable du site et du service proposé.",
              },
              {
                title: "Hébergement",
                text: "Le site est hébergé sur un serveur sécurisé dans le respect des standards de sécurité applicables.",
              },
              {
                title: "Contact",
                text: "Pour toute demande, vous pouvez nous contacter à l’adresse serviceclient@protectassistance-app.fr.",
              },
            ]}
          />
        }
      />
      <Route
        path="/politique-confidentialite"
        element={
          <LegalPage
            title="Politique de confidentialité"
            intro="Protect Assistance traite vos données avec rigueur et transparence dans le respect des exigences applicables."
            sections={[
              {
                title: "Collecte des données",
                text: "Nous collectons uniquement les données nécessaires au bon fonctionnement du service et à la sécurité des utilisateurs.",
              },
              {
                title: "Utilisation",
                text: "Les données sont utilisées pour fournir les services demandés, améliorer l’expérience et sécuriser l’accès.",
              },
              {
                title: "Protection",
                text: "Des mesures de sécurité adaptées sont mises en œuvre pour protéger vos données et votre vie privée.",
              },
            ]}
          />
        }
      />
      <Route
        path="/politique-confidentialite.html"
        element={
          <LegalPage
            title="Politique de confidentialité"
            intro="Protect Assistance traite vos données avec rigueur et transparence dans le respect des exigences applicables."
            sections={[
              {
                title: "Collecte des données",
                text: "Nous collectons uniquement les données nécessaires au bon fonctionnement du service et à la sécurité des utilisateurs.",
              },
              {
                title: "Utilisation",
                text: "Les données sont utilisées pour fournir les services demandés, améliorer l’expérience et sécuriser l’accès.",
              },
              {
                title: "Protection",
                text: "Des mesures de sécurité adaptées sont mises en œuvre pour protéger vos données et votre vie privée.",
              },
            ]}
          />
        }
      />
      <Route
        path="/cgv"
        element={
          <LegalPage
            title="Conditions générales de vente"
            intro="Les CGV définissent les conditions de souscription et d’utilisation des services Protect Assistance."
            sections={[
              {
                title: "Souscription",
                text: "L’abonnement est souscrit pour une durée définie selon la formule choisie par l’utilisateur.",
              },
              {
                title: "Paiements",
                text: "Les paiements sont traités selon les conditions détaillées lors de la souscription.",
              },
              {
                title: "Résiliation",
                text: "L’utilisateur peut mettre fin à son abonnement selon les conditions décrites dans l’offre contractuelle.",
              },
            ]}
          />
        }
      />
      <Route
        path="/cgv.html"
        element={
          <LegalPage
            title="Conditions générales de vente"
            intro="Les CGV définissent les conditions de souscription et d’utilisation des services Protect Assistance."
            sections={[
              {
                title: "Souscription",
                text: "L’abonnement est souscrit pour une durée définie selon la formule choisie par l’utilisateur.",
              },
              {
                title: "Paiements",
                text: "Les paiements sont traités selon les conditions détaillées lors de la souscription.",
              },
              {
                title: "Résiliation",
                text: "L’utilisateur peut mettre fin à son abonnement selon les conditions décrites dans l’offre contractuelle.",
              },
            ]}
          />
        }
      />
    </Routes>
  );
}

export default App;
