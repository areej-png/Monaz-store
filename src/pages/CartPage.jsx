import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa"
import "../styles/CartPage.css";

const CartPage = ({ cartItems, onRemove, onQuantityChange }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty.</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    );
  }
  return (
    <main className="cart-rapper">
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <button className="cart-close-btn" onClick={() => navigate(-1)}>
          <FaTimes />
        </button>
      </div>

      <div className="cart-content">

        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">

              <div className="cart-item-img-wrapper">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="cart-item-img"
                />
              </div>

              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-size">Size: {item.selectedSize}</p>
                <p className="cart-item-price">
                  Rs {item.price.toLocaleString()}
                </p>

                {/* Quantity */}
                <div className="cart-quantity-controls">
                  <button onClick={() => onQuantityChange(index, "dec")}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onQuantityChange(index, "inc")}>+</button>
                </div>
              </div>

              <div className="cart-item-right">
                <p className="cart-item-subtotal">
                  Rs {(item.price * item.quantity).toLocaleString()}
                </p>
                <button
                  className="cart-remove-btn"
                  onClick={() => onRemove(index)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rs {total.toLocaleString()}</span>
          </div>
          {/* <div className="summary-row">
            <span>Shipping</span>
            <span className="free-shipping">Free</span>
          </div> */}
          <div className="summary-divider" />
          <div className="summary-row total-row">
            <span>Total</span>
            <span>Rs {total.toLocaleString()}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

          <button
            className="continue-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>

      </div>
    </main>
  );
};

export default CartPage;