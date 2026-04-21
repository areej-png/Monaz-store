// pages/FAQPage.jsx
import { useState } from "react";
import { faqData } from "../Data/faqData";
import "../styles/FAQPage.css";

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        {/* <p>Aapke sawal, hamare jawab 🌸</p> */}
      </div>

      <div className="faq-list">
        {faqData.map((faq) => (
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
  );
}