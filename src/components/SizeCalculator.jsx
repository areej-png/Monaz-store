// components/SizeCalculator.jsx
import { useState } from "react";
import { CUP_LABELS } from "../Data/bPageData";
import "../styles/blogPage.css";

export default function SizeCalculator({ onResult }) {
  const [band, setBand] = useState("");
  const [bust, setBust] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const b = parseInt(band);
    const bu = parseInt(bust);
    if (!b || !bu || isNaN(b) || isNaN(bu)) { setError("Dono measurements enter karein."); return; }
    if (bu <= b) { setError("Bust measurement band se zyada honi chahiye."); return; }
    setError("");
    const adjustedBand = b % 2 === 0 ? b : b + 1;
    const diff = bu - adjustedBand;
    const cup = diff < 1 ? "AA" : CUP_LABELS[Math.min(diff - 1, CUP_LABELS.length - 1)];
    setResult({ size: `${adjustedBand}${cup}`, adjustedBand, cup });
    if (onResult) onResult(adjustedBand);
  };

  return (
    <div className="calc-card">
      <h2>Apna size abhi calculate karein</h2>
      <p className="calc-subtitle">Dono measurements inches mein enter karein</p>
      <div className="calc-grid">
        <div className="calc-field">
          <label>Band measurement (inches)</label>
          <input type="number" placeholder="e.g. 34" value={band} onChange={(e) => setBand(e.target.value)} min="28" max="50" />
        </div>
        <div className="calc-field">
          <label>Bust measurement (inches)</label>
          <input type="number" placeholder="e.g. 37" value={bust} onChange={(e) => setBust(e.target.value)} min="28" max="60" />
        </div>
      </div>
      {error && <p className="calc-error">{error}</p>}
      <button className="btn-primary" onClick={calculate}>Size calculate karein</button>
      {result && (
        <div className="calc-result">
          <div className="calc-result-size">{result.size}</div>
          <div className="calc-result-label">Aapka recommended bra size — {result.adjustedBand} band, {result.cup} cup</div>
          <div className="calc-result-hint">Neeche table mein aapki row highlight ho gayi hai ↓</div>
        </div>
      )}
    </div>
  );
}