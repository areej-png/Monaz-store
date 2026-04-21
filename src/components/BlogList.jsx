// components/BlogList.jsx
import { useNavigate } from "react-router-dom";
import { useBlogData } from "../hooks/useBlogData";
import "../styles/blogPage.css";

export default function BlogList() {
  const { posts, loading, error } = useBlogData();
  const navigate = useNavigate();

  if (loading) return (
    <div className="blog-container" style={{ textAlign: "center", paddingTop: "3rem", color: "#999" }}>
      Loading...
    </div>
  );

  if (error) return (
    <div className="blog-container" style={{ textAlign: "center", paddingTop: "3rem", color: "#D85A30" }}>
      Error: {error}
    </div>
  );

  return (
    <div className="blog-container">
      <div className="list-header">
        <span className="pill">Lingerie Guides</span>
        <h1>Style &amp; Fit Blog</h1>
        <p>Expert tips, size guides aur lingerie care advice</p>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => navigate(`/blog/${post.slug}`)}
          >
            <div className="post-icon" style={{ background: post.emojiColor }}>
              {post.emoji}
            </div>
            <div className="post-info">
              <div className="post-meta">
                <span className="pill">{post.category}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-subtitle">{post.subtitle}</p>
            </div>
            <div className="post-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}