// pages/AffiliatePage.jsx
import { useState } from "react";
import { affiliateBenefits, affiliateSteps } from "../Data/Affiliatedata";
import "../styles/AffiliatePage.css";

export default function AffiliatePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    handle: "",
    followers: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const { name, email, phone, platform, handle } = form;
    if (!name || !email || !phone || !platform || !handle) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="aff-page">

      {/* ── Hero ── */}
      <div className="aff-hero">
        <span className="aff-pill">Join Our Community</span>
        <h1>Become a Monaz Affiliate</h1>
        <p>Partner with us, share your love for Monaz and earn while you inspire.</p>
      </div>

      {/* ── Benefits ── */}
      <section className="aff-section">
        <h2 className="aff-section-title">Why Join Monaz Affiliate Program?</h2>
        <div className="aff-benefits-grid">
          {affiliateBenefits.map((b) => (
            <div key={b.title} className="aff-benefit-card">
              <div className="aff-benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="aff-section">
        <h2 className="aff-section-title">How It Works</h2>
        <div className="aff-steps">
          {affiliateSteps.map((s) => (
            <div key={s.num} className="aff-step">
              <div className="aff-step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Form ── */}
      <section className="aff-section">
        <h2 className="aff-section-title">Apply Now</h2>

        {submitted ? (
          <div className="aff-success">
            <div className="aff-success-icon">🌸</div>
            <h3>Application Received!</h3>
            <p>Thank you for applying. Our team will review your application and get back to you within 2–3 business days.</p>
          </div>
        ) : (
          <div className="aff-form">
            <div className="aff-form-row">
              <div className="aff-field">
                <label>Full Name <span>*</span></label>
                <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
              </div>
              <div className="aff-field">
                <label>Email Address <span>*</span></label>
                <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="aff-form-row">
              <div className="aff-field">
                <label>Phone Number <span>*</span></label>
                <input type="tel" name="phone" placeholder="+92 300 0000000" value={form.phone} onChange={handleChange} />
              </div>
              <div className="aff-field">
                <label>Primary Platform <span>*</span></label>
                <select name="platform" value={form.platform} onChange={handleChange}>
                  <option value="">Select platform</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="facebook">Facebook</option>
                  <option value="youtube">YouTube</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="aff-form-row">
              <div className="aff-field">
                <label>Social Media Handle <span>*</span></label>
                <input type="text" name="handle" placeholder="@yourhandle" value={form.handle} onChange={handleChange} />
              </div>
              <div className="aff-field">
                <label>Number of Followers</label>
                <select name="followers" value={form.followers} onChange={handleChange}>
                  <option value="">Select range</option>
                  <option value="1k-5k">1K – 5K</option>
                  <option value="5k-20k">5K – 20K</option>
                  <option value="20k-50k">20K – 50K</option>
                  <option value="50k+">50K+</option>
                </select>
              </div>
            </div>

            <div className="aff-field">
              <label>Tell us about yourself</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Share why you want to become a Monaz affiliate and how you plan to promote our products..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button className="aff-submit-btn" onClick={handleSubmit}>
              Submit Application →
            </button>
          </div>
        )}
      </section>
    </div>
  );
}