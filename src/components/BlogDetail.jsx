// components/BlogDetail.jsx
// ─── Router — slug ke hisaab se sahi blog component render karta hai ──────────
import { useState } from "react";
import { STEPS, PRO_TIPS, FIT_CHECKS, TAGS } from "../Data/bPageData";
import MeasurementDiagram from "./MeasurementDiagram";
import SizeCalculator from "./SizeCalculator";
import SizeTable from "./SizeTable";
import CareTipsDetail from "./Caretipsdetail";
import BraTypesDetail from "./Bratypesdetail";
import "../styles/blogPage.css";

// ─── Blog 1: Bra Guide ────────────────────────────────────────────────────────
function BraGuideDetail({ post, onBack }) {
  const [highlightBand, setHighlightBand] = useState(null);

  return (
    <div className="blog-container">
      <button className="btn-back" onClick={onBack}>← Wapas jayein</button>
      <span className="pill">{post.category}</span>
      <div className="blog-hero">
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
      </div>

      <p className="blog-intro">
        Sahi bra size jaanna sirf comfort ke liye nahi — yeh posture, confidence aur overall health ke liye bhi zaroori hai.
        Neeche diye steps se apna exact size nikalein aur hamesha perfect fit pehnen.
      </p>

      <p className="section-title">Kaise measure karein — 4 asaan steps</p>
      <div className="steps-diagram-grid">
        <div className="steps-col">
          {STEPS.map((s) => (
            <div key={s.num} className="step-card">
              <div className="step-badge">{s.num}</div>
              <div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <MeasurementDiagram />
      </div>

      <SizeCalculator onResult={setHighlightBand} />
      <SizeTable highlightBand={highlightBand} />

      <p className="section-title">Pro tips</p>
      <div className="tips-grid">
        {PRO_TIPS.map((t) => (
          <div key={t.title} className="tip-card">
            <div className="tip-title">{t.title}</div>
            <div className="tip-body">{t.body}</div>
          </div>
        ))}
      </div>

      <p className="section-title">Sahi fit ki nishaniyaan</p>
      <div className="fit-grid">
        {FIT_CHECKS.map((f) => (
          <div key={f} className="fit-item">
            <span className="fit-check">✓</span>{f}
          </div>
        ))}
      </div>

      <div className="cta-banner">
        <div>
          <h3>Apni perfect size dhoondh li?</h3>
          <p>28 se 46 tak har size available hai</p>
        </div>
        <button className="btn-cta">Collection dekhein →</button>
      </div>

      <div className="tags">
        {TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}
export default function BlogDetail({ post, onBack }) {
  if (post.slug === "how-to-choose-the-perfect-bra") return <BraGuideDetail post={post} onBack={onBack} />;
  if (post.slug === "lingerie-care-tips") return <CareTipsDetail post={post} onBack={onBack} />;
  if (post.slug === "bra-types-guide") return <BraTypesDetail post={post} onBack={onBack} />;

  return <div>Blog nahi mila.</div>;
}