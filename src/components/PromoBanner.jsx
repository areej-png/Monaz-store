import { useState, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { FaTruck, FaBox, FaUndo } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import "../styles/PromoBanner.css"; 

// Constants
const SLIDE_INTERVAL_MS = 3000;
const TICKER_REPEAT_COUNT = 6;
const AUTO_RESUME_DELAY_MS = 5000;

const PromoBanner = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const resumeTimerRef = useRef(null);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  // Memoize ticker items to prevent unnecessary re-renders
  const tickerItems = useMemo(
    () =>
      [...Array(TICKER_REPEAT_COUNT)].map((_, i) => (
        <div className="promo-feature-item" key={i}>
          <TbTruckDelivery className="promo-icon" aria-hidden="true" />
          <div className="promo-text">
            <span className="promo-title">Free Discreet Shipping</span>
            <span className="promo-sub">on All Orders Over Rs5000.</span>
          </div>
        </div>
      )),
    []
  );

  const handleDotClick = (index) => {
    setCurrent(index);
    setIsPaused(true);

    // Clear existing resume timer
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    // Resume auto-play after delay
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, AUTO_RESUME_DELAY_MS);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    setIsPaused(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="promo-wrapper">
      {/* Slider */}
      <div
        className={`promo-slider ${isLoaded ? "loaded" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Promotional banner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        <div className="promo-slides" aria-live="polite" aria-atomic="true">
          {images.map((img, index) => (
            <picture
              key={img.desktop || index}
              className={`promo-img ${current === index ? "active" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${images.length}`}
              aria-hidden={current !== index}
            >
              <source
                media="(max-width: 480px)"
                srcSet={img.mobile}
                type="image/webp"
              />
              <source
                media="(max-width: 768px)"
                srcSet={img.tablet}
                type="image/webp"
              />
              <img
                src={img.desktop}
                alt={img.alt || `Promotional slide ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                onLoad={() => index === 0 && setIsLoaded(true)}
              />
            </picture>
          ))}
        </div>

        {/* Navigation Dots */}
        {images.length > 1 && (
          <div className="promo-dots" role="tablist" aria-label="Slide navigation">
            {images.map((_, index) => (
              <button
                key={index}
                className={`promo-dot ${current === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index ? "true" : "false"}
                role="tab"
                aria-selected={current === index}
              />
            ))}
          </div>
        )}
      </div>

      {/* Features */}
      <div className="promo-features" role="list">
        <span role="listitem">
          <FaTruck aria-hidden="true" /> Soft Fabric
        </span>
        <span role="listitem">
          <FaBox aria-hidden="true" /> Discreet Packaging
        </span>
        <span role="listitem">
          <FaUndo aria-hidden="true" /> Easy Returns
        </span>
      </div>

      {/* Ticker */}
      <div className="promo-ticker" aria-label="Shipping information banner">
        <div className="ticker-track">{tickerItems}</div>
      </div>
    </section>
  );
};

PromoBanner.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      mobile: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      desktop: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

PromoBanner.defaultProps = {
  images: [],
};

export default PromoBanner;