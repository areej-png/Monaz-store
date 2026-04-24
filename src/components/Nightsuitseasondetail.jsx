// components/NightSuitSeasonDetail.jsx
import {
  SEASONS, SEASON_PRO_TIPS, SEASON_FIT_CHECKS,
  SEASON_SIZE_TABLE, NS_TAGS,
} from "../Data/nspageData";
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

export default function NightSuitSeasonDetail({ post, onBack, initialLang = "en" }) {
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
          ? "The right nightwear isn't just about style — the right fabric and fit are both essential for a good night's sleep. Every season has its own mood and your night suit should match it."
          : "Sahi nightwear sirf style ki baat nahi — acchi neend ke liye fabric aur fit dono zaroori hain. Har mausam ka apna mood hota hai aur aapka night suit us mood ke saath match karna chahiye."}
      </p>

      {/* Seasons Grid */}
      <p className="section-title">
        {lang === "en" ? "Four seasons — four choices" : "Char mausam — char choices"}
      </p>
      <div className="ns-seasons-grid">
        {SEASONS.map((s) => (
          <div key={s.num} className="ns-season-card">
            <div className="ns-season-header">
              <span className="ns-season-icon">{s.icon}</span>
              <div>
                <div className="ns-season-label">{t(s.season)}</div>
                <div className="ns-season-title">{t(s.title)}</div>
              </div>
            </div>
            <p className="ns-season-desc">{t(s.desc)}</p>
          </div>
        ))}
      </div>

      {/* Size Table */}
      <p className="section-title" style={{ marginTop: "2rem" }}>
        {lang === "en" ? "Night Suit Size Chart" : "Night Suit Size Chart"}
      </p>
      <div className="size-section">
        <div className="table-wrapper">
          <table className="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>{lang === "en" ? "Chest (in)" : "Chest (in)"}</th>
                <th>{lang === "en" ? "Waist (in)" : "Waist (in)"}</th>
                <th>{lang === "en" ? "Hip (in)"   : "Hip (in)"}</th>
                <th>{lang === "en" ? "Height"     : "Height"}</th>
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
      <p className="section-title">{lang === "en" ? "Pro Tips" : "Pro Tips"}</p>
      <div className="tips-grid">
        {SEASON_PRO_TIPS.map((tip) => (
          <div key={tip.title.en} className="tip-card ns-tip-card">
            <div className="tip-title">{t(tip.title)}</div>
            <div className="tip-body">{t(tip.body)}</div>
          </div>
        ))}
      </div>

      {/* Fit Checks */}
      <p className="section-title">
        {lang === "en" ? "Signs of the Perfect Fit" : "Perfect Fit Ki Nishaniyaan"}
      </p>
      <div className="fit-grid">
        {SEASON_FIT_CHECKS.map((f) => (
          <div key={f.en} className="fit-item">
            <span className="fit-check ns-fit-check">✓</span>{t(f)}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-banner ns-cta-banner">
        <div>
          <h3>{lang === "en" ? "Found your perfect night suit?" : "Apna perfect night suit dhoondh liya?"}</h3>
          <p>{lang === "en" ? "XS to XXL — every size available" : "XS se XXL tak — har size available hai"}</p>
        </div>
        <button className="btn-cta ns-btn-cta">
          {lang === "en" ? "View Collection →" : "Collection dekhein →"}
        </button>
      </div>

      <div className="tags">
        {NS_TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}