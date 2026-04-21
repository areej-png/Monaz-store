export const SHIPPING_OPTIONS = [
  {
    id: "free",
    label: "Standard Delivery",
    description: "5–7 business days",
    price: 0,
  },
  {
    id: "express",
    label: "Express Delivery",
    description: "2–3 business days",
    price: 250,
  },
  {
    id: "overnight",
    label: "Overnight Delivery",
    description: "Next business day",
    price: 500,
  },
];

export const CITIES_PAKISTAN = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Abbottabad",
  "Bahawalpur",
  "Sargodha",
  "Sukkur",
];

export const PAYMENT_METHODS = [
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: "💵",
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    icon: "💳",
  },
  {
    id: "easypaisa",
    label: "EasyPaisa",
    icon: "📱",
  },
  {
    id: "jazzcash",
    label: "JazzCash",
    icon: "📲",
  },
];

// Coupon codes 
export const VALID_COUPONS = {
  WELCOME10: { type: "percent", value: 10 },
  FLAT200: { type: "flat", value: 200 },
  SAVE15: { type: "percent", value: 15 },
};