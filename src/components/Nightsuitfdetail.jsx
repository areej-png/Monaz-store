// components/NightSuitFabricDetail.jsx
import { FABRIC_TYPES, FABRIC_SEASON_CHART, FABRIC_TAGS } from "../Data/nspageData";
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

export default function NightSuitFabricDetail({ post, onBack, initialLang = "en" }) {
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

      <span className="pill ns-pill">{t(post.category)}</span>
      <div className="blog-hero ns-hero">
        <h1>{t(post.title)}</h1>
        <p>{t(post.subtitle)}</p>
      </div>

      <p className="blog-intro">
        {lang === "en"
          ? "The fabric of your night suit is what decides whether you'll sleep well or not. Here is a detailed breakdown of every popular fabric — pros, cons and when to use it."
          : "Night suit ka fabric hi decide karta hai ke aapki neend achhi hogi ya nahi. Yahan har popular fabric ka detailed breakdown hai — pros, cons aur kab use karein."}
      </p>

      {/* Fabric Cards */}
      <p className="section-title">
        {lang === "en" ? "Fabric Types — Complete Guide" : "Fabric Types — Complete Guide"}
      </p>
      <div className="ns-fabric-list">
        {FABRIC_TYPES.map((fabric) => (
          <div
            key={fabric.id}
            className="ns-fabric-card"
            style={{ borderTop: `4px solid ${fabric.accentColor}` }}
          >
            {/* Header */}
            <div className="ns-fabric-header" style={{ background: fabric.color }}>
              <span className="ns-fabric-emoji">{fabric.emoji}</span>
              <div>
                <div className="ns-fabric-name">{fabric.name}</div>
                <div className="ns-fabric-tagline">{t(fabric.tagline)}</div>
              </div>
              <div className="ns-fabric-seasons">
                {(fabric.season[lang] || fabric.season.en).map((s) => (
                  <span
                    key={s}
                    className="ns-season-badge"
                    style={{ background: fabric.accentColor }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="ns-fabric-body">
              <p className="ns-fabric-desc">{t(fabric.desc)}</p>
              <div className="ns-pros-cons">
                <div className="ns-pros">
                  <div className="ns-pros-title">✓ {lang === "en" ? "Benefits" : "Fayde"}</div>
                  {(fabric.pros[lang] || fabric.pros.en).map((p) => (
                    <div key={p} className="ns-pro-item">
                      <span className="fit-check ns-fit-check">✓</span>{p}
                    </div>
                  ))}
                </div>
                <div className="ns-cons">
                  <div className="ns-cons-title">✗ {lang === "en" ? "Drawbacks" : "Nuqsaan"}</div>
                  {(fabric.cons[lang] || fabric.cons.en).map((c) => (
                    <div key={c} className="ns-con-item">
                      <span className="ns-con-icon">✗</span>{c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="ns-fabric-tips">
                {fabric.tips.map((tip) => (
                  <div key={tip.title.en} className="tip-card ns-tip-card">
                    <div className="tip-title">{t(tip.title)}</div>
                    <div className="tip-body">{t(tip.body)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Season Chart */}
      <p className="section-title" style={{ marginTop: "2rem" }}>
        {lang === "en" ? "Season-wise Fabric Chart" : "Season-wise Fabric Chart"}
      </p>
      <div className="table-wrapper" style={{ marginBottom: "2rem" }}>
        <table className="size-table">
          <thead>
            <tr>
              <th>{lang === "en" ? "Season"      : "Mausam"}</th>
              <th>{lang === "en" ? "Best Fabric" : "Best Fabric"}</th>
              <th>{lang === "en" ? "Avoid"       : "Avoid Karein"}</th>
            </tr>
          </thead>
          <tbody>
            {FABRIC_SEASON_CHART.map((row, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700 }}>{t(row.season)}</td>
                <td style={{ color: "var(--ns-accent)", fontWeight: 600 }}>{t(row.best)}</td>
                <td style={{ color: "#D85A30" }}>{t(row.avoid)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="cta-banner ns-cta-banner">
        <div>
          <h3>{lang === "en" ? "Best night suits in the right fabric" : "Sahi fabric mein best night suits"}</h3>
          <p>{lang === "en" ? "Cotton, Satin, Fleece — all available" : "Cotton, Satin, Fleece — sab available hai"}</p>
        </div>
        <button className="btn-cta ns-btn-cta">
          {lang === "en" ? "View Collection →" : "Collection dekhein →"}
        </button>
      </div>

      <div className="tags">
        {FABRIC_TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}