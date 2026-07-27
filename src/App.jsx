import { Link, NavLink, Route, Routes } from "react-router-dom";
import logo from "../image/logoProtectAssistance.jpg";
import heroBg from "../image/imageaccueil.jpg";
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

const features = [
  {
    title: "Alerte enlèvement",
    text: "Déclenchez rapidement une alerte en cas d’enlèvement et prévenez automatiquement vos contacts.",
    image: enlevementImg,
  },
  {
    title: "Détection d’agression",
    text: "À partir de 3 secousses brusques, l’application détecte une situation d’urgence.",
    image: agressionImg,
  },
  {
    title: "Phrase secrète",
    text: "Définissez une phrase secrète pour activer une alerte discrète en cas de danger.",
    image: secretImg,
  },
  {
    title: "Mode panique",
    text: "Un simple appui prolongé déclenche un message d’alerte au sein d’un workflow automatique.",
    image: paniqueImg,
  },
  {
    title: "Jet du téléphone",
    text: "Le téléphone peut être utilisé comme signal d’alerte en cas de menace immédiate.",
    image: jetImg,
  },
  {
    title: "Capture audio et vidéo",
    text: "Enregistrez des preuves utiles pour sécuriser les interventions et les déclarations.",
    image: captureImg,
  },
  {
    title: "Alarme maison",
    text: "Analyse intelligente des incidents domestiques à partir de sons ou d’événements détectés.",
    image: alarmeImg,
  },
  {
    title: "Accident de voiture",
    text: "Détection automatique d’un arrêt brutal et envoi d’une alerte immédiate.",
    image: voitureImg,
  },
  {
    title: "GPS en temps réel",
    text: "Partagez votre position géographique instantanément lors d’une alerte.",
    image: gpsImg,
  },
  {
    title: "Détection de chute",
    text: "Recevez une alerte automatique en cas de chute ou d’incident physique.",
    image: chuteImg,
  },
  {
    title: "Protection Alzheimer",
    text: "Définissez une zone de sécurité et recevez un signal si la personne en sort.",
    image: alzheimerImg,
  },
];

const plans = [
  {
    name: "Essentiel",
    price: "19€ / mois",
    description: "Pour une protection de base avec les alertes prioritaires.",
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
      "Détection avancée multi-situations",
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
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactMail = (event) => {
    event.preventDefault();
    window.location.href =
      "mailto:serviceclient@protectassistance-app.fr?subject=Demande%20Protect%20Assistance";
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
              <p>Votre ange gardien numérique</p>
            </div>
          </Link>

          <div className="nav-links">
            <button
              type="button"
              onClick={() => scrollToSection("fonctionnalites")}
            >
              Fonctionnalités
            </button>
            <button type="button" onClick={() => scrollToSection("tarifs")}>
              Tarifs
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("telechargement")}
            >
              Télécharger
            </button>
            <button type="button" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(2,21,50,.92), rgba(2,21,50,.70)), url(${heroBg})`,
          }}
        >
          <div className="container hero-content">
            <div className="hero-badge">
              Protection intelligente • Réactivité immédiate
            </div>
            <h2>Transformez votre téléphone en dispositif d’alerte autonome</h2>
            <p>
              Une application de sécurité personnelle conçue pour détecter,
              alerter et agir rapidement en cas d’urgence.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToSection("fonctionnalites")}
              >
                Découvrir les fonctionnalités
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollToSection("telechargement")}
              >
                Télécharger l’application
              </button>
            </div>
          </div>
        </section>

        <section id="fonctionnalites" className="section container">
          <SectionTitle
            eyebrow="Fonctionnalités"
            title="Une protection complète, pensée pour l’urgence"
            text="Des mécanismes de détection adaptés à plusieurs situations de risque, pour une réaction rapide et fiable."
          />
          <div className="feature-grid">
            {features.map((feature) => (
              <article
                className="feature-card"
                key={feature.title}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(2,21,50,.72), rgba(2,21,50,.82)), url(${feature.image})`,
                }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tarifs" className="section pricing-section">
          <div className="container">
            <SectionTitle
              eyebrow="Abonnements"
              title="Choisissez la formule la plus adaptée"
              text="Des offres pensées pour une protection simple, robuste et scalable."
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
                  <a href="#contact" className="btn btn-primary">
                    Nous contacter
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="telechargement"
          className="section container download-section"
        >
          <div className="download-card">
            <div>
              <SectionTitle
                eyebrow="Téléchargement"
                title="Accédez à Protect Assistance en quelques secondes"
                text="Scannez le QR code ou choisissez votre plateforme pour installer l’application sur votre appareil."
              />
              <div className="hero-actions download-actions">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Télécharger sur Android
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-tertiary"
                >
                  Télécharger sur iOS
                </a>
              </div>
            </div>
            <div className="qr-card">
              <img src={qrCodeImg} alt="QR code de téléchargement" />
              <p>Scannez pour télécharger</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div className="contact-content">
              <SectionTitle
                eyebrow="Contact"
                title="Une question ? Nous sommes à votre écoute"
                text="Notre équipe peut vous accompagner dans votre projet de sécurité personnelle ou professionnelle."
              />

              <a
                href="https://outlook.office.com/mail/deeplink/compose?to=serviceclient@protectassistance-app.fr&subject=Demande%20Protect%20Assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mail-button"
              >
                serviceclient@protectassistance-app.fr
              </a>
            </div>

            <div className="contact-box">
              <p>
                <strong>Disponibilité</strong>
              </p>
              <p>Support réactif</p>
              <p>Réponse sous 24h</p>
              <p>Protection et confidentialité au cœur du service</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Protect Assistance. Tous droits réservés.</p>
          <div className="footer-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">
              Politique de confidentialité
            </Link>
            <Link to="/cgv">CGV</Link>
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
              <p>Votre ange gardien numérique</p>
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
