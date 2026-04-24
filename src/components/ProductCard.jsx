import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { name, price, images, image } = product;
  const imgArray = images ?? [image];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (imgArray.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % imgArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imgArray.length]);

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-img-wrapper">
        <picture style={{ width: "100%", height: "100%", display: "block" }}>
          <source
            media="(max-width: 480px)"
            srcSet={product.imageMobile?.[currentImg] ?? imgArray[currentImg]}
          />
          <img
            src={imgArray[currentImg]}
            alt={name}
            className="product-img"
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

        <div
          className="product-overlay"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          Select Size & Add to Cart
        </div>

        {imgArray.length > 1 && (
          <div className="product-dots">
            {imgArray.map((_, i) => (
              <span
                key={i}
                className={`product-dot ${i === currentImg ? "product-dot--active" : ""}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Rs {price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;