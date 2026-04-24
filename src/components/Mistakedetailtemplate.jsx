import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

const SEVERITY_COLORS = {
  high:   { bg: "#FFF0F0", border: "#E8A0A0", badge: "#C0392B", text: "#7B1C1C" },
  medium: { bg: "#FFF8EC", border: "#F0C97A", badge: "#B8860B", text: "#7A5500" },
  low:    { bg: "#F0F7FF", border: "#A8C8E8", badge: "#2874A6", text: "#1A4D73" },
};

export default function MistakeDetailTemplate({
  post,
  onBack,
  initialLang = "en",
  mistakes,
  fitChecks,
  tags,
  intro,
  ctaTitle,
  ctaSubtitle,
  sectionTitle,
  pillClass     = "mistakes-pill",
  heroClass     = "mistakes-hero",
  fitCheckClass = "mistakes-fit-check",
  ctaClass      = "mistakes-cta-banner",
  ctaBtnClass   = "mistakes-btn-cta",
}) {
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

      <span className={`pill ${pillClass}`}>{t(post.category)}</span>
      <div className={`blog-hero ${heroClass}`}>
        <h1>{t(post.title)}</h1>
        <p>{t(post.subtitle)}</p>
      </div>

      <p className="blog-intro">{t(intro)}</p>

      {/* Mistake Cards */}
      <p className="section-title">{t(sectionTitle)}</p>
      <div className="mistakes-list">
        {mistakes.map((m) => {
          const clr = SEVERITY_COLORS[m.severity];
          return (
            <div key={m.id} className="mistake-card">
              {/* Header */}
              <div className="mistake-header" style={{ borderLeft: `4px solid ${clr.badge}` }}>
                <div className="mistake-num" style={{ color: clr.badge }}>{m.num}</div>
                <div className="mistake-icon">{m.icon}</div>
                <div className="mistake-header-text">
                  <div className="mistake-title">{t(m.title)}</div>
                  <span
                    className="mistake-badge"
                    style={{ background: clr.bg, color: clr.text, border: `1px solid ${clr.border}` }}
                  >
                    {t(m.severityLabel)}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="mistake-body">
                <p className="mistake-desc">{t(m.desc)}</p>

                {/* Signs */}
                <div className="mistake-signs">
                  <div className="mistake-signs-title">
                    🔍 {lang === "en" ? "Signs to look for" : "Pehchaan ke signs"}
                  </div>
                  <div className="mistake-signs-grid">
                    {(m.signs?.[lang] || m.signs?.en || []).map((s) => (
                      <div key={s} className="mistake-sign-item">
                        <span className="mistake-sign-dot" style={{ background: clr.badge }} />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fix */}
                <div className="mistake-fix" style={{ background: clr.bg, borderColor: clr.border }}>
                  <div className="mistake-fix-label" style={{ color: clr.badge }}>
                    ✓ {t(m.fixLabel)}
                  </div>
                  <div className="mistake-fix-text">{t(m.fix)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Checklist */}
      <p className="section-title" style={{ marginTop: "2rem" }}>
        {lang === "en" ? "Quick Checklist" : "Quick Checklist"}
      </p>
      <div className="fit-grid" style={{ marginBottom: "2rem" }}>
        {fitChecks.map((f) => (
          <div key={f.en} className="fit-item">
            <span className={`fit-check ${fitCheckClass}`}>✓</span>
            {t(f)}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className={`cta-banner ${ctaClass}`}>
        <div>
          <h3>{t(ctaTitle)}</h3>
          <p>{t(ctaSubtitle)}</p>
        </div>
        <button className={`btn-cta ${ctaBtnClass}`}>
          {lang === "en" ? "View Collection →" : "Collection dekhein →"}
        </button>
      </div>

      {/* Tags */}
      <div className="tags">
        {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}