import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../Data/productsData";
import ReviewSection from "./ReviewSection";
import "../styles/ProductDetailPage.css";

/* ─── helpers ─────────────────────────────────────────────── */
const Heart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Star = ({ filled }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? "#b5577a" : "none"} stroke="#b5577a" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* Related / Recently Viewed card */
const ProductCard = ({ product, onClick }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgArray = product.images ?? [];

  useEffect(() => {
    if (imgArray.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % imgArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pc-card" onClick={() => onClick(product.id)}>
      <div className="pc-img-wrap">
        <picture style={{ width: "100%", height: "100%", display: "block" }}>
          <source
            media="(max-width: 480px)"
            srcSet={product.imageMobile?.[currentImg] ?? imgArray[currentImg]}
          />
          <img
            src={imgArray[currentImg]}
            alt={product.name}
            className="pc-img"
            loading="lazy"
            width="800"
            height="1000"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
        </picture>
        <div className="pc-overlay">View Product</div>
        {imgArray.length > 1 && (
          <div className="pc-dots">
            {imgArray.map((_, i) => (
              <span
                key={i}
                className={`pc-dot ${i === currentImg ? "pc-dot--active" : ""}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="pc-info">
        <p className="pc-name">{product.name}</p>
        <p className="pc-price">Rs {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

/* ─── main ────────────────────────────────────────────────── */
const ProductDetailPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const product = productsData.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedAnim, setAddedAnim] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  /* reset state when product changes */
  useEffect(() => {
    setSelectedImage(0);
    setSelectedSize(null);
    setQuantity(1);
    setSizeError(false);
    setAddedAnim(false);
    setIsPaused(false);
  }, [id]);

  /* ── AUTO SLIDE for main image ── */
  useEffect(() => {
    if (!product || product.images.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [product, isPaused]);

  /* recently viewed */
  useEffect(() => {
    if (!product) return;
    const key = "recentlyViewed";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    const updated = [product.id, ...prev.filter((i) => i !== product.id)].slice(0, 6);
    localStorage.setItem(key, JSON.stringify(updated));
  }, [product]);

  if (!product) return <p className="not-found">Product not found.</p>;

  const related = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const recentIds = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
  const recentlyViewed = recentIds
    .map((rid) => productsData.find((p) => p.id === rid))
    .filter(Boolean)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    onAddToCart({ ...product, selectedSize, quantity });
    setAddedAnim(true);
    setTimeout(() => { setAddedAnim(false); navigate("/cart"); }, 700);
  };

  const handleQuantity = (type) => {
    if (type === "inc") setQuantity((p) => p + 1);
    if (type === "dec" && quantity > 1) setQuantity((p) => p - 1);
  };

  const rating = product.rating || 4;

  return (
    <main className="pdp-root">

      {/* BREADCRUMB */}
      <nav className="pdp-breadcrumb">
        <span onClick={() => navigate("/")}>Home</span>
        <span className="sep">›</span>
        <span onClick={() => navigate(-1)}>{product.category}</span>
        <span className="sep">›</span>
        <span className="current">{product.name}</span>
      </nav>

      {/* HERO */}
      <section className="pdp-hero">

        {/* LEFT — gallery */}
        <div className="pdp-gallery">
          <div className="pdp-main-img-wrap">
            {product.isNew && <span className="pdp-badge">New</span>}
            <img
              key={selectedImage}
              src={product.images[selectedImage]}
              alt={product.name}
              className="pdp-main-img"
            />
          </div>

          {/* thumbnails — hover pe pause */}
          {product.images.length > 1 && (
            <div
              className="pdp-thumbs"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`pdp-thumb ${selectedImage === i ? "active" : ""}`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — info */}
        <div className="pdp-info">

          <div className="pdp-stars">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} filled={s <= rating} />)}
            <span className="pdp-reviews">{product.reviewCount || 0} reviews</span>
          </div>

          <h1 className="pdp-name">{product.name}</h1>

          <div className="pdp-price-row">
            <span className="pdp-price">Rs {product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="pdp-old-price">Rs {product.oldPrice.toLocaleString()}</span>
            )}
            {product.oldPrice && (
              <span className="pdp-discount">
                -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </span>
            )}
          </div>

          <p className="pdp-stock">✓ In Stock</p>
          <p className="pdp-desc">{product.description}</p>

          <hr className="pdp-divider" />

          {/* Size */}
          <div className="pdp-row-label">
            <span>Select Size</span>
            <button className="pdp-size-chart-btn" onClick={() => setShowSizeChart(true)}>
              Size Guide
            </button>
          </div>
          <div className="pdp-sizes">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`pdp-size-btn ${selectedSize === size ? "sel" : ""}`}
                onClick={() => { setSelectedSize(size); setSizeError(false); }}
              >
                {size}
              </button>
            ))}
          </div>
          {sizeError && <p className="pdp-size-error">Please select a size to continue.</p>}

          {/* Quantity */}
          <div className="pdp-row-label pdp-qty-label">
            <span>Quantity</span>
          </div>
          <div className="pdp-qty">
            <button onClick={() => handleQuantity("dec")}>−</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantity("inc")}>+</button>
          </div>

          {/* Actions */}
          <div className="pdp-actions">
            <button
              className={`pdp-add-btn ${addedAnim ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {addedAnim ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <button
              className={`pdp-wish-btn ${wishlisted ? "active" : ""}`}
              onClick={() => setWishlisted((w) => !w)}
              title="Add to Wishlist"
            >
              <Heart />
            </button>
          </div>

          {product.tags && (
            <div className="pdp-meta">
              {product.tags.map((tag) => (
                <span key={tag} className="pdp-tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TABS */}
      <section className="pdp-tabs">
        <div className="pdp-tab-head">
          <span
            className={`pdp-tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </span>
          <span
            className={`pdp-tab ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviewCount || 0})
          </span>
        </div>
        <div className="pdp-tab-body">
          {activeTab === "description" ? (
            <p>{product.fullDescription || product.description}</p>
          ) : (
            <ReviewSection product={product} />
          )}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="pdp-section">
          <div className="pdp-section-head">
            <h2>You May Also Like</h2>
            <span className="pdp-see-all" onClick={() => navigate(-1)}>View All →</span>
          </div>
          <div className="pdp-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onClick={(pid) => navigate(`/product/${pid}`)} />
            ))}
          </div>
        </section>
      )}

      {/* RECENTLY VIEWED */}
      {recentlyViewed.length > 0 && (
        <section className="pdp-section">
          <div className="pdp-section-head">
            <h2>Recently Viewed</h2>
          </div>
          <div className="pdp-grid">
            {recentlyViewed.map((p) => (
              <ProductCard key={p.id} product={p} onClick={(pid) => navigate(`/product/${pid}`)} />
            ))}
          </div>
        </section>
      )}

      {/* SIZE CHART MODAL */}
      {showSizeChart && (
        <div className="pdp-modal-overlay" onClick={() => setShowSizeChart(false)}>
          <div className="pdp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pdp-modal-head">
              <h3>Size Guide</h3>
              <button onClick={() => setShowSizeChart(false)}>✕</button>
            </div>
            <table className="pdp-size-table">
              <thead>
                <tr>{product.sizeChart?.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {product.sizeChart?.rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </main>
  );
};

export default ProductDetailPage;