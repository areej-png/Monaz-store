// pages/MistakesBlogPostPage.jsx
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { MISTAKES_POSTS } from "../Data/mistakesPageData";
import MistakesBlogDetail from "../components/MistakesBlogDetail";
import "../styles/blogPage.css";

export default function MistakesBlogPostPage() {
  const { slug } = useParams();
  const navigate  = useNavigate();
  const location  = useLocation();
  const initialLang = location.state?.lang ?? "en";

  const post = MISTAKES_POSTS.find((p) => p.slug === slug);

  if (!post) return (
    <div style={{ textAlign: "center", padding: "3rem", color: "#999" }}>
      Blog post nahi mila.
    </div>
  );

  return (
    <div className="blog-wrapper">
      <MistakesBlogDetail
        post={post}
        initialLang={initialLang}
        onBack={() => navigate("/blog/mistakes")}
      />
    </div>
  );
}