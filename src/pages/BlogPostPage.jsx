// pages/BlogPostPage.jsx
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { BLOG_POSTS } from "../Data/bPageData";
import BlogDetail from "../components/BlogDetail";
import "../styles/blogPage.css";

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate  = useNavigate();
  const location  = useLocation();
  const initialLang = location.state?.lang ?? "en";

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <div style={{ textAlign:"center", padding:"3rem", color:"#999" }}>Blog post nahi mila.</div>;

  return (
    <div className="blog-wrapper">
      <BlogDetail post={post} initialLang={initialLang} onBack={() => navigate("/blog")} />
    </div>
  );
}