// components/NightSuitStyleDetail.jsx
import { NIGHT_SUIT_STYLES, STYLE_OUTFIT_GUIDE, STYLE_TAGS } from "../Data/nsPageData";
import "../styles/blogPage.css";

export default function NightSuitStyleDetail({ post, onBack }) {
  return (
    <div className="blog-container">
      <button className="btn-back" onClick={onBack}>← Wapas jayein</button>
      <span className="pill ns-pill">{post.category}</span>

      <div className="blog-hero ns-hero">
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
      </div>

      <p className="blog-intro">
        Night suit sirf so jaane ke liye nahi — yeh aapka ghar ka outfit bhi hai.
        Comfort aur style dono ek saath mil sakte hain agar sahi style choose karein.
      </p>

      {/* Style Cards */}
      <p className="section-title">Night Suit Styles — Kaunsa Aapke Liye?</p>
      <div className="ns-style-list">
        {NIGHT_SUIT_STYLES.map((style) => (
          <div
            key={style.id}
            className="ns-style-card"
          >
            {/* Header */}
            <div className="ns-style-header" style={{ background: style.color }}>
              <span className="ns-style-emoji">{style.emoji}</span>
              <div className="ns-style-header-text">
                <div className="ns-style-name" style={{ color: style.accentColor }}>
                  {style.name}
                </div>
                <div className="ns-style-tagline">{style.tagline}</div>
              </div>
            </div>

            {/* Body */}
            <div className="ns-style-body">
              <p className="ns-fabric-desc">{style.desc}</p>

              <div className="ns-pros-cons">
                <div className="ns-pros">
                  <div className="ns-pros-title">✓ Best For</div>
                  {style.bestFor.map((b) => (
                    <div key={b} className="ns-pro-item">
                      <span className="fit-check ns-fit-check">✓</span>{b}
                    </div>
                  ))}
                </div>
                <div className="ns-cons">
                  <div className="ns-cons-title">⚠ Avoid When</div>
                  {style.avoid.map((a) => (
                    <div key={a} className="ns-con-item">
                      <span className="ns-con-icon">⚠</span>{a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="ns-fabric-tips">
                {style.tips.map((t) => (
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

      {/* Style × Occasion Guide */}
      <p className="section-title" style={{ marginTop: "2rem" }}>Kab Kaunsa Style?</p>
      <div className="table-wrapper" style={{ marginBottom: "2rem" }}>
        <table className="size-table">
          <thead>
            <tr>
              <th>Occasion / Season</th>
              <th>Best Style</th>
              <th>Kyun?</th>
            </tr>
          </thead>
          <tbody>
            {STYLE_OUTFIT_GUIDE.map((row) => (
              <tr key={row.season}>
                <td style={{ fontWeight: 700 }}>{row.season}</td>
                <td style={{ color: "var(--ns-accent)", fontWeight: 600 }}>{row.style}</td>
                <td style={{ color: "#666" }}>{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="cta-banner ns-cta-banner">
        <div>
          <h3>Apni favourite style dhoondh li?</h3>
          <p>Pyjama set se kaftan tak — sab available hai</p>
        </div>
        <button className="btn-cta ns-btn-cta">Collection dekhein →</button>
      </div>

      <div className="tags">
        {STYLE_TAGS.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}