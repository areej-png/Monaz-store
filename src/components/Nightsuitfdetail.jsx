// components/NightSuitFabricDetail.jsx
import { FABRIC_TYPES, FABRIC_SEASON_CHART, FABRIC_TAGS } from "../Data/nsPageData";
import "../styles/blogPage.css";

export default function NightSuitFabricDetail({ post, onBack }) {
  return (
    <div className="blog-container">
      <button className="btn-back" onClick={onBack}>← Wapas jayein</button>
      <span className="pill ns-pill">{post.category}</span>

      <div className="blog-hero ns-hero">
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
      </div>

      <p className="blog-intro">
        Night suit ka fabric hi decide karta hai ke aapki neend achhi hogi ya nahi.
        Yahan har popular fabric ka detailed breakdown hai — pros, cons aur kab use karein.
      </p>

      {/* Fabric Cards */}
      <p className="section-title">Fabric Types — Complete Guide</p>
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
                <div className="ns-fabric-tagline">{fabric.tagline}</div>
              </div>
              <div className="ns-fabric-seasons">
                {fabric.season.map((s) => (
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
              <p className="ns-fabric-desc">{fabric.desc}</p>

              <div className="ns-pros-cons">
                <div className="ns-pros">
                  <div className="ns-pros-title">✓ Fayde</div>
                  {fabric.pros.map((p) => (
                    <div key={p} className="ns-pro-item">
                      <span className="fit-check ns-fit-check">✓</span>{p}
                    </div>
                  ))}
                </div>
                <div className="ns-cons">
                  <div className="ns-cons-title">✗ Nuqsaan</div>
                  {fabric.cons.map((c) => (
                    <div key={c} className="ns-con-item">
                      <span className="ns-con-icon">✗</span>{c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="ns-fabric-tips">
                {fabric.tips.map((t) => (
                  <div key={t.title} className="tip-card ns-tip-card">
                    <div className="tip-title">{t.title}</div>
                    <div className="tip-body">{t.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Season Chart */}
      <p className="section-title" style={{ marginTop: "2rem" }}>Season-wise Fabric Chart</p>
      <div className="table-wrapper" style={{ marginBottom: "2rem" }}>
        <table className="size-table">
          <thead>
            <tr>
              <th>Mausam</th>
              <th>Best Fabric</th>
              <th>Avoid Karein</th>
            </tr>
          </thead>
          <tbody>
            {FABRIC_SEASON_CHART.map((row) => (
              <tr key={row.season}>
                <td style={{ fontWeight: 700 }}>{row.season}</td>
                <td style={{ color: "var(--ns-accent)", fontWeight: 600 }}>{row.best}</td>
                <td style={{ color: "#D85A30" }}>{row.avoid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="cta-banner ns-cta-banner">
        <div>
          <h3>Sahi fabric mein best night suits</h3>
          <p>Cotton, Satin, Fleece — sab available hai</p>
        </div>
        <button className="btn-cta ns-btn-cta">Collection dekhein →</button>
      </div>

      <div className="tags">
        {FABRIC_TAGS.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}