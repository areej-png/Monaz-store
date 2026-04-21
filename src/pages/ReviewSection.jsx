import { useState } from "react";

const starSVG = (filled, size = 14) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
    fill={filled ? "#b5577a" : "none"} stroke="#b5577a" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const INITIAL_REVIEWS = [
  { name: "Ayesha K.", rating: 5, text: "Absolutely love this! Quality is amazing and fits perfectly.", date: "Apr 12, 2025", verified: true },
  { name: "Sara M.", rating: 4, text: "Beautiful product, color is exactly as shown. Delivery was quick too.", date: "Mar 28, 2025", verified: true },
  { name: "Hira J.", rating: 3, text: "Good quality but sizing runs a bit small. Order one size up.", date: "Mar 10, 2025", verified: false },
  { name: "Nadia R.", rating: 5, text: "Exceeded my expectations! Fabric is so soft and stitching is neat.", date: "Feb 22, 2025", verified: true },
];

const distribution = { 5: 14, 4: 6, 3: 2, 2: 1, 1: 1 };
const total = Object.values(distribution).reduce((a, b) => a + b, 0);

const ReviewSection = ({ product }) => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [sort, setSort] = useState("recent");

  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  const sorted = [...reviews].sort((a, b) => {
    if (sort === "high") return b.rating - a.rating;
    if (sort === "low") return a.rating - b.rating;
    return 0;
  });

  const handleSubmit = () => {
    if (!name.trim() || !text.trim() || !selected) {
      setError("Please fill all fields and select a rating.");
      return;
    }
    setError("");
    setReviews([{ name, rating: selected, text, date: "Just now", verified: false }, ...reviews]);
    setName(""); setText(""); setSelected(0);
  };

  return (
    <div className="rv-root">

      {/* Summary */}
      <div className="rv-summary">
        <div className="rv-big-score">
          <div className="rv-big-num">{avgRating}</div>
          <div className="rv-big-stars">
            {[1,2,3,4,5].map(s => <span key={s}>{starSVG(s <= Math.round(avgRating), 16)}</span>)}
          </div>
          <div className="rv-big-count">{reviews.length} reviews</div>
        </div>
        <div className="rv-bars">
          {[5,4,3,2,1].map(star => {
            const pct = Math.round((distribution[star] / total) * 100);
            return (
              <div className="rv-bar-row" key={star}>
                <span className="rv-bar-label">{star} ★</span>
                <div className="rv-bar-track">
                  <div className="rv-bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="rv-bar-count">{distribution[star]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Write Review */}
      <div className="rv-write">
        <h3>Write a Review</h3>
        <div className="rv-star-pick">
          {[1,2,3,4,5].map(s => (
            <span key={s}
              onClick={() => setSelected(s)}
              onMouseEnter={() => setHovered(s)}
              onMouseLeave={() => setHovered(0)}
              style={{ cursor: "pointer" }}
            >
              {starSVG(s <= (hovered || selected), 22)}
            </span>
          ))}
        </div>
        <input
          className="rv-input"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          className="rv-textarea"
          placeholder="Share your experience with this product..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        {error && <p className="rv-error">{error}</p>}
        <button className="rv-submit" onClick={handleSubmit}>Submit Review</button>
      </div>

      {/* Sort */}
      <div className="rv-sort">
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="recent">Most Recent</option>
          <option value="high">Highest Rated</option>
          <option value="low">Lowest Rated</option>
        </select>
      </div>

      {/* Review Cards */}
      <div className="rv-list">
        {sorted.map((r, i) => {
          const initials = r.name.split(" ").map(w => w[0]).join("").slice(0, 2);
          return (
            <div className="rv-card" key={i}>
              <div className="rv-card-top">
                <div className="rv-author">
                  <div className="rv-avatar">{initials}</div>
                  <div>
                    <div className="rv-name">{r.name}</div>
                    <div className="rv-date">{r.date}</div>
                  </div>
                </div>
                <div className="rv-stars">
                  {[1,2,3,4,5].map(s => <span key={s}>{starSVG(s <= r.rating)}</span>)}
                </div>
              </div>
              <p className="rv-text">{r.text}</p>
              {r.verified && <p className="rv-verified">✓ Verified Purchase</p>}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ReviewSection;