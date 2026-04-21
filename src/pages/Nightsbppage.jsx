// pages/NightSuitBlogPostPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { NIGHT_SUIT_POSTS } from "../Data/nsPageData";
import NightSuitBlogDetail from "../components/Nightsuitblogdetail";
import "../styles/blogPage.css";

export default function NightSuitBlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = NIGHT_SUIT_POSTS.find((p) => p.slug === slug);

  if (!post)
    return (
      <div style={{ textAlign: "center", padding: "3rem", color: "#999" }}>
        Blog post nahi mila.
      </div>
    );

  return (
    <div className="blog-wrapper">
      <NightSuitBlogDetail
        post={post}
        onBack={() => navigate("/blog/nightsuits")}
      />
    </div>
  );
}