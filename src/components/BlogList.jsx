// components/BlogList.jsx
import { useNavigate } from "react-router-dom";
import { useBlogData } from "../hooks/useBlogData";
import { useLang } from "../hooks/useLang";
import LangToggle from "./LangToggle";
import "../styles/blogPage.css";

export default function BlogList() {
  const { posts, loading, error } = useBlogData();
  const navigate = useNavigate();
  const { lang, toggle, t } = useLang();

  if (loading) return <div className="blog-container" style={{ textAlign:"center", paddingTop:"3rem", color:"#999" }}>Loading...</div>;
  if (error)   return <div className="blog-container" style={{ textAlign:"center", paddingTop:"3rem", color:"#D85A30" }}>Error: {error}</div>;

  return (
    <div className="blog-container">
      <div className="list-header">
        <div className="list-header-top">
          <span className="pill">Lingerie Guides</span>
          <LangToggle lang={lang} onToggle={toggle} />
        </div>
        <h1>{lang === "en" ? "Style & Fit Blog" : "Style & Fit Blog"}</h1>
        <p>{lang === "en" ? "Expert tips, size guides and lingerie care advice" : "Expert tips, size guides aur lingerie care advice"}</p>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card" onClick={() => navigate(`/blog/${post.slug}`, { state: { lang } })}>
            <div className="post-icon" style={{ background: post.emojiColor }}>{post.emoji}</div>
            <div className="post-info">
              <div className="post-meta"><span className="pill">{t(post.category)}</span></div>
              <h2 className="post-title">{t(post.title)}</h2>
              <p className="post-subtitle">{t(post.subtitle)}</p>
            </div>
            <div className="post-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}