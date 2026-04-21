// components/BraTypesDetail.jsx
import "../styles/blogPage.css";
import { BRA_TYPES, OUTFIT_GUIDE, TYPES_TAGS } from "../Data/bPageData";

// ─── Image Placeholder ────────────────────────────────────────────────────────
// Baad mein: <img src={yourImage} alt={alt} className="blog-img" /> se replace karein
function ImagePlaceholder({ text, alt }) {
  return (
    <div className="img-placeholder">
      <div className="img-placeholder-icon">📷</div>
      <div className="img-placeholder-text">{text}</div>
      <div className="img-placeholder-hint">Replace with: &lt;img src="your-image.jpg" alt="{alt}" /&gt;</div>
    </div>
  );
}

// ─── Single Bra Type Card ─────────────────────────────────────────────────────
function BraTypeSection({ bra }) {
  return (
    <div className="bra-type-section">
      {/* Header */}
      <div className="bra-type-header" style={{ background: bra.color }}>
        <div>
          <span className="pill" style={{ background: "rgba(255,255,255,0.7)", color: bra.accentColor }}>
            {bra.name}
          </span>
          <h2 style={{ color: bra.accentColor, fontSize: 20, fontWeight: 700, marginTop: 6, fontFamily: "Georgia, serif" }}>
            {bra.tagline}
          </h2>
        </div>
      </div>

      {/* Left: Content | Right: Image */}
      <div className="steps-diagram-grid" style={{ marginBottom: "1.25rem" }}>
        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Description */}
          <div className="step-card">
            <div>
              <div className="step-title" style={{ color: bra.accentColor, marginBottom: 5 }}>Yeh kya hai?</div>
              <div className="step-desc" style={{ fontSize: 13 }}>{bra.desc}</div>
            </div>
          </div>

          {/* Best For */}
          <div className="step-card">
            <div style={{ width: "100%" }}>
              <div className="step-title" style={{ color: bra.accentColor, marginBottom: 8 }}>Kab pehnen?</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {bra.bestFor.map((item) => (
                  <span key={item} style={{
                    background: bra.color,
                    color: bra.accentColor,
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 20,
                  }}>
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Avoid */}
          <div className="step-card">
            <div style={{ width: "100%" }}>
              <div className="step-title" style={{ color: "#993C1D", marginBottom: 8 }}>Kab avoid karein?</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {bra.avoid.map((item) => (
                  <span key={item} style={{
                    background: "#FAECE7",
                    color: "#993C1D",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 20,
                  }}>
                    ✗ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Placeholder */}
        <ImagePlaceholder text={bra.imagePlaceholder} alt={bra.imageAlt} />
      </div>

      {/* Tips */}
      <div className="tips-grid" style={{ marginBottom: 0 }}>
        {bra.tips.map((t) => (
          <div key={t.title} className="tip-card" style={{ borderLeftColor: bra.accentColor }}>
            <div className="tip-title" style={{ color: bra.accentColor }}>{t.title}</div>
            <div className="tip-body">{t.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Quick Outfit Guide Table ─────────────────────────────────────────────────
function OutfitGuideTable() {
  return (
    <div className="size-section">
      <p className="section-title">Quick reference — outfit ke liye bra</p>
      <div className="table-wrapper">
        <table className="size-table">
          <thead>
            <tr>
              <th>Outfit / Dress</th>
              <th>Best Bra</th>
              <th>Kyun?</th>
            </tr>
          </thead>
          <tbody>
            {OUTFIT_GUIDE.map((row, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{row.outfit}</td>
                <td>
                  <span style={{
                    background: "#FBEAF0",
                    color: "#72243E",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: 20,
                  }}>
                    {row.bra}
                  </span>
                </td>
                <td style={{ color: "#888" }}>{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BraTypesDetail({ post, onBack }) {
  return (
    <div className="blog-container">
      {/* Back */}
      <button className="btn-back" onClick={onBack}>← Wapas jayein</button>

      {/* Hero */}
      <span className="pill">{post.category}</span>
      <div className="blog-hero" style={{ background: "#EAF3DE" }}>
        <h1 style={{ color: "#173404" }}>{post.title}</h1>
        <p style={{ color: "#3B6D11" }}>{post.subtitle}</p>
      </div>

      {/* Intro */}
      <p className="blog-intro">
        Sahi outfit ke liye sahi bra type poora look change kar deti hai — aur comfort bhi ensure karti hai. 
        Yahan aap 6 main bra types ke baare mein jaanein gi — kab pehnen, kab avoid karein, aur kya tips hain.
      </p>

      {/* Each Bra Type */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "2rem" }}>
        {BRA_TYPES.map((bra, idx) => (
          <div key={bra.id}>
            <BraTypeSection bra={bra} />
            {idx < BRA_TYPES.length - 1 && (
              <div style={{ borderTop: "1px solid #f0d8e2", marginTop: "2.5rem" }} />
            )}
          </div>
        ))}
      </div>

      {/* Quick Reference Table */}
      <OutfitGuideTable />

      {/* CTA */}
      <div className="cta-banner" style={{ background: "#C0DD97", marginTop: "2rem" }}>
        <div>
          <h3 style={{ color: "#173404" }}>Apni favorite style dhoondh li?</h3>
          <p style={{ color: "#27500A" }}>Tamam bra types hamare collection mein available hain</p>
        </div>
        <button className="btn-cta" style={{ background: "#27500A" }}>Collection dekhein →</button>
      </div>

      {/* Tags */}
      <div className="tags">
        {TYPES_TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}