import { useNavigate } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const { name, price, images, image } = product;

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-img-wrapper">
        <img
          src={images ? images[0] : image}
          alt={name}
          className="product-img"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Rs {price.toLocaleString()}</p>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            // Agar onAddToCart available hai to seedha cart mein daalo
            if (onAddToCart) {
              onAddToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: images ? images[0] : image,
                selectedSize: "Default",
                quantity: 1,
              });
            } else {
              navigate(`/product/${product.id}`);
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;