import { useNavigate } from "react-router-dom";
import { MISTAKES_POSTS } from "../Data/mistakesPageData";
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

export default function MistakesBlogList() {
  const navigate = useNavigate();
  const { lang, toggle, t } = useLang();

  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="list-header">
          <div className="list-header-top">
            <span className="pill mistakes-pill">Common Mistakes</span>
            <LangToggle lang={lang} onToggle={toggle} />
          </div>
          <h1>
            {lang === "en"
              ? "Lingerie & Nightwear Mistakes"
              : "Lingerie aur Nightwear ki Galtiyan"}
          </h1>
          <p>
            {lang === "en"
              ? "Common fit, comfort and care mistakes — and how to fix them"
              : "Fit, comfort aur care ki common galtiyan aur unka solution"}
          </p>
        </div>

        <div className="post-list">
          {MISTAKES_POSTS.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() =>
                navigate(`/blog/mistakes/${post.slug}`, { state: { lang } })
              }
            >
              <div className="post-icon" style={{ background: post.emojiColor }}>
                {post.emoji}
              </div>
              <div className="post-info">
                <div className="post-meta">
                  <span className="pill mistakes-pill">{t(post.category)}</span>
                </div>
                <h2 className="post-title">{t(post.title)}</h2>
                <p className="post-subtitle">{t(post.subtitle)}</p>
              </div>
              <div className="post-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}