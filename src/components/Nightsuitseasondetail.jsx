// components/NightSuitSeasonDetail.jsx
import {
  SEASONS,
  SEASON_PRO_TIPS,
  SEASON_FIT_CHECKS,
  SEASON_SIZE_TABLE,
  NS_TAGS,
} from "../Data/nsPageData";
import "../styles/blogPage.css";

export default function NightSuitSeasonDetail({ post, onBack }) {
  return (
    <div className="blog-container">
      <button className="btn-back" onClick={onBack}>← Wapas jayein</button>
      <span className="pill ns-pill">{post.category}</span>

      <div className="blog-hero ns-hero">
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
      </div>

      <p className="blog-intro">
        Sahi nightwear chunna sirf style ki baat nahi — acchi neend ke liye fabric aur fit dono zaroori hain.
        Har mausam ka apna mood hota hai aur aapka night suit us mood ke saath match karna chahiye.
      </p>

      {/* Seasons Grid */}
      <p className="section-title">Char mausam — char choices</p>
      <div className="ns-seasons-grid">
        {SEASONS.map((s) => (
          <div key={s.num} className="ns-season-card">
            <div className="ns-season-header">
              <span className="ns-season-icon">{s.icon}</span>
              <div>
                <div className="ns-season-label">{s.season}</div>
                <div className="ns-season-title">{s.title}</div>
              </div>
            </div>
            <p className="ns-season-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Size Table */}
      <p className="section-title" style={{ marginTop: "2rem" }}>Night Suit Size Chart</p>
      <div className="size-section">
        <div className="table-wrapper">
          <table className="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (in)</th>
                <th>Waist (in)</th>
                <th>Hip (in)</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              {SEASON_SIZE_TABLE.map((row) => (
                <tr key={row.size}>
                  <td style={{ fontWeight: 700, color: "var(--ns-accent)" }}>{row.size}</td>
                  <td>{row.chest}</td>
                  <td>{row.waist}</td>
                  <td>{row.hip}</td>
                  <td>{row.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pro Tips */}
      <p className="section-title">Pro Tips</p>
      <div className="tips-grid">
        {SEASON_PRO_TIPS.map((t) => (
          <div key={t.title} className="tip-card ns-tip-card">
            <div className="tip-title">{t.title}</div>
            <div className="tip-body">{t.body}</div>
          </div>
        ))}
      </div>

      {/* Fit Checks */}
      <p className="section-title">Perfect Fit Ki Nishaniyaan</p>
      <div className="fit-grid">
        {SEASON_FIT_CHECKS.map((f) => (
          <div key={f} className="fit-item">
            <span className="fit-check ns-fit-check">✓</span>{f}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-banner ns-cta-banner">
        <div>
          <h3>Apna perfect night suit dhoondh liya?</h3>
          <p>XS se XXL tak — har size available hai</p>
        </div>
        <button className="btn-cta ns-btn-cta">Collection dekhein →</button>
      </div>

      <div className="tags">
        {NS_TAGS.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}