import { useState } from "react";
import { returnsData } from "../Data/returnsData";
import "../styles/FAQPage.css";

const sections = [...new Set(returnsData.map((item) => item.section))];

export default function ReturnsPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Return &amp; Exchange Policy</h1>
        <p>Everything you need to know about returns, exchanges &amp; refunds 🌸</p>
      </div>

      {sections.map((section) => (
        <div key={section} className="faq-section-group">
          <h2 className="faq-section-title">{section}</h2>
          <div className="faq-list">
            {returnsData
              .filter((item) => item.section === section)
              .map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openId === faq.id ? "open" : ""}`}
                >
                  <button className="faq-question" onClick={() => toggle(faq.id)}>
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openId === faq.id ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}