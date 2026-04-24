import { useState, useEffect } from "react";
import { FaTruck, FaBox, FaUndo } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import "../styles/PromoBanner.css";

const PromoBanner = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="promo-wrapper">
      <div className="promo-slider">
        {images.map((img, index) => (
          <picture
            key={index}
            className={`promo-img ${current === index ? "active" : ""}`}
          >
            {/* Mobile: 480px aur neeche */}
            <source
              media="(max-width: 480px)"
              srcSet={img.mobile}
              type="image/webp"
            />
            {/* Tablet: 481px se 768px */}
            <source
              media="(max-width: 768px)"
              srcSet={img.tablet}
              type="image/webp"
            />
            {/* Desktop: 769px aur upar — default */}
            <img
              src={img.desktop}
              alt={img.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </picture>
        ))}

        {/* Dots */}
        <div className="promo-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`promo-dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      <div className="promo-features">
        <span><FaTruck /> Soft Fabric</span>
        <span><FaBox /> Discreet Packaging</span>
        <span><FaUndo /> Easy Returns</span>
      </div>

      {/* <div className="promo-ticker">
        <div className="ticker-track">
          {[...Array(6)].map((_, i) => (
            <span key={i}>
              🚚 Enjoy Free Discreet Shipping on All Orders Over Rs5000.
            </span>
          ))}
        </div>
      </div> */}
      <div className="promo-ticker">
  <div className="ticker-track">
    {[...Array(6)].map((_, i) => (
      <div className="promo-feature-item" key={i}>
        <TbTruckDelivery className="promo-icon" />
        <div className="promo-text">
          <span className="promo-title">Free Discreet Shipping</span>
          <span className="promo-sub">on All Orders Over Rs5000.</span>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default PromoBanner;