// nsPageData.js
// Night Suit Blog — Static Data

export const NIGHT_SUIT_POSTS = [
  {
    id: 1,
    category: "Season Guide",
    title: "Har Mausam Ke Liye Sahi Night Suit",
    subtitle: "Garmi ho ya sardi — fabric aur style ka sahi intikhaab neend ko behtar banata hai. Season-by-season guide.",
    readTime: "5 min read",
    emoji: "🌙",
    emojiColor: "#EEF0FB",
    slug: "night-suit-season-guide",
  },
  {
    id: 2,
    category: "Fabric Guide",
    title: "Night Suit Fabric Kaun Sa Choose Karein?",
    subtitle: "Cotton, satin, fleece — har fabric ka alag faida hai. Jaanein konsa aapke liye best hai.",
    readTime: "3 min read",
    emoji: "🧵",
    emojiColor: "#FFF5E4",
    slug: "night-suit-fabric-guide",
  },
  {
    id: 3,
    category: "Style Tips",
    title: "Night Suit Style Guide — Comfort Aur Look Dono",
    subtitle: "Pyjama set, nighty, short set — kaunsa style kab pehna jaaye aur kaise style karein.",
    readTime: "3 min read",
    emoji: "✨",
    emojiColor: "#EAF3DE",
    slug: "night-suit-style-guide",
  },
];

// ─── Blog 1: Season Guide ─────────────────────────────────────────────────────
export const SEASONS = [
  {
    num: "1",
    season: "Garmi (Summer)",
    icon: "☀️",
    title: "Halka aur breathable fabric",
    desc: "Cotton ya bamboo fabric choose karein. Loose fit hona chahiye taake hawa aaye. Light colors body heat absorb nahi karte.",
  },
  {
    num: "2",
    season: "Barish (Monsoon)",
    icon: "🌧️",
    title: "Moisture-wicking fabric",
    desc: "Nami ke mausam mein cotton ya moisture-wicking fabric best hai. Heavy satin avoid karein — chipchipa feel deta hai.",
  },
  {
    num: "3",
    season: "Sardi (Winter)",
    icon: "❄️",
    title: "Warm aur cozy layers",
    desc: "Fleece ya thick cotton pyjama set best hai. Full sleeve aur full length choose karein. Dark colors warmth maintain karte hain.",
  },
  {
    num: "4",
    season: "Basant (Spring)",
    icon: "🌸",
    title: "Light layers ka option",
    desc: "Spring mein temperature badalta rehta hai. Light pyjama set ya short sleeve top ke saath pant best hai — adjust karna asaan hota hai.",
  },
];

export const SEASON_PRO_TIPS = [
  { title: "2 sets rotate karein", body: "Roz ek hi set mat pehnen — fabric ko rest milna chahiye taake shape aur softness bani rahe." },
  { title: "Size thoda relaxed rakhen", body: "Tight night suit neend disturb karta hai — ek size bada lena usually better hota hai." },
  { title: "Waistband check karein", body: "Elastic waistband zyada tight na ho — so waqt body swell karti hai, tight band discomfort deta hai." },
  { title: "Pilling check karein", body: "Acchi quality fabric mein pilling nahi hoti. Buy karne se pehle fabric rub karke check karein." },
];

export const SEASON_FIT_CHECKS = [
  "Fabric breathable hai",
  "Size comfortable hai",
  "Waistband loose hai",
  "Seams soft hain",
  "Sleeve length sahi hai",
  "Easy movement possible",
];

export const SEASON_SIZE_TABLE = [
  { size: "XS", chest: "30-32", waist: "24-26", hip: "33-35", height: "5'0\"-5'2\"" },
  { size: "S",  chest: "33-34", waist: "27-28", hip: "36-37", height: "5'2\"-5'4\"" },
  { size: "M",  chest: "35-36", waist: "29-30", hip: "38-39", height: "5'4\"-5'6\"" },
  { size: "L",  chest: "37-39", waist: "31-33", hip: "40-42", height: "5'6\"-5'8\"" },
  { size: "XL", chest: "40-42", waist: "34-36", hip: "43-45", height: "5'6\"-5'9\"" },
  { size: "XXL",chest: "43-45", waist: "37-39", hip: "46-48", height: "5'7\"-5'10\"" },
];

// ─── Blog 2: Fabric Guide ─────────────────────────────────────────────────────
export const FABRIC_TYPES = [
  {
    id: "cotton",
    name: "Cotton",
    tagline: "Roz ki pehli pasand",
    color: "#FFF5E4",
    accentColor: "#C07B2A",
    emoji: "🌿",
    season: ["Garmi", "Barish", "Spring"],
    pros: ["Breathable — hawa pass hoti hai", "Soft aur skin-friendly", "Asaan wash hota hai", "Affordable"],
    cons: ["Jaldi wrinkle hota hai", "Dryer mein shrink ho sakta hai"],
    desc: "Cotton sabse common aur reliable fabric hai nightwear ke liye. Yeh skin ke saath friendly hoti hai, sweat absorb karti hai aur garam mausam mein comfortable rehti hai. Pure cotton (100%) ya cotton blend dono achhe hain.",
    tips: [
      { title: "Pre-washed cotton chunein", body: "Pehli dafa wash mein cotton thoda shrink hota hai — pre-washed label dekhein ya ek size bada lein." },
      { title: "Thread count matter karta hai", body: "Higher thread count = softer feel. 180-200 thread count night suit ke liye ideal hai." },
    ],
  },
  {
    id: "satin",
    name: "Satin",
    tagline: "Luxury feel har raat",
    color: "#F4EEF9",
    accentColor: "#7A4BAA",
    emoji: "✨",
    season: ["Sardi", "Spring"],
    pros: ["Silky smooth feel", "Elegant look", "Temperature regulate karta hai", "Skin pe gentle hai"],
    cons: ["Hand wash zaroori hai", "Thanda feel (winter mein cold lag sakta hai)", "Nightly slipping ho sakti hai"],
    desc: "Satin ka smooth, shiny texture luxury feel deta hai. Yeh skin pe smooth slide karta hai jisse raat ko turn lena asaan hota hai. Polyester satin affordable hai jabke silk satin premium quality deta hai.",
    tips: [
      { title: "Polyester vs Silk Satin", body: "Budget ke liye polyester satin theek hai. Agar skin sensitive hai to silk satin better rahega." },
      { title: "Winter mein layer karein", body: "Satin thanda hota hai — sardi mein oopar se robe ya cardigan zaroor rakhein." },
    ],
  },
  {
    id: "fleece",
    name: "Fleece",
    tagline: "Sardi ki sab se cozy choice",
    color: "#E8F4FD",
    accentColor: "#2674A6",
    emoji: "❄️",
    season: ["Sardi"],
    pros: ["Maximum warmth", "Super soft texture", "Quick dry hota hai", "Durable fabric"],
    cons: ["Garmi mein bilkul nahi", "Static cling ho sakti hai", "Thoda bulky feel"],
    desc: "Fleece winter nightwear ka best option hai. Yeh heat ko trap karta hai aur body ko warm rakhta hai. Lightweight fleece garmi mein bhi comfortable hota hai jabke heavy fleece extreme sardi ke liye perfect hai.",
    tips: [
      { title: "Anti-pill fleece chunein", body: "Cheap fleece mein jaldi pilling hoti hai. Anti-pill fleece zyada durable aur smooth rehta hai." },
      { title: "Loose fit better hai", body: "Fleece night suit mein thodi extra jagah honi chahiye — tight fleece movement restrict karta hai." },
    ],
  },
  {
    id: "bamboo",
    name: "Bamboo / Modal",
    tagline: "Eco-friendly aur ultra soft",
    color: "#E1F5EE",
    accentColor: "#0F6E56",
    emoji: "🎋",
    season: ["Garmi", "Barish", "Spring"],
    pros: ["Cotton se 3x soft", "Natural antibacterial", "Moisture-wicking", "Eco-friendly"],
    cons: ["Mehnga hota hai", "Limited availability"],
    desc: "Bamboo fabric ek premium choice hai jo cotton se bhi soft hoti hai. Yeh naturally antibacterial hai aur sweat manage karne mein excellent hai. Sensitive skin ke liye best option — koi irritation nahi hoti.",
    tips: [
      { title: "Cold wash hi karein", body: "Bamboo fabric hot wash mein damage hoti hai — hamesha cold water use karein." },
      { title: "Air dry better hai", body: "Dryer bamboo fabric ko damage kar sakta hai — flat ya hang dry karein." },
    ],
  },
];

export const FABRIC_SEASON_CHART = [
  { season: "☀️ Garmi", best: "Cotton, Bamboo", avoid: "Fleece, Heavy Satin" },
  { season: "🌧️ Barish", best: "Cotton, Modal", avoid: "Satin (slippery)" },
  { season: "❄️ Sardi", best: "Fleece, Satin", avoid: "Thin Cotton" },
  { season: "🌸 Spring", best: "Cotton, Bamboo, Satin", avoid: "Heavy Fleece" },
];

// ─── Blog 3: Style Guide ──────────────────────────────────────────────────────
export const NIGHT_SUIT_STYLES = [
  {
    id: "pyjama-set",
    name: "Pyjama Set",
    tagline: "Classic comfort — kabhi out of style nahi",
    color: "#EEF0FB",
    accentColor: "#534AB7",
    emoji: "🌙",
    bestFor: ["Year-round use", "Comfortable sleep", "Lounging at home", "All body types"],
    avoid: ["Very hot summer nights (unless thin cotton)"],
    desc: "Full sleeve top aur full length pant ka classic combination. Yeh sabse versatile option hai — garmi mein thin cotton, sardi mein fleece. Waistband drawstring hona chahiye taake fit adjust ho sake.",
    tips: [
      { title: "Matching set look", body: "Coordinated top aur bottom ek polished look deta hai — even ghar pe bhi." },
      { title: "Print ya solid?", body: "Prints fun hain lekin solid colors zyada versatile hain aur easily mix-match ho sakte hain." },
    ],
  },
  {
    id: "nighty",
    name: "Nighty / Nightgown",
    tagline: "Airy freedom — full comfort",
    color: "#FBEAF0",
    accentColor: "#D4537E",
    emoji: "🌸",
    bestFor: ["Hot weather", "Maximum comfort", "Easy movement", "Petite to plus sizes"],
    avoid: ["Very cold nights without layers"],
    desc: "Single piece dress jo knee se floor tak hoti hai. Summer nightwear ka best option — koi restriction nahi, complete freedom of movement. Lace detailing ya printed versions bhi available hain.",
    tips: [
      { title: "Length ka dhyan rakhen", body: "Knee-length garmi ke liye, full-length sardi ke liye better hai." },
      { title: "Scoop neck cool rehti hai", body: "Deep scoop ya V-neck nighty garmi mein extra ventilation deta hai." },
    ],
  },
  {
    id: "short-set",
    name: "Short Set",
    tagline: "Summer nights ka perfect companion",
    color: "#FFF5E4",
    accentColor: "#C07B2A",
    emoji: "☀️",
    bestFor: ["Hot summers", "Active sleepers", "Young adults", "Petite builds"],
    avoid: ["Winter", "AC rooms without blanket"],
    desc: "Short sleeve top aur shorts ka combination — extreme garmi ke liye ideal. Lightweight aur easy to move. Spaghetti strap ya tank top version bhi available hai.",
    tips: [
      { title: "Inner seams check karein", body: "Shorts ki inner seams soft honi chahiye — rough seams raat ko discomfort deti hain." },
      { title: "High waist shorts better", body: "Sleep mein shorts slip hote hain — high waist elastic shorts zyada secure rehte hain." },
    ],
  },
  {
    id: "kaftan",
    name: "Kaftan",
    tagline: "Elegant aur ultra relaxed",
    color: "#E1F5EE",
    accentColor: "#0F6E56",
    emoji: "🌿",
    bestFor: ["Loose fit lovers", "Hot weather", "Loungewear + sleepwear", "All sizes"],
    avoid: ["Active sleepers (can tangle)"],
    desc: "Wide, flowy silhouette jo body ko completely free rakhti hai. Originally loungewear tha lekin ab popular sleepwear ban gaya hai. Printed cotton kaftans especially popular hain garam mausam mein.",
    tips: [
      { title: "Below knee length best", body: "Bahut lamba kaftan so waqt tangle ho sakta hai — knee se thoda neeche ideal hai." },
      { title: "Side slits helpful hain", body: "Side slits movement easy karte hain aur trapped nahi feel hota." },
    ],
  },
];

export const STYLE_OUTFIT_GUIDE = [
  { season: "Garmi", style: "Short Set / Nighty", reason: "Maximum airflow aur freedom" },
  { season: "Barish", style: "Cotton Pyjama Set", reason: "Comfortable aur moisture-friendly" },
  { season: "Sardi", style: "Fleece Pyjama Set", reason: "Full warmth aur coverage" },
  { season: "Spring", style: "Cotton Pyjama / Kaftan", reason: "Versatile for changing temps" },
  { season: "AC Room", style: "Full Pyjama Set", reason: "Consistent coverage needed" },
  { season: "Home Lounging", style: "Kaftan / Pyjama Set", reason: "Stylish yet comfortable" },
  { season: "Travel", style: "Pyjama Set", reason: "Compact, easy to pack" },
  { season: "Pregnancy", style: "Nighty / Kaftan", reason: "No waistband pressure" },
];

export const NS_TAGS = ["#NightSuit", "#SleepwearGuide", "#NightwearPakistan", "#ComfortSleep", "#PyjamaSuit", "#NightDress"];
export const FABRIC_TAGS = ["#NightSuitFabric", "#CottonPyjama", "#SatinNightsuit", "#SleepwearFabric", "#ComfortFirst"];
export const STYLE_TAGS = ["#NightSuitStyle", "#Sleepwear", "#NightyStyle", "#PyjamaSets", "#NightwearLook"];