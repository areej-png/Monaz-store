import { NIGHT_SUIT_STYLES, STYLE_OUTFIT_GUIDE, STYLE_TAGS } from "../Data/nsPageData";
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

export default function NightSuitStyleDetail({ post, onBack, initialLang = "en" }) {
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
          ? "A night suit isn't just for sleeping — it's your outfit at home too. Comfort and style can both come together if you choose the right style."
          : "Night suit sirf so jaane ke liye nahi — yeh aapka ghar ka outfit bhi hai. Comfort aur style dono ek saath mil sakte hain agar sahi style choose karein."}
      </p>

      {/* Style Cards */}
      <p className="section-title">
        {lang === "en" ? "Night Suit Styles — Which One Is for You?" : "Night Suit Styles — Kaunsa Aapke Liye?"}
      </p>
      <div className="ns-style-list">
        {NIGHT_SUIT_STYLES.map((style) => (
          <div key={style.id} className="ns-style-card">
            {/* Header */}
            <div className="ns-style-header" style={{ background: style.color }}>
              <span className="ns-style-emoji">{style.emoji}</span>
              <div className="ns-style-header-text">
                <div className="ns-style-name" style={{ color: style.accentColor }}>
                  {style.name}
                </div>
                <div className="ns-style-tagline">{t(style.tagline)}</div>
              </div>
            </div>

            {/* Body */}
            <div className="ns-style-body">
              <p className="ns-fabric-desc">{t(style.desc)}</p>
              <div className="ns-pros-cons">
                <div className="ns-pros">
                  <div className="ns-pros-title">✓ {lang === "en" ? "Best For" : "Best For"}</div>
                  {(style.bestFor[lang] || style.bestFor.en).map((b) => (
                    <div key={b} className="ns-pro-item">
                      <span className="fit-check ns-fit-check">✓</span>{b}
                    </div>
                  ))}
                </div>
                <div className="ns-cons">
                  <div className="ns-cons-title">⚠ {lang === "en" ? "Avoid When" : "Avoid When"}</div>
                  {(style.avoid[lang] || style.avoid.en).map((a) => (
                    <div key={a} className="ns-con-item">
                      <span className="ns-con-icon">⚠</span>{a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="ns-fabric-tips">
                {style.tips.map((tip) => (
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

      {/* Style × Occasion */}
      <p className="section-title" style={{ marginTop: "2rem" }}>
        {lang === "en" ? "Which Style for When?" : "Kab Kaunsa Style?"}
      </p>
      <div className="table-wrapper" style={{ marginBottom: "2rem" }}>
        <table className="size-table">
          <thead>
            <tr>
              <th>{lang === "en" ? "Occasion / Season" : "Occasion / Season"}</th>
              <th>{lang === "en" ? "Best Style"        : "Best Style"}</th>
              <th>{lang === "en" ? "Why?"              : "Kyun?"}</th>
            </tr>
          </thead>
          <tbody>
            {STYLE_OUTFIT_GUIDE.map((row, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700 }}>{t(row.season)}</td>
                <td style={{ color: "var(--ns-accent)", fontWeight: 600 }}>{t(row.style)}</td>
                <td style={{ color: "#666" }}>{t(row.reason)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="cta-banner ns-cta-banner">
        <div>
          <h3>{lang === "en" ? "Found your favourite style?" : "Apni favourite style dhoondh li?"}</h3>
          <p>{lang === "en" ? "Pyjama set to kaftan — all available" : "Pyjama set se kaftan tak — sab available hai"}</p>
        </div>
        <button className="btn-cta ns-btn-cta">
          {lang === "en" ? "View Collection →" : "Collection dekhein →"}
        </button>
      </div>

      <div className="tags">
        {STYLE_TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}