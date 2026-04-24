// components/CareTipsDetail.jsx
import "../styles/blogPage.css";
import { CARE_SECTIONS, CARE_TAGS } from "../Data/bPageData";
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";

// ─── Image Placeholder ────────────────────────────────────────────────────────
function ImagePlaceholder({ text, alt }) {
  return (
    <div className="img-placeholder">
      <div className="img-placeholder-icon">📷</div>
      <div className="img-placeholder-text">{text}</div>
      <div className="img-placeholder-hint">
        Replace with: &lt;img src="your-image.jpg" alt="{alt}" /&gt;
      </div>
    </div>
  );
}

export default function CareTipsDetail({ post, onBack, initialLang = "en" }) {
  const { lang, toggle, t } = useLang(initialLang);

  return (
    <div className="blog-container">

      {/* Back + Toggle */}
      <div className="detail-top-bar">
        <button className="btn-back" onClick={onBack}>
          ← {lang === "en" ? "Go Back" : "Wapas jayein"}
        </button>
        <LangToggle lang={lang} onToggle={toggle} />
      </div>

      {/* Hero */}
      <span className="pill">{t(post.category)}</span>
      <div className="blog-hero" style={{ background: "#E1F5EE" }}>
        <h1 style={{ color: "#085041" }}>{t(post.title)}</h1>
        <p  style={{ color: "#0F6E56" }}>{t(post.subtitle)}</p>
      </div>

      {/* Intro */}
      <p className="blog-intro">
        {lang === "en"
          ? "Lingerie is an investment — proper care means your favourite bras and panties last significantly longer. Wrong washing and storage weakens the fabric, loosens the elastic and distorts the shape. This guide covers both: washing and storing."
          : "Lingerie ek investment hai — sahi care se aapki favorite bra aur panties kaafi zyada chalti hain. Galat washing aur storage se fabric weak hoti hai, elastic loose hoti hai aur shape bigad jaata hai. Yeh guide aapko dono cheezein sikhayegi — dhona aur store karna."}
      </p>

      {/* Sections: Washing + Storage */}
      {CARE_SECTIONS.map((section, idx) => (
        <div key={section.id} className="care-section">

          {/* Section Title */}
          <h2 className="section-title" style={{ color: "#085041" }}>
            {t(section.title)}
          </h2>

          {/* Steps + Image */}
          <div className="steps-diagram-grid" style={{ marginBottom: "1.5rem" }}>
            <div className="steps-col">
              {section.steps.map((s) => (
                <div key={s.num} className="step-card">
                  <div className="step-badge" style={{ background: "#9FE1CB", color: "#04342C" }}>
                    {s.num}
                  </div>
                  <div>
                    <div className="step-title" style={{ color: "#085041" }}>{t(s.title)}</div>
                    <div className="step-desc">{t(s.desc)}</div>
                  </div>
                </div>
              ))}
            </div>
            <ImagePlaceholder
              text={section.imagePlaceholder}
              alt={section.imageAlt}
            />
          </div>

          {/* Tips */}
          <p className="section-title" style={{ color: "#085041" }}>
            {lang === "en" ? `Pro tips — ${t(section.title)}` : `Pro tips — ${t(section.title)}`}
          </p>
          <div className="tips-grid" style={{ marginBottom: "1.5rem" }}>
            {section.tips.map((tip) => (
              <div key={tip.title.en} className="tip-card" style={{ borderLeftColor: "#1D9E75" }}>
                <div className="tip-title" style={{ color: "#085041" }}>{t(tip.title)}</div>
                <div className="tip-body">{t(tip.body)}</div>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <p className="section-title" style={{ color: "#085041" }}>
            {lang === "en" ? `Checklist — ${t(section.title)}` : `Checklist — ${t(section.title)}`}
          </p>
          <div
            className="fit-grid"
            style={{ marginBottom: idx < CARE_SECTIONS.length - 1 ? "2.5rem" : "2rem" }}
          >
            {section.checks.map((c) => (
              <div key={c.en} className="fit-item">
                <span className="fit-check" style={{ color: "#1D9E75" }}>✓</span>
                {t(c)}
              </div>
            ))}
          </div>

          {/* Divider between sections */}
          {idx < CARE_SECTIONS.length - 1 && (
            <div style={{ borderTop: "1px solid #9FE1CB", marginBottom: "2.5rem" }} />
          )}
        </div>
      ))}

      {/* CTA */}
      <div className="cta-banner" style={{ background: "#9FE1CB" }}>
        <div>
          <h3 style={{ color: "#04342C" }}>
            {lang === "en" ? "Start caring for your lingerie" : "Apni lingerie ki care shuru karein"}
          </h3>
          <p style={{ color: "#085041" }}>
            {lang === "en"
              ? "Premium lingerie care products available in our store"
              : "Premium lingerie care products hamare store mein available hain"}
          </p>
        </div>
        <button className="btn-cta" style={{ background: "#085041" }}>
          {lang === "en" ? "View Products →" : "Products dekhein →"}
        </button>
      </div>

      {/* Tags */}
      <div className="tags">
        {CARE_TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}