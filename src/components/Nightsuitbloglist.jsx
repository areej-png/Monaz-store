import { useNavigate } from "react-router-dom";
import { NIGHT_SUIT_POSTS } from "../Data/nsPageData";
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

export default function NightSuitBlogList() {
  const navigate = useNavigate();
  const { lang, toggle, t } = useLang();

  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="list-header">
          <div className="list-header-top">
            <span className="pill ns-pill">Nightwear Guides</span>
            <LangToggle lang={lang} onToggle={toggle} />
          </div>
          <h1>{lang === "en" ? "Night Suit & Sleepwear Blog" : "Night Suit & Sleepwear Blog"}</h1>
          <p>{lang === "en"
            ? "Season guides, fabric tips and sleepwear style advice"
            : "Season guides, fabric tips aur sleepwear style advice"}</p>
        </div>

        <div className="post-list">
          {NIGHT_SUIT_POSTS.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => navigate(`/blog/nightsuits/${post.slug}`, { state: { lang } })}
            >
              <div className="post-icon" style={{ background: post.emojiColor }}>
                {post.emoji}
              </div>
              <div className="post-info">
                <div className="post-meta">
                  <span className="pill ns-pill">{t(post.category)}</span>
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