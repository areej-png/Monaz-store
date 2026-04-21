import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import { brandInfo, socialLinks, shopLinks, helpLinks, bottomLinks, newsletterText, copyrightYear } from "../Data/footer";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSignup = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* ── Brand Column ── */}
        <div>
          <h2 className={styles.brandName}>{brandInfo.name}</h2>
          <p className={styles.brandTagline}>{brandInfo.tagline}</p>
          <p className={styles.contactItem}>{brandInfo.address}</p>
          <p className={styles.contactItem}>{brandInfo.phone}</p>
          <p className={styles.contactItem}>{brandInfo.tel}</p>

          <div className={styles.socialRow}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialLink}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Shop Now Column ── */}
        <div>
          <p className={styles.colTitle}>Shop Now</p>
          <ul className={styles.linkList}>
            {shopLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Help & Info Column ── */}
        <div>
          <p className={styles.colTitle}>Help &amp; Info</p>
          <ul className={styles.linkList}>
            {helpLinks.map((link) => (
              <li key={link.label}>
                {link.label === "Blogs" ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === "/") {
                        document.getElementById("blog-section")?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        navigate("/");
                        setTimeout(() => {
                          document.getElementById("blog-section")?.scrollIntoView({ behavior: "smooth" });
                        }, 500);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Newsletter Column ── */}
        <div>
          <p className={styles.colTitle}>Newsletter</p>
          <p className={styles.newsletterText}>{newsletterText}</p>

          {subscribed ? (
            <p style={{ color: "#e8c9a0", fontSize: "13px" }}>
              ✓ Subscribed! Shukriya 🌸
            </p>
          ) : (
            <>
              <div className={styles.inputWrap}>
                <input
                  className={styles.emailInput}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSignup()}
                />
                <button className={styles.signupBtn} onClick={handleSignup}>
                  Sign Up
                </button>
              </div>
              <p className={styles.signupNote}>
                By signing up you agree to our terms &amp; privacy policy.
              </p>
            </>
          )}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <hr className={styles.divider} />
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {copyrightYear} {brandInfo.name}. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          {bottomLinks.map((link) => (
            <Link key={link.label} to={link.href}>{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}