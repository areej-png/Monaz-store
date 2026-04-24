// pages/TermsPage.jsx
import { useState } from "react";
import { termsData } from "../Data/Termsdata";
import "../styles/FAQPage.css";

export default function TermsPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Terms of Service</h1>
        <p>Please read these terms carefully before using our website or placing an order.</p>
      </div>

      <div className="faq-list">
        {termsData.map((item) => (
          <div
            key={item.id}
            className={`faq-item ${openId === item.id ? "open" : ""}`}
          >
            <button className="faq-question" onClick={() => toggle(item.id)}>
              <span>{item.question}</span>
              <span className="faq-icon">{openId === item.id ? "−" : "+"}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "0.85rem", color: "#9e7c7c" }}>
        Last updated: April 2026
      </p>
    </div>
  );
}