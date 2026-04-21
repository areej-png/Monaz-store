import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useCallback } from "react";
import { hitArticlesData } from "../Data/hitArticlesData";
import { categoryBannersData } from "../Data/categoryBannersData";
import { blogData } from "../Data/blogData";
import "../styles/HomePage.css";

const HomePage = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const hitsRef        = useRef(null);
  const blogRef        = useRef(null);
  const hitsWrapperRef = useRef(null);
  const blogWrapperRef = useRef(null);

  // ── Dynamically set card widths based on ACTUAL rendered container ──
  const setCardWidths = useCallback(() => {

    // ── HITS ──
    if (hitsWrapperRef.current && hitsRef.current) {
      const wrapperW   = hitsWrapperRef.current.offsetWidth;
      const arrowL     = hitsWrapperRef.current.querySelector(".slider-arrow--left");
      const arrowR     = hitsWrapperRef.current.querySelector(".slider-arrow--right");
      const arrowLW    = arrowL ? arrowL.offsetWidth + parseFloat(getComputedStyle(arrowL).marginRight)  : 0;
      const arrowRW    = arrowR ? arrowR.offsetWidth + parseFloat(getComputedStyle(arrowR).marginLeft)   : 0;
      const scrollArea = wrapperW - arrowLW - arrowRW;

      const gap        = 12;
      const visible    = window.innerWidth <= 768 ? 3 : 5;
      const cardW      = Math.floor((scrollArea - gap * (visible - 1)) / visible);

      hitsRef.current.querySelectorAll(".hit-card").forEach((c) => {
        c.style.width = `${cardW}px`;
      });
    }

    // ── BLOG ──
    if (blogWrapperRef.current && blogRef.current) {

      // Desktop (>1024px): grid layout, remove inline widths
      if (window.innerWidth > 1024) {
        blogRef.current.querySelectorAll(".blog-card").forEach((c) => {
          c.style.width = "";
        });
        return;
      }

      const wrapperW   = blogWrapperRef.current.offsetWidth;
      const arrowL     = blogWrapperRef.current.querySelector(".slider-arrow--left");
      const arrowR     = blogWrapperRef.current.querySelector(".slider-arrow--right");
      const arrowLW    = arrowL ? arrowL.offsetWidth + parseFloat(getComputedStyle(arrowL).marginRight)  : 0;
      const arrowRW    = arrowR ? arrowR.offsetWidth + parseFloat(getComputedStyle(arrowR).marginLeft)   : 0;
      const scrollArea = wrapperW - arrowLW - arrowRW;

      const gap        = 16;
      const visible    = window.innerWidth <= 768 ? 1 : 2;
      const cardW      = Math.floor((scrollArea - gap * (visible - 1)) / visible);

      blogRef.current.querySelectorAll(".blog-card").forEach((c) => {
        c.style.width = `${cardW}px`;
      });
    }
  }, []);

  useEffect(() => {
    setCardWidths();
    window.addEventListener("resize", setCardWidths);
    return () => window.removeEventListener("resize", setCardWidths);
  }, [setCardWidths]);

  // Scroll exactly one card at a time
  const scroll = (ref, direction, gap = 12) => {
    const container = ref.current;
    if (!container) return;
    const firstCard = container.querySelector(".hit-card, .blog-card");
    const amount    = firstCard ? firstCard.offsetWidth + gap : 220;
    container.scrollLeft += direction === "left" ? -amount : amount;
  };

  return (
    <main>
      {/* ── HIT ARTICLES ── */}
      <section className="hits-section">
        <div className="section-inner">
          <h2 className="section-title">Worth the Hype</h2>

            <div className="slider-wrapper" ref={hitsWrapperRef}>
              <button
                className="slider-arrow slider-arrow--left"
                onClick={() => scroll(hitsRef, "left")}
                aria-label="Scroll left"
              >
                &#8249;
              </button>

              <div className="hits-scroll" ref={hitsRef}>
                <div className="hits-track">
                  {hitArticlesData.map((item, index) => (
                    <div key={index} className="hit-card">
                      <div
                        className="hit-img-wrapper"
                        onClick={() => navigate(`/product/${item.productId}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={item.image}
                          alt={item.label}
                          className="hit-img"
                        />
                      </div>
                      <p className="hit-label">{item.label}</p>
                      <p className="hit-price">
                        Rs {item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="slider-arrow slider-arrow--right"
                onClick={() => scroll(hitsRef, "right")}
                aria-label="Scroll right"
              >
                &#8250;
              </button>
            </div>
        </div>
      </section>

      {/* ── CATEGORY BANNERS ── */}
      <section className="category-banners-section">
        <div className="section-inner">
          <h2 className="section-title">Shop By Category</h2>
          <div className="category-banners-grid">
            {categoryBannersData.map((item) => (
              <div
                key={item.id}
                className="category-banner-card"
                onClick={() => navigate(`/category/${item.category}`)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="category-banner-img"
                />
                <div className="category-banner-label">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="blog-section" id="blog-section">
        <div className="section-inner">
          <h2 className="section-title">From The Blog</h2>
          <p className="blog-subtitle">Style tips, guides & behind the scenes</p>

          <div className="slider-wrapper" ref={blogWrapperRef}>
            <button
              className="slider-arrow slider-arrow--left"
              onClick={() => scroll(blogRef, "left")}
              aria-label="Scroll left"
            >
              &#8249;
            </button>

            <div className="blog-scroll" ref={blogRef}>
              <div className="blog-track">
                {blogData.map((post) => (
                  <div
                    key={post.id}
                    className="blog-card"
                    onClick={() => navigate(post.blogRoute)}
                  >
                    <div className="blog-img-wrapper">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="blog-img"
                      />
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <div className="blog-content">
                      <p className="blog-date">{post.date}</p>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <span className="blog-read-more">Read More →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="slider-arrow slider-arrow--right"
              onClick={() => scroll(blogRef, "right")}
              aria-label="Scroll right"
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;