import "../styles/blogPage.css";

const SEVERITY_COLORS = {
  high:   { bg: "#FFF0F0", border: "#E8A0A0", badge: "#C0392B", text: "#7B1C1C" },
  medium: { bg: "#FFF8EC", border: "#F0C97A", badge: "#B8860B", text: "#7A5500" },
  low:    { bg: "#F0F7FF", border: "#A8C8E8", badge: "#2874A6", text: "#1A4D73" },
};

export default function MistakeDetailTemplate({
  post,
  onBack,
  mistakes,
  fitChecks,
  tags,
  intro,
  ctaTitle,
  ctaSubtitle,
  pillClass = "mistakes-pill",
  heroClass = "mistakes-hero",
  fitCheckClass = "mistakes-fit-check",
  ctaClass = "mistakes-cta-banner",
  ctaBtnClass = "mistakes-btn-cta",
}) {
  return (
    <div className="blog-container">
      <button className="btn-back" onClick={onBack}>← Wapas jayein</button>
      <span className={`pill ${pillClass}`}>{post.category}</span>

      <div className={`blog-hero ${heroClass}`}>
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
      </div>

      <p className="blog-intro">{intro}</p>

      {/* Mistake Cards */}
      <p className="section-title">6 Common Galtiyan</p>
      <div className="mistakes-list">
        {mistakes.map((m) => {
          const clr = SEVERITY_COLORS[m.severity];
          return (
            <div key={m.id} className="mistake-card">
              {/* Header */}
              <div
                className="mistake-header"
                style={{ borderLeft: `4px solid ${clr.badge}` }}
              >
                <div className="mistake-num" style={{ color: clr.badge }}>
                  {m.num}
                </div>
                <div className="mistake-icon">{m.icon}</div>
                <div className="mistake-header-text">
                  <div className="mistake-title">{m.title}</div>
                  <span
                    className="mistake-badge"
                    style={{
                      background: clr.bg,
                      color: clr.text,
                      border: `1px solid ${clr.border}`,
                    }}
                  >
                    {m.severityLabel}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="mistake-body">
                <p className="mistake-desc">{m.desc}</p>

                {/* Signs */}
                <div className="mistake-signs">
                  <div className="mistake-signs-title">🔍 Pehchaan ke signs</div>
                  <div className="mistake-signs-grid">
                    {m.signs.map((s) => (
                      <div key={s} className="mistake-sign-item">
                        <span
                          className="mistake-sign-dot"
                          style={{ background: clr.badge }}
                        />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fix */}
                <div
                  className="mistake-fix"
                  style={{ background: clr.bg, borderColor: clr.border }}
                >
                  <div
                    className="mistake-fix-label"
                    style={{ color: clr.badge }}
                  >
                    ✓ {m.fixLabel}
                  </div>
                  <div className="mistake-fix-text">{m.fix}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Checklist */}
      <p className="section-title" style={{ marginTop: "2rem" }}>
        Quick Checklist
      </p>
      <div className="fit-grid" style={{ marginBottom: "2rem" }}>
        {fitChecks.map((f) => (
          <div key={f} className="fit-item">
            <span className={`fit-check ${fitCheckClass}`}>✓</span>
            {f}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className={`cta-banner ${ctaClass}`}>
        <div>
          <h3>{ctaTitle}</h3>
          <p>{ctaSubtitle}</p>
        </div>
        <button className={`btn-cta ${ctaBtnClass}`}>
          Collection dekhein →
        </button>
      </div>

      {/* Tags */}
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}