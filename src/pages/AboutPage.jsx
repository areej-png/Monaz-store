// pages/AboutPage.jsx
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import {
  aboutHero,
  brandStory,
  brandValues,
  teamMembers,
  aboutCta,
  trustBadges,
} from "../Data/aboutData";
import "../styles/AboutPage.css";

// Dynamic icon renderer
function Icon({ name, size = 28, color = "#c9898a" }) {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} color={color} strokeWidth={1.5} />;
}

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-text">
          <span className="about-pill">About Monaz</span>
          <h1>{aboutHero.heading}</h1>
          <p>{aboutHero.subtext}</p>
          <Link to="/category/new-arrivals" className="about-hero-btn">
            Shop Collection
          </Link>
        </div>
        <div className="about-hero-img">
          <img src={aboutHero.image} alt="Monaz hero" loading="lazy" />
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about-story">
        <div className="about-story-img">
          <img src={brandStory.image} alt="Our Story" loading="lazy" />
        </div>
        <div className="about-story-text">
          <span className="about-pill about-pill--dark">{brandStory.pill}</span>
          <h2>{brandStory.heading}</h2>
          {brandStory.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <span className="about-pill about-pill--center">What We Stand For</span>
        <div className="about-values-grid">
          {brandValues.map((v) => (
            <div key={v.title} className="about-value-card">
              <div className="about-value-icon">
                <Icon name={v.icon} size={28} />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      {/* <section className="about-team">
        <span className="about-pill about-pill--center">Meet the Team</span>
        <h2 className="about-team-heading">The People Behind Monaz</h2>
        <div className="about-team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="about-team-card">
              <img
                src={member.image}
                alt={member.name}
                className="about-team-img"
                loading="lazy"
              />
              <div className="about-team-info">
                <h3>{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section
        className="about-cta"
        style={{ backgroundImage: `url(${aboutCta.image})` }}
      >
        <div className="about-cta-overlay" />
        <div className="about-cta-content">
          <span className="about-pill about-pill--light">{aboutCta.pill}</span>
          <h2>{aboutCta.heading}</h2>
          <p>{aboutCta.subtext}</p>
          <Link to={aboutCta.buttonLink} className="about-cta-btn">
            {aboutCta.buttonText}
          </Link>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="about-trust">
        {trustBadges.map((b) => (
          <div key={b.title} className="about-trust-item">
            <div className="about-trust-icon">
              <Icon name={b.icon} size={24} color="#c9898a" />
            </div>
            <div>
              <strong>{b.title}</strong>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}