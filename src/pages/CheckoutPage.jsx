import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLock, FaCheckCircle } from "react-icons/fa";
import {
  SHIPPING_OPTIONS,
  CITIES_PAKISTAN,
  PAYMENT_METHODS,
  VALID_COUPONS,
} from "../Data/Checkoutdata"; 
import "../styles/CheckoutPage.css";

// ── Helpers ──────────────────────────────────────────────
const generateOrderId = () =>
  "ORD-" + Math.random().toString(36).substring(2, 8).toUpperCase();

const validate = (form) => {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = "First name required";
  if (!form.lastName.trim()) errors.lastName = "Last name required";
  if (!form.phone.trim() || !/^03\d{9}$/.test(form.phone))
    errors.phone = "Valid Pakistani number required (03XXXXXXXXX)";
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
    errors.email = "Valid email required";
  if (!form.address.trim()) errors.address = "Address required";
  if (!form.city) errors.city = "Please select a city";
  return errors;
};
// ─────────────────────────────────────────────────────────

const CheckoutPage = ({ cartItems }) => {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedShipping, setSelectedShipping] = useState(SHIPPING_OPTIONS[0].id);
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0].id);
  const [couponCode, setCouponCode] = useState("");
  const [couponMsg, setCouponMsg] = useState(null); // { type: "success"|"error", text }
  const [discount, setDiscount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [placing, setPlacing] = useState(false);

  // ── Computed values ──
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost =
    SHIPPING_OPTIONS.find((s) => s.id === selectedShipping)?.price ?? 0;

  const total = subtotal + shippingCost - discount;

  // ── Handlers ──
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    const coupon = VALID_COUPONS[code];
    if (!coupon) {
      setCouponMsg({ type: "error", text: "Invalid coupon code." });
      setDiscount(0);
      return;
    }
    const disc =
      coupon.type === "percent"
        ? Math.floor((subtotal * coupon.value) / 100)
        : coupon.value;
    setDiscount(disc);
    setCouponMsg({
      type: "success",
      text: `Coupon applied! You saved Rs ${disc.toLocaleString()}.`,
    });
  };

  const handlePlaceOrder = () => {
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setPlacing(true);

    // Simulate order API call (replace with Shopify API call)
    setTimeout(() => {
      setOrderId(generateOrderId());
      setOrderPlaced(true);
      setPlacing(false);
    }, 1400);
  };

  // ── Success Screen ──
  if (orderPlaced) {
    return (
      <div className="checkout-wrapper">
        <div className="checkout-success">
          <div className="success-icon">🎀</div>
          <h2 className="success-title">Order Placed Successfully!</h2>
          <p className="success-subtitle">
            Thank you for your order. We've received it and will start
            processing it shortly. You'll receive a confirmation on{" "}
            <strong>{form.email}</strong>.
          </p>
          <div className="order-id-tag">Order ID: {orderId}</div>
          <button className="success-home-btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // ── Main Checkout ──
  return (
    <main className="checkout-wrapper">

      {/* Header */}
      <div className="checkout-header">
        <button className="checkout-back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1 className="checkout-title">Checkout</h1>
        <div style={{ width: 38 }} />
      </div>

      {/* Steps */}
      <div className="checkout-steps">
        <div className="step done">
          <div className="step-circle">✓</div>
          <span className="step-label">Cart</span>
        </div>
        <div className="step-line done" />
        <div className="step active">
          <div className="step-circle">2</div>
          <span className="step-label">Checkout</span>
        </div>
        <div className="step-line" />
        <div className="step">
          <div className="step-circle">3</div>
          <span className="step-label">Confirm</span>
        </div>
      </div>

      <div className="checkout-content">

        {/* ── LEFT COLUMN: Forms ── */}
        <div className="checkout-form-col">

          {/* 1. Contact & Delivery Info */}
          <div className="checkout-section">
            <h2 className="section-heading">
              <span className="icon">📦</span> Delivery Information
            </h2>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input
                  className={`form-input ${errors.firstName ? "error" : ""}`}
                  name="firstName"
                  placeholder="Sara"
                  value={form.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <span className="field-error">{errors.firstName}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input
                  className={`form-input ${errors.lastName ? "error" : ""}`}
                  name="lastName"
                  placeholder="Khan"
                  value={form.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <span className="field-error">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  className={`form-input ${errors.phone ? "error" : ""}`}
                  name="phone"
                  placeholder="03001234567"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={11}
                />
                {errors.phone && (
                  <span className="field-error">{errors.phone}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  className={`form-input ${errors.email ? "error" : ""}`}
                  name="email"
                  type="email"
                  placeholder="sara@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Street Address *</label>
              <input
                className={`form-input ${errors.address ? "error" : ""}`}
                name="address"
                placeholder="House #12, Street 4, DHA Phase 2"
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="field-error">{errors.address}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">City *</label>
                <select
                  className={`form-select ${errors.city ? "error" : ""}`}
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                >
                  <option value="">Select city</option>
                  {CITIES_PAKISTAN.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <span className="field-error">{errors.city}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Postal Code</label>
                <input
                  className="form-input"
                  name="postalCode"
                  placeholder="75500"
                  value={form.postalCode}
                  onChange={handleChange}
                  maxLength={5}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Order Notes (optional)</label>
              <input
                className="form-input"
                name="notes"
                placeholder="Any special instructions..."
                value={form.notes}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 2. Shipping Options */}
          <div className="checkout-section">
            <h2 className="section-heading">
              <span className="icon">🚚</span> Shipping Method
            </h2>
            <div className="shipping-options">
              {SHIPPING_OPTIONS.map((option) => (
                <div
                  key={option.id}
                  className={`shipping-option ${
                    selectedShipping === option.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedShipping(option.id)}
                >
                  <div className="shipping-radio">
                    <div className="shipping-radio-dot" />
                  </div>
                  <div className="shipping-info">
                    <div className="shipping-name">{option.label}</div>
                    <div className="shipping-desc">{option.description}</div>
                  </div>
                  <div className="shipping-price">
                    {option.price === 0
                      ? "Free"
                      : `Rs ${option.price.toLocaleString()}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="checkout-section">
            <h2 className="section-heading">
              <span className="icon">💳</span> Payment Method
            </h2>
            <div className="payment-methods">
              {PAYMENT_METHODS.map((method) => (
                <div
                  key={method.id}
                  className={`payment-option ${
                    selectedPayment === method.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <span className="payment-icon">{method.icon}</span>
                  <span className="payment-label">{method.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Coupon */}
          <div className="checkout-section">
            <h2 className="section-heading">
              <span className="icon">🏷️</span> Coupon Code
            </h2>
            <div className="coupon-row">
              <input
                className="coupon-input"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value);
                  setCouponMsg(null);
                }}
              />
              <button className="coupon-apply-btn" onClick={handleApplyCoupon}>
                Apply
              </button>
            </div>
            {couponMsg && (
              <p className={`coupon-msg ${couponMsg.type}`}>{couponMsg.text}</p>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Summary ── */}
        <div className="checkout-summary">

          {/* Mini Cart */}
          <div className="summary-card">
            <h3 className="summary-card-title">Your Items ({cartItems.length})</h3>
            <div className="summary-items">
              {cartItems.map((item, i) => (
                <div key={i} className="summary-item">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="summary-item-img"
                  />
                  <div className="summary-item-info">
                    <div className="summary-item-name">{item.name}</div>
                    <div className="summary-item-meta">
                      {item.selectedSize} · Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="summary-item-price">
                    Rs {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="summary-card">
            <h3 className="summary-card-title">Price Summary</h3>
            <div className="price-rows">
              <div className="price-row">
                <span>Subtotal</span>
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <span>
                  {shippingCost === 0
                    ? "Free"
                    : `Rs ${shippingCost.toLocaleString()}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="price-row discount">
                  <span>Discount</span>
                  <span>− Rs {discount.toLocaleString()}</span>
                </div>
              )}
              <div className="price-divider" />
              <div className="price-row total">
                <span>Total</span>
                <span>Rs {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              className="place-order-btn"
              onClick={handlePlaceOrder}
              disabled={placing}
            >
              {placing ? "Placing Order..." : "Place Order"}
            </button>

            <div className="secure-note">
              <FaLock size={11} />
              <span>Secure & encrypted checkout</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default CheckoutPage;