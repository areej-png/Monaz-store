import { useNavigate } from "react-router-dom";
import { MISTAKES_POSTS } from "../Data/mistakesPageData";
import "../styles/blogPage.css";

export default function MistakesBlogList() {
  const navigate = useNavigate();

  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="list-header">
          <span className="pill mistakes-pill">Common Mistakes</span>
          <h1>Lingerie &amp; Nightwear Mistakes</h1>
          <p>Fit, comfort aur care ki common galtiyan aur unka solution</p>
        </div>

        <div className="post-list">
          {MISTAKES_POSTS.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => navigate(`/blog/mistakes/${post.slug}`)}
            >
              <div
                className="post-icon"
                style={{ background: post.emojiColor }}
              >
                {post.emoji}
              </div>
              <div className="post-info">
                <div className="post-meta">
                  <span className="pill mistakes-pill">{post.category}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-subtitle">{post.subtitle}</p>
              </div>
              <div className="post-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}