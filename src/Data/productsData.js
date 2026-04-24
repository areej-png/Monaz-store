export const productsData = [
// 1. NEW ARRIVALS
  {
    id: 101,
    name: "Floral Lace Nighty",
    price: 2499,
    category: "new-arrivals",
    subCategory: "",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Beautiful floral lace nighty, perfect for warm nights.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "28"], ["M", "36", "30"], ["L", "38", "32"], ["XL", "40", "34"]],
    },
  },
  {
    id: 102,
    name: "Satin Sleep Set",
    price: 3299,
    category: "new-arrivals",
    subCategory: "",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Luxurious satin sleep set with matching shorts.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "28"], ["M", "36", "30"], ["L", "38", "32"], ["XL", "40", "34"]],
    },
  },
  {
    id: 103,
    name: "Cotton Lounge Set",
    price: 1899,
    category: "new-arrivals",
    subCategory: "",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Soft cotton lounge set, great for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "28"], ["M", "36", "30"], ["L", "38", "32"], ["XL", "40", "34"], ["XXL", "42", "36"]],
    },
  },

  // ─────────────────────────────────────────
  // 2. PJ SETS → Plain PJ Sets
  // ─────────────────────────────────────────
  {
    id: 201,
    name: "Classic Plain PJ Set",
    price: 2999,
    category: "pj-sets",
    subCategory: "Plain PJ Sets",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Soft plain cotton PJ set for everyday comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "34", "28", "36"], ["M", "36", "30", "38"], ["L", "38", "32", "40"], ["XL", "40", "34", "42"], ["XXL", "42", "36", "44"]],
    },
  },
  {
    id: 207,
    name: "Silk Night Dress",
    price: 2999,
    category: "pj-sets",
    subCategory: "Plain PJ Sets",
    images: [
      "/images/products/1.jpg",
       "/images/products/2.jpg",
      "/images/products/3.jpg",
       "/images/products/5.jpg",
    ],
    imageMobile: [
    "/images/products/mob.jpg",
    "/images/products/mob2.jpg",
    "/images/products/mob3.jpg",
    "/images/products/mob5.jpg",
  ],
    description: "Luxuriously soft silk night dress perfect for a comfortable night's sleep. Features a relaxed fit with delicate lace trim.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [
        ["S", "34", "28", "36"],
        ["M", "36", "30", "38"],
        ["L", "38", "32", "40"],
        ["XL", "40", "34", "42"],
        ["XXL", "42", "36", "44"],
      ],
    },
  },
  {
    id: 202,
    name: "Pastel Plain Night Set",
    price: 2799,
    category: "pj-sets",
    subCategory: "Plain PJ Sets",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Light pastel plain PJ set, breathable and comfortable.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "34", "28", "36"], ["M", "36", "30", "38"], ["L", "38", "32", "40"], ["XL", "40", "34", "42"]],
    },
  },
  {
    id: 203,
    name: "Silk Plain PJ Set",
    price: 3499,
    category: "pj-sets",
    subCategory: "Plain PJ Sets",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Luxurious silk plain PJ set for a smooth night's sleep.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "34", "28", "36"], ["M", "36", "30", "38"], ["L", "38", "32", "40"], ["XL", "40", "34", "42"]],
    },
  },

  // ─────────────────────────────────────────
  // 2. PJ SETS → Printed PJ Sets
  // ─────────────────────────────────────────
  {
    id: 204,
    name: "Floral Printed PJ Set",
    price: 3199,
    category: "pj-sets",
    subCategory: "Printed PJ Sets",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Cute floral printed PJ set with relaxed fit.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "34", "28", "36"], ["M", "36", "30", "38"], ["L", "38", "32", "40"], ["XL", "40", "34", "42"]],
    },
  },
  {
    id: 205,
    name: "Polka Dot PJ Set",
    price: 2899,
    category: "pj-sets",
    subCategory: "Printed PJ Sets",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Fun polka dot printed PJ set in soft cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "34", "28", "36"], ["M", "36", "30", "38"], ["L", "38", "32", "40"], ["XL", "40", "34", "42"], ["XXL", "42", "36", "44"]],
    },
  },
  {
    id: 206,
    name: "Geometric Print Night Set",
    price: 3099,
    category: "pj-sets",
    subCategory: "Printed PJ Sets",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Modern geometric printed PJ set with button-down top.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "34", "28", "36"], ["M", "36", "30", "38"], ["L", "38", "32", "40"], ["XL", "40", "34", "42"]],
    },
  },

  // ─────────────────────────────────────────
  // 3. BRAS → Push-Up Bras
  // ─────────────────────────────────────────
  {
    id: 301,
    name: "Classic Push-Up Bra",
    price: 1599,
    category: "bras",
    subCategory: "Push-Up Bras",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Classic push-up bra with foam padding for extra lift.",
    sizes: ["32B", "34B", "34C", "36B", "36C"],
    sizeChart: {
      headers: ["Size", "Band (inches)", "Cup"],
      rows: [["32B", "28-30", "B"], ["34B", "30-32", "B"], ["34C", "30-32", "C"], ["36B", "32-34", "B"], ["36C", "32-34", "C"]],
    },
  },
  {
    id: 302,
    name: "Lace Push-Up Bra",
    price: 1799,
    category: "bras",
    subCategory: "Push-Up Bras",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Elegant lace push-up bra with underwire support.",
    sizes: ["32B", "34B", "34C", "36C"],
    sizeChart: {
      headers: ["Size", "Band (inches)", "Cup"],
      rows: [["32B", "28-30", "B"], ["34B", "30-32", "B"], ["34C", "30-32", "C"], ["36C", "32-34", "C"]],
    },
  },

  // ─────────────────────────────────────────
  // 3. BRAS → T-Shirt Bras
  // ─────────────────────────────────────────
  {
    id: 303,
    name: "Seamless T-Shirt Bra",
    price: 1399,
    category: "bras",
    subCategory: "T-Shirt Bras",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Seamless T-shirt bra, invisible under clothing.",
    sizes: ["32B", "34B", "34C", "36B", "36C", "38C"],
    sizeChart: {
      headers: ["Size", "Band (inches)", "Cup"],
      rows: [["32B", "28-30", "B"], ["34B", "30-32", "B"], ["34C", "30-32", "C"], ["36B", "32-34", "B"], ["36C", "32-34", "C"], ["38C", "34-36", "C"]],
    },
  },
  {
    id: 304,
    name: "Padded T-Shirt Bra",
    price: 1499,
    category: "bras",
    subCategory: "T-Shirt Bras",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Lightly padded T-shirt bra for natural shape.",
    sizes: ["32B", "34B", "34C", "36C"],
    sizeChart: {
      headers: ["Size", "Band (inches)", "Cup"],
      rows: [["32B", "28-30", "B"], ["34B", "30-32", "B"], ["34C", "30-32", "C"], ["36C", "32-34", "C"]],
    },
  },

  // ─────────────────────────────────────────
  // 3. BRAS → Sports Bras
  // ─────────────────────────────────────────
  {
    id: 305,
    name: "High Impact Sports Bra",
    price: 1899,
    category: "bras",
    subCategory: "Sports Bras",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "High impact sports bra for intense workouts.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)"],
      rows: [["S", "32-34"], ["M", "34-36"], ["L", "36-38"], ["XL", "38-40"]],
    },
  },
  {
    id: 306,
    name: "Medium Support Sports Bra",
    price: 1599,
    category: "bras",
    subCategory: "Sports Bras",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Medium support sports bra, great for yoga and pilates.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)"],
      rows: [["S", "32-34"], ["M", "34-36"], ["L", "36-38"], ["XL", "38-40"]],
    },
  },

  // ─────────────────────────────────────────
  // 3. BRAS → Wireless Bras
  // ─────────────────────────────────────────
  {
    id: 307,
    name: "Soft Wireless Bra",
    price: 1299,
    category: "bras",
    subCategory: "Wireless Bras",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Ultra-soft wireless bra for all-day comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)"],
      rows: [["S", "32-34"], ["M", "34-36"], ["L", "36-38"], ["XL", "38-40"], ["XXL", "40-42"]],
    },
  },

  // ─────────────────────────────────────────
  // 3. BRAS → Strapless Bras
  // ─────────────────────────────────────────
  {
    id: 308,
    name: "Strapless Push-Up Bra",
    price: 1699,
    category: "bras",
    subCategory: "Strapless Bras",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Secure strapless bra with silicone grip band.",
    sizes: ["32B", "34B", "34C", "36C"],
    sizeChart: {
      headers: ["Size", "Band (inches)", "Cup"],
      rows: [["32B", "28-30", "B"], ["34B", "30-32", "B"], ["34C", "30-32", "C"], ["36C", "32-34", "C"]],
    },
  },

  // ─────────────────────────────────────────
  // 4. PANTIES → Briefs
  // ─────────────────────────────────────────
  {
    id: 401,
    name: "Cotton Full Brief",
    price: 599,
    category: "panties",
    subCategory: "Briefs",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Comfortable full coverage cotton brief.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"], ["XXL", "34-36", "42-44"]],
    },
  },
  {
    id: 402,
    name: "Lace Trim Brief",
    price: 699,
    category: "panties",
    subCategory: "Briefs",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Soft cotton brief with decorative lace trim.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"]],
    },
  },

  // ─────────────────────────────────────────
  // 4. PANTIES → Thongs
  // ─────────────────────────────────────────
  {
    id: 403,
    name: "Basic Thong",
    price: 499,
    category: "panties",
    subCategory: "Thongs",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Seamless basic thong for no visible panty line.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"]],
    },
  },
  {
    id: 404,
    name: "Lace Thong",
    price: 649,
    category: "panties",
    subCategory: "Thongs",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Delicate lace thong with satin bow detail.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"]],
    },
  },

  // ─────────────────────────────────────────
  // 4. PANTIES → Boyshorts
  // ─────────────────────────────────────────
  {
    id: 405,
    name: "Cotton Boyshort",
    price: 699,
    category: "panties",
    subCategory: "Boyshorts",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Comfortable cotton boyshort with full coverage.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"], ["XXL", "34-36", "42-44"]],
    },
  },

  // ─────────────────────────────────────────
  // 4. PANTIES → High Waist
  // ─────────────────────────────────────────
  {
    id: 406,
    name: "High Waist Control Brief",
    price: 899,
    category: "panties",
    subCategory: "High Waist",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "High waist brief with light tummy control.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"], ["XXL", "34-36", "42-44"]],
    },
  },

  // ─────────────────────────────────────────
  // 4. PANTIES → Bikini
  // ─────────────────────────────────────────
  {
    id: 407,
    name: "Classic Bikini Panty",
    price: 549,
    category: "panties",
    subCategory: "Bikini",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Classic bikini cut panty in soft microfiber.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"]],
    },
  },

  // ─────────────────────────────────────────
  // 5. BRA PANTY SETS → Lace Sets
  // ─────────────────────────────────────────
  {
    id: 501,
    name: "Black Lace Bra Panty Set",
    price: 2499,
    category: "bra-panty-sets",
    subCategory: "Lace Sets",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Elegant black lace bra and panty matching set.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "26-28"], ["M", "36", "28-30"], ["L", "38", "30-32"], ["XL", "40", "32-34"]],
    },
  },
  {
    id: 502,
    name: "Red Lace Set",
    price: 2699,
    category: "bra-panty-sets",
    subCategory: "Lace Sets",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Bold red lace set with push-up bra and matching brief.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "26-28"], ["M", "36", "28-30"], ["L", "38", "30-32"], ["XL", "40", "32-34"]],
    },
  },

  // ─────────────────────────────────────────
  // 5. BRA PANTY SETS → Cotton Sets
  // ─────────────────────────────────────────
  {
    id: 503,
    name: "Everyday Cotton Set",
    price: 1799,
    category: "bra-panty-sets",
    subCategory: "Cotton Sets",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Comfortable everyday cotton bra and panty set.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "26-28"], ["M", "36", "28-30"], ["L", "38", "30-32"], ["XL", "40", "32-34"], ["XXL", "42", "34-36"]],
    },
  },

  // ─────────────────────────────────────────
  // 5. BRA PANTY SETS → Satin Sets
  // ─────────────────────────────────────────
  {
    id: 504,
    name: "Ivory Satin Set",
    price: 2999,
    category: "bra-panty-sets",
    subCategory: "Satin Sets",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Smooth ivory satin bra and panty set, luxuriously soft.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "26-28"], ["M", "36", "28-30"], ["L", "38", "30-32"], ["XL", "40", "32-34"]],
    },
  },

  // ─────────────────────────────────────────
  // 5. BRA PANTY SETS → Bridal Sets
  // ─────────────────────────────────────────
  {
    id: 505,
    name: "White Bridal Lace Set",
    price: 3499,
    category: "bra-panty-sets",
    subCategory: "Bridal Sets",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Dreamy white bridal lace set with delicate floral detail.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)"],
      rows: [["S", "34", "26-28"], ["M", "36", "28-30"], ["L", "38", "30-32"], ["XL", "40", "32-34"]],
    },
  },

  // ─────────────────────────────────────────
  // 6. BODY SHAPERS → Waist Cinchers
  // ─────────────────────────────────────────
  {
    id: 601,
    name: "Latex Waist Cincher",
    price: 2999,
    category: "body-shapers",
    subCategory: "Waist Cinchers",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Firm latex waist cincher for instant slimming effect.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)"],
      rows: [["S", "24-26"], ["M", "27-29"], ["L", "30-32"], ["XL", "33-35"], ["XXL", "36-38"]],
    },
  },
  {
    id: 602,
    name: "Breathable Waist Trainer",
    price: 2599,
    category: "body-shapers",
    subCategory: "Waist Cinchers",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Breathable waist trainer with hook-and-eye closure.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)"],
      rows: [["S", "24-26"], ["M", "27-29"], ["L", "30-32"], ["XL", "33-35"]],
    },
  },

  // ─────────────────────────────────────────
  // 6. BODY SHAPERS → Full Body
  // ─────────────────────────────────────────
  {
    id: 603,
    name: "Full Body Shaper Suit",
    price: 3999,
    category: "body-shapers",
    subCategory: "Full Body",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Full body shaper from bust to thigh for a smooth silhouette.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "34", "28", "36"], ["M", "36", "30", "38"], ["L", "38", "32", "40"], ["XL", "40", "34", "42"], ["XXL", "42", "36", "44"]],
    },
  },

  // ─────────────────────────────────────────
  // 6. BODY SHAPERS → Shorts
  // ─────────────────────────────────────────
  {
    id: 604,
    name: "Slimming Shaper Shorts",
    price: 1999,
    category: "body-shapers",
    subCategory: "Shorts",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "High-waist slimming shorts with tummy and thigh control.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"], ["XXL", "34-36", "42-44"]],
    },
  },

  // ─────────────────────────────────────────
  // 7. LINGERIE → Babydolls
  // ─────────────────────────────────────────
  {
    id: 701,
    name: "Pink Lace Babydoll",
    price: 2199,
    category: "lingerie",
    subCategory: "Babydolls",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Flowy pink lace babydoll with matching thong.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Hip (inches)"],
      rows: [["S", "34", "36"], ["M", "36", "38"], ["L", "38", "40"], ["XL", "40", "42"]],
    },
  },
  {
    id: 702,
    name: "Black Mesh Babydoll",
    price: 2499,
    category: "lingerie",
    subCategory: "Babydolls",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Sheer black mesh babydoll with lace panel.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Hip (inches)"],
      rows: [["S", "34", "36"], ["M", "36", "38"], ["L", "38", "40"], ["XL", "40", "42"]],
    },
  },

  // ─────────────────────────────────────────
  // 7. LINGERIE → Teddies
  // ─────────────────────────────────────────
  {
    id: 703,
    name: "Satin Teddy",
    price: 2799,
    category: "lingerie",
    subCategory: "Teddies",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Smooth satin teddy with snap closure.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Hip (inches)"],
      rows: [["S", "34", "36"], ["M", "36", "38"], ["L", "38", "40"], ["XL", "40", "42"]],
    },
  },

  // ─────────────────────────────────────────
  // 7. LINGERIE → Corsets
  // ─────────────────────────────────────────
  {
    id: 704,
    name: "Steel Boned Corset",
    price: 4999,
    category: "lingerie",
    subCategory: "Corsets",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Classic steel boned corset for dramatic waist reduction.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)"],
      rows: [["S", "24-26"], ["M", "27-29"], ["L", "30-32"], ["XL", "33-35"]],
    },
  },

  // ─────────────────────────────────────────
  // 7. LINGERIE → Garter Sets
  // ─────────────────────────────────────────
  {
    id: 705,
    name: "Lace Garter Set",
    price: 1999,
    category: "lingerie",
    subCategory: "Garter Sets",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Romantic lace garter belt set with matching stockings.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"]],
    },
  },

  // ─────────────────────────────────────────
  // 8. TOPS
  // ─────────────────────────────────────────
  {
    id: 801,
    name: "Ribbed Crop Top",
    price: 1299,
    category: "tops",
    subCategory: "",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Stretchy ribbed crop top, perfect for layering.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Length (inches)"],
      rows: [["S", "34", "16"], ["M", "36", "17"], ["L", "38", "18"], ["XL", "40", "19"]],
    },
  },
  {
    id: 802,
    name: "Cami Strap Top",
    price: 999,
    category: "tops",
    subCategory: "",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Lightweight cami strap top in soft jersey fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Length (inches)"],
      rows: [["S", "34", "22"], ["M", "36", "23"], ["L", "38", "24"], ["XL", "40", "25"], ["XXL", "42", "26"]],
    },
  },
  {
    id: 803,
    name: "Lace Trim Cami",
    price: 1199,
    category: "tops",
    subCategory: "",
    images: ["/images/products/1.jpg"],
    imageMobile: ["/images/products/mob.jpg"],
    description: "Soft cami with delicate lace trim at neckline and hem.",
    sizes: ["S", "M", "L", "XL"],
    sizeChart: {
      headers: ["Size", "Chest (inches)", "Length (inches)"],
      rows: [["S", "34", "22"], ["M", "36", "23"], ["L", "38", "24"], ["XL", "40", "25"]],
    },
  },

  // ─────────────────────────────────────────
  // 9. BOTTOMS
  // ─────────────────────────────────────────
  {
    id: 901,
    name: "Satin Sleep Shorts",
    price: 1299,
    category: "bottoms",
    subCategory: "",
    images: ["/images/products/2.jpg"],
    imageMobile: ["/images/products/mob2.jpg"],
    description: "Smooth satin sleep shorts with elastic waistband.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"], ["XXL", "34-36", "42-44"]],
    },
  },
  {
    id: 902,
    name: "Flowy Lounge Pants",
    price: 1799,
    category: "bottoms",
    subCategory: "",
    images: ["/images/products/3.jpg"],
    imageMobile: ["/images/products/mob3.jpg"],
    description: "Wide-leg lounge pants in lightweight fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)", "Length (inches)"],
      rows: [["S", "26-28", "34-36", "38"], ["M", "28-30", "36-38", "39"], ["L", "30-32", "38-40", "40"], ["XL", "32-34", "40-42", "41"], ["XXL", "34-36", "42-44", "42"]],
    },
  },
  {
    id: 903,
    name: "Cotton Pyjama Bottoms",
    price: 1499,
    category: "bottoms",
    subCategory: "",
    images: ["/images/products/5.jpg"],
    imageMobile: ["/images/products/mob5.jpg"],
    description: "Classic cotton pyjama bottoms with drawstring waist.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeChart: {
      headers: ["Size", "Waist (inches)", "Hip (inches)"],
      rows: [["S", "26-28", "34-36"], ["M", "28-30", "36-38"], ["L", "30-32", "38-40"], ["XL", "32-34", "40-42"], ["XXL", "34-36", "42-44"]],
    },
  },
];