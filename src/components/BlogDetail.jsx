// components/BlogDetail.jsx — full dual language (EN / Roman Urdu)
import { useState } from "react";
import {
  STEPS, PRO_TIPS, FIT_CHECKS, TAGS,
  CARE_SECTIONS, CARE_TAGS,
} from "../Data/bPageData";
import MeasurementDiagram from "./MeasurementDiagram";
import SizeCalculator from "./SizeCalculator";
import SizeTable from "./SizeTable";
import BraTypesDetail from "./Bratypesdetail";  
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

// ── shared top bar ────────────────────────────────────────────────────────────
function TopBar({ lang, toggle, onBack }) {
  return (
    <div className="detail-top-bar">
      <button className="btn-back" onClick={onBack}>
        ← {lang === "en" ? "Go Back" : "Wapas jayein"}
      </button>
      <LangToggle lang={lang} onToggle={toggle} />
    </div>
  );
}

// ─── Blog 1: Bra Guide ────────────────────────────────────────────────────────
function BraGuideDetail({ post, onBack, initialLang }) {
  const [highlightBand, setHighlightBand] = useState(null);
  const { lang, toggle, t } = useLang(initialLang);

  return (
    <div className="blog-container">
      <TopBar lang={lang} toggle={toggle} onBack={onBack} />
      <span className="pill">{t(post.category)}</span>

      <div className="blog-hero">
        <h1>{t(post.title)}</h1>
        <p>{t(post.subtitle)}</p>
      </div>

      <p className="blog-intro">
        {lang === "en"
          ? "Knowing your correct bra size isn't just about comfort — it matters for posture, confidence and overall health. Follow the steps below to find your exact size and always wear the perfect fit."
          : "Sahi bra size jaanna sirf comfort ke liye nahi — yeh posture, confidence aur overall health ke liye bhi zaroori hai. Neeche diye steps se apna exact size nikalein aur hamesha perfect fit pehnen."}
      </p>

      <p className="section-title">
        {lang === "en" ? "How to measure — 4 easy steps" : "Kaise measure karein — 4 asaan steps"}
      </p>
      <div className="steps-diagram-grid">
        <div className="steps-col">
          {STEPS.map((s) => (
            <div key={s.num} className="step-card">
              <div className="step-badge">{s.num}</div>
              <div>
                <div className="step-title">{t(s.title)}</div>
                <div className="step-desc">{t(s.desc)}</div>
              </div>
            </div>
          ))}
        </div>
        <MeasurementDiagram />
      </div>

      <SizeCalculator onResult={setHighlightBand} lang={lang} />
      <SizeTable highlightBand={highlightBand} lang={lang} />

      <p className="section-title">{lang === "en" ? "Pro Tips" : "Pro tips"}</p>
      <div className="tips-grid">
        {PRO_TIPS.map((tip) => (
          <div key={tip.title.en} className="tip-card">
            <div className="tip-title">{t(tip.title)}</div>
            <div className="tip-body">{t(tip.body)}</div>
          </div>
        ))}
      </div>

      <p className="section-title">
        {lang === "en" ? "Signs of the right fit" : "Sahi fit ki nishaniyaan"}
      </p>
      <div className="fit-grid">
        {FIT_CHECKS.map((f) => (
          <div key={f.en} className="fit-item">
            <span className="fit-check">✓</span>{t(f)}
          </div>
        ))}
      </div>

      <div className="cta-banner">
        <div>
          <h3>{lang === "en" ? "Found your perfect size?" : "Apni perfect size dhoondh li?"}</h3>
          <p>{lang === "en" ? "Every size available from 28 to 46" : "28 se 46 tak har size available hai"}</p>
        </div>
        <button className="btn-cta">{lang === "en" ? "View Collection →" : "Collection dekhein →"}</button>
      </div>
      <div className="tags">{TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
    </div>
  );
}

// ─── Blog 3: Care Tips (integrated) ──────────────────────────────────────────
function CareTipsDetail({ post, onBack, initialLang }) {
  const { lang, toggle, t } = useLang(initialLang);

  return (
    <div className="blog-container">
      <div className="detail-top-bar">
        <button className="btn-back" onClick={onBack}>
          ← {lang === "en" ? "Go Back" : "Wapas jayein"}
        </button>
        <LangToggle lang={lang} onToggle={toggle} />
      </div>
      <span className="pill">{t(post.category)}</span>

      <div className="blog-hero">
        <h1>{t(post.title)}</h1>
        <p>{t(post.subtitle)}</p>
      </div>

      <p className="blog-intro">
        {lang === "en"
          ? "Proper care is an investment — your lingerie will last longer and keep its shape. Follow these washing and storage tips for best results."
          : "Sahi care ek investment hai — aapki lingerie zyada chalegi aur shape maintain rahegi. Yeh washing aur storage tips follow karein."}
      </p>

      {CARE_SECTIONS.map((section, idx) => (
        <div key={section.id}>
          <p className="section-title">{t(section.title)}</p>
          <div className="steps-col" style={{ marginBottom: "1.5rem" }}>
            {section.steps.map((s) => (
              <div key={s.num} className="step-card">
                <div className="step-badge">{s.num}</div>
                <div>
                  <div className="step-title">{t(s.title)}</div>
                  <div className="step-desc">{t(s.desc)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="tips-grid" style={{ marginBottom: "1rem" }}>
            {section.tips.map((tip) => (
              <div key={tip.title.en} className="tip-card">
                <div className="tip-title">{t(tip.title)}</div>
                <div className="tip-body">{t(tip.body)}</div>
              </div>
            ))}
          </div>
          <div className="fit-grid" style={{ marginBottom: idx < CARE_SECTIONS.length - 1 ? "2.5rem" : "2rem" }}>
            {section.checks.map((c) => (
              <div key={c.en} className="fit-item">
                <span className="fit-check">✓</span>{t(c)}
              </div>
            ))}
          </div>
          {idx < CARE_SECTIONS.length - 1 && (
            <div style={{ borderTop: "1px solid #f0d8e2", marginBottom: "2.5rem" }} />
          )}
        </div>
      ))}

      <div className="cta-banner">
        <div>
          <h3>{lang === "en" ? "Shop lingerie worth caring for" : "Care ke laayaq lingerie dekhein"}</h3>
          <p>{lang === "en" ? "Quality that lasts with the right care" : "Sahi care se saalon tak chale"}</p>
        </div>
        <button className="btn-cta">{lang === "en" ? "View Collection →" : "Collection dekhein →"}</button>
      </div>
      <div className="tags">{CARE_TAGS.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
    </div>
  );
}

// ─── Router ───────────────────────────────────────────────────────────────────
export default function BlogDetail({ post, onBack, initialLang = "en" }) {
  if (post.slug === "how-to-choose-the-perfect-bra") return <BraGuideDetail  post={post} onBack={onBack} initialLang={initialLang} />;
  if (post.slug === "bra-types-guide")               return <BraTypesDetail  post={post} onBack={onBack} initialLang={initialLang} />;
  if (post.slug === "lingerie-care-tips")            return <CareTipsDetail  post={post} onBack={onBack} initialLang={initialLang} />;
  return <div>Blog nahi mila.</div>;
}