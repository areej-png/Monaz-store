// components/NightSuitBlogList.jsx
import { useNavigate } from "react-router-dom";
import { NIGHT_SUIT_POSTS } from "../Data/nsPageData";
import "../styles/blogPage.css";

export default function NightSuitBlogList() {
  const navigate = useNavigate();

  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="list-header">
          <span className="pill ns-pill">Nightwear Guides</span>
          <h1>Night Suit &amp; Sleepwear Blog</h1>
          <p>Season guides, fabric tips aur sleepwear style advice</p>
        </div>

        <div className="post-list">
          {NIGHT_SUIT_POSTS.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => navigate(`/blog/nightsuits/${post.slug}`)}
            >
              <div
                className="post-icon"
                style={{ background: post.emojiColor }}
              >
                {post.emoji}
              </div>
              <div className="post-info">
                <div className="post-meta">
                  <span className="pill ns-pill">{post.category}</span>
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