// pages/PrivacyPage.jsx
import { useState } from "react";
import { privacyData } from "../Data/privacyData";
import "../styles/FAQPage.css";

export default function PrivacyPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters to us. Here's how we collect, use, and protect your information.</p>
      </div>

      <div className="faq-list">
        {privacyData.map((item) => (
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