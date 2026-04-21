// components/MeasurementDiagram.jsx
import "../styles/blogPage.css";

export default function MeasurementDiagram() {
  return (
    <div className="diagram-card">
      <p className="diagram-label">Measurement diagram</p>
      <svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
        <ellipse cx="95" cy="115" rx="52" ry="46" fill="#FDF0F5" stroke="#D4537E" strokeWidth="1.5" />
        <ellipse cx="185" cy="115" rx="52" ry="46" fill="#FDF0F5" stroke="#D4537E" strokeWidth="1.5" />
        <ellipse cx="140" cy="125" rx="8" ry="6" fill="#F4C0D1" stroke="#D4537E" strokeWidth="1" />
        <line x1="80" y1="69" x2="75" y2="10" stroke="#D4537E" strokeWidth="1.5" strokeDasharray="3,2" />
        <line x1="200" y1="69" x2="205" y2="10" stroke="#D4537E" strokeWidth="1.5" strokeDasharray="3,2" />
        <text x="118" y="16" fontSize="9" fill="#72243E" fontFamily="sans-serif">Straps</text>
        <rect x="43" y="156" width="194" height="14" rx="7" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="43" y1="163" x2="28" y2="163" stroke="#1D9E75" strokeWidth="1.5" />
        <polygon points="28,160 22,163 28,166" fill="#1D9E75" />
        <text x="45" y="182" fontSize="9" fill="#0F6E56" fontFamily="sans-serif">Band (ribcage ke neeche)</text>
        <line x1="95" y1="78" x2="95" y2="148" stroke="#D85A30" strokeWidth="1.5" />
        <polygon points="95,72 91,82 99,82" fill="#D85A30" />
        <polygon points="95,154 91,144 99,144" fill="#D85A30" />
        <text x="34" y="117" fontSize="9" fill="#993C1D" fontFamily="sans-serif">Cup</text>
        <text x="27" y="128" fontSize="9" fill="#993C1D" fontFamily="sans-serif">length</text>
        <line x1="148" y1="122" x2="222" y2="122" stroke="#534AB7" strokeWidth="1.5" />
        <polygon points="142,122 152,118 152,126" fill="#534AB7" />
        <polygon points="228,122 218,118 218,126" fill="#534AB7" />
        <text x="155" y="140" fontSize="9" fill="#3C3489" fontFamily="sans-serif">Cup width</text>
      </svg>
      <div className="diagram-legend">
        {[
          { color: "#1D9E75", label: "Band line" },
          { color: "#D4537E", label: "Bust / strap" },
          { color: "#D85A30", label: "Cup length" },
          { color: "#534AB7", label: "Cup width" },
        ].map((l) => (
          <div key={l.label} className="legend-item">
            <div className="legend-dot" style={{ background: l.color }} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}