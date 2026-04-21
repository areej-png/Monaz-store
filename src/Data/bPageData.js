// blogPageData.js
// Abhi static data hai — baad mein Shopify API call yahan se hogi

export const BLOG_POSTS = [
  {
    id: 1,
    category: "Fit Guide",
    title: "Sahi Bra Choose Karna — Ek Complete Guide",
    subtitle: "Galat size pehenna discomfort aur posture problems create karta hai. Measurement se lekar perfect fit tak — step by step.",
    readTime: " 5 min read",
    emoji: "🌸",
    emojiColor: "#FBEAF0",
    slug: "how-to-choose-the-perfect-bra",
  },
  {
    id: 2,
    category: "Style Guide",
    title: "Har Outfit Ke Liye Sahi Bra Type",
    subtitle: "Plunge, T-shirt, balconette — kaunsa bra kab pehna jaaye, jaanein.",
    readTime: "1 min read",
    emoji: "✨",
    emojiColor: "#EAF3DE",
    slug: "bra-types-guide",
  },
  {
    id: 3,    
    category: "Care Tips",
    title: "Lingerie Ko Ozy Rakhne Ke Tips",
    subtitle: "Sahi washing aur storage se aapki lingerie zyada chalti hai aur shape maintain rehti hai.",
    readTime: "1 min read",
    emoji: "🌿",
    emojiColor: "#E1F5EE",
    slug: "lingerie-care-tips",
  },
];

export const STEPS = [
  {
    num: "1",
    title: "Back / Band size nikaalein",
    desc: "Seene ke neeche, ribs ke upar tape ko tight aur level rakhein. Even number = band size. Odd number pe ek add karein (e.g. 33 → 34).",
  },
  {
    num: "2",
    title: "Bust measurement lein",
    desc: "Seene ke fullest point (nipple line) ke ird-gird tape loosely wrap karein. Tape flat rehe, khicha hua nahi.",
  },
  {
    num: "3",
    title: "Cup size calculate karein",
    desc: '1"=A, 2"=B, 3"=C, 4"=D, 5"=DD. Bust − Band ka farq = aapka cup size.',
  },
  {
    num: "4",
    title: "Cup width bhi check karein",
    desc: "Cup ke ek side se dusri side tak horizontally measure karein. Upar se neeche vertically — dono balance mein honein.",
  },
];

export const PRO_TIPS = [
  { title: "Subah measure karein", body: "Sham tak body thodi phool jaati hai — subah ki measurement zyada accurate hoti hai." },
  { title: "Band 90% support deta hai", body: "Agar straps kaandhe mein kaat rahi hain to band size chota hai — adjust karein." },
  { title: "Sister sizes try karein", body: "34B fit nahi? 32C ya 36A try karein — cup volume same rehta hai." },
  { title: "New bra last hook pe", body: "Naya bra hamesha pehle hook se shuru karein, taake baad mein adjust karne ki jagah ho." },
];

export const FIT_CHECKS = [
  "Band seedha aur level hai",
  "Cup mein koi gap nahi",
  "Center tack skin se laga",
  "Straps comfortable hain",
  "Koi overflow nahi",
  "Full movement possible",
];

export const TAGS = ["#BraFit", "#SizeGuide", "#Measurement", "#CupSize", "#LingerieTips", "#ComfortFirst"];

export const CUP_LABELS = ["AA", "A", "B", "C", "D", "DD", "DDD", "G"];

export const SIZE_DATA_IN = [
  { band: 30, ub: "25-26", a: "29-30", b: "30-31", c: "31.5-32", d: "32.5-33", dd: "33.5-34" },
  { band: 32, ub: "27-28", a: "31-32", b: "32-33", c: "33.5-34", d: "34.5-35", dd: "35.5-36" },
  { band: 34, ub: "29-30", a: "33-34", b: "34-35", c: "35.5-36", d: "36.5-37", dd: "37.5-38" },
  { band: 36, ub: "31-32", a: "35-36", b: "36-37", c: "37.5-38", d: "38.5-39", dd: "39.5-40" },
  { band: 38, ub: "33-34", a: "37-38", b: "38-39", c: "39.5-40", d: "40.5-41", dd: "41.5-42" },
  { band: 40, ub: "35-36", a: "39-40", b: "40-41", c: "41.5-42", d: "42.5-43", dd: "43.5-44" },
  { band: 42, ub: "37-38", a: "41-42", b: "42-43", c: "43.5-44", d: "44.5-45", dd: "45.5-46" },
  { band: 44, ub: "39-40", a: "43-44", b: "44-45", c: "45.5-46", d: "46.5-47", dd: "47.5-48" },
];

export const SIZE_DATA_CM = [
  { band: 75,  ub: "63-66",  a:"73-76",    b: "76-79",   c: "80-81",   d: "83-84",   dd: "85-86"   },
  { band: 80,  ub: "68-71",  a:"78-81",    b: "81-84",   c: "85-86",   d: "88-89",   dd: "90-91"   },
  { band: 85,  ub: "73-76",  a:"83-86",    b: "86-89",   c: "90-91",   d: "93-94",   dd: "95-97"   },
  { band: 90,  ub: "79-81",  a:"88-91",    b: "91-94",   c: "95-97",   d: "98-99",   dd: "100-102" },
  { band: 95,  ub: "84-86",  a:"93-96",    b: "97-99",   c: "100-102", d: "103-104", dd: "105-107" },
  { band: 100, ub: "89-91",  a:"98-101",   b: "102-104", c: "105-107", d: "108-109", dd: "110-112" },
  { band: 105, ub: "94-97",  a:"103-106",  b: "107-109", c: "110-112", d: "113-114", dd: "115-117" },
  { band: 110, ub: "99-102", a:"109-111",  b: "112-114", c: "115-117", d: "118-119", dd: "120-122" },
];
// ─── Blog 2: Bra Types Guide ──────────────────────────────────────────────────
export const BRA_TYPES = [
  {
    id: "tshirt",
    name: "T-Shirt Bra",
    tagline: "Roz ka sabse zaroori saathi",
    imagePlaceholder: "T-shirt bra image — seamless, smooth cups",
    imageAlt: "T-shirt bra",
    color: "#FBEAF0",
    accentColor: "#D4537E",
    bestFor: ["Plain T-shirts", "Fitted tops", "Office wear", "Casual outfits"],
    avoid: ["Sheer fabric", "Heavily embellished tops"],
    desc: "Smooth, seamless cups ke saath yeh bra kisi bhi tight ya fitted top ke neeche invisible rehti hai. Padded ya lightly lined hoti hai jo natural shape deti hai. Har wardrobe ki basic zaroorat hai.",
    tips: [
      { title: "Seamless cups choose karein", body: "Koi seams nahi honein taake tight fabric mein lines nazar na aayein." },
      { title: "Nude ya skin tone", body: "White top ke neeche white nahi, skin tone bra invisible rehti hai." },
    ],
  },
  {
    id: "plunge",
    name: "Plunge Bra",
    tagline: "Deep neckline ka best friend",
    imagePlaceholder: "Plunge bra image — deep V center",
    imageAlt: "Plunge bra deep neckline",
    color: "#F4C0D1",
    accentColor: "#993556",
    bestFor: ["Deep V-neck tops", "Wrap dresses", "Plunging necklines", "Date night outfits"],
    avoid: ["High necklines", "Boat neck tops"],
    desc: "Dono cups ke beech mein deep V shape hoti hai jo neckline ko khuli aur elegant dikhati hai. Center gore bohot neeche hota hai taake deep necklines mein bhi yeh nazar na aaye.",
    tips: [
      { title: "Push-up effect bhi milta hai", body: "Zyada lift chahiye to padded plunge choose karein — cleavage natural lagti hai." },
      { title: "Sticky wings option", body: "Bohot deep neckline ke liye adhesive plunge bra try karein jo bilkul invisible ho." },
    ],
  },
  {
    id: "balconette",
    name: "Balconette Bra",
    tagline: "Elegant lift aur beautiful shape",
    imagePlaceholder: "Balconette bra image — half cup, square shape",
    imageAlt: "Balconette bra style",
    color: "#EAF3DE",
    accentColor: "#3B6D11",
    bestFor: ["Square necklines", "Boat necks", "Off-shoulder tops", "Formal wear"],
    avoid: ["Very deep V-necks", "Halter necks"],
    desc: "Half cup design jo breast ke upper part ko thoda expose karta hai — elegant aur romantic look deta hai. Straps wide set hote hain jo off-shoulder aur square necklines ke liye perfect hai.",
    tips: [
      { title: "Underwire zaroori hai", body: "Balconette mein underwire support deta hai — bina underwire shape maintain nahi rehti." },
      { title: "Embroider aur lace options", body: "Balconette mostly decorative hoti hai — lace ya embroidery bohot khoobsurat lagti hai." },
    ],
  },
  {
    id: "sports",
    name: "Sports Bra",
    tagline: "Active life ke liye maximum support",
    imagePlaceholder: "Sports bra image — workout, gym",
    imageAlt: "Sports bra for workout",
    color: "#E1F5EE",
    accentColor: "#0F6E56",
    bestFor: ["Gym & workout", "Running", "Yoga", "Any physical activity"],
    avoid: ["Formal occasions", "Office wear"],
    desc: "High impact activities ke liye specially designed — bounce ko minimize karta hai aur full support deta hai. Moisture-wicking fabric sweat absorb karta hai. Low, medium, high impact mein available hai.",
    tips: [
      { title: "Impact level match karein", body: "Yoga ke liye low impact, running ke liye high impact sports bra zaroor choose karein." },
      { title: "Size extra important hai", body: "Sports bra thoda snug honi chahiye — bohot tight ya loose dono problems create karte hain." },
    ],
  },
  {
    id: "strapless",
    name: "Strapless Bra",
    tagline: "Strap-free outfits ka perfect solution",
    imagePlaceholder: "Strapless bra image — tube style",
    imageAlt: "Strapless bra bandeau",
    color: "#FAEEDA",
    accentColor: "#854F0B",
    bestFor: ["Off-shoulder dresses", "Tube tops", "Strapless gowns", "Weddings & events"],
    avoid: ["Very active days", "Heavy busts without underwire"],
    desc: "Straps ke bina shoulder-free look deta hai. Silicon grip band hota hai jo bra ko jagah par rakhtaa hai. Underwire version zyada support deta hai especially full bust ke liye.",
    tips: [
      { title: "Silicone grip zaroor ho", body: "Acchi strapless bra mein inner silicone band hoti hai — yeh slip hone se bachati hai." },
      { title: "Size mein band snug rakhen", body: "Strapless mein band hi sab kuch hold karta hai — thoda tighter size choose karein." },
    ],
  },
  {
    id: "bralette",
    name: "Bralette",
    tagline: "Comfort aur style ka perfect mix",
    imagePlaceholder: "Bralette image — lace, soft cups",
    imageAlt: "Lace bralette",
    color: "#EEEDFE",
    accentColor: "#534AB7",
    bestFor: ["Loungewear", "Sheer tops", "Visible bra look", "Small to medium bust"],
    avoid: ["Heavy physical activity", "Very large bust without support"],
    desc: "Wire-free, soft cup design jo maximum comfort deta hai. Lace ya cotton mein available — ghar par bhi aur trendy 'visible bra' look ke liye bhi perfect. Light support ke saath all-day comfort.",
    tips: [
      { title: "Visible rakhna trendy hai", body: "Sheer ya loose top ke neeche deliberately show karna stylish lagta hai — lace bralette best hai." },
      { title: "Large bust ke liye underwire better", body: "C cup se upar ke liye bralette zyada support nahi deti — padded ya underwire choose karein." },
    ],
  },
];
 
export const OUTFIT_GUIDE = [
  { outfit: "Plain T-shirt", bra: "T-Shirt Bra", reason: "Seamless — koi lines nahi" },
  { outfit: "Deep V-neck top", bra: "Plunge Bra", reason: "Low center — hidden rehti hai" },
  { outfit: "Off-shoulder dress", bra: "Strapless / Balconette", reason: "Straps nazar nahi aate" },
  { outfit: "Sheer / Lace top", bra: "Bralette", reason: "Intentionally visible — stylish" },
  { outfit: "Gym / Workout", bra: "Sports Bra", reason: "Maximum support aur comfort" },
  { outfit: "Formal / Gown", bra: "Strapless / Plunge", reason: "Clean silhouette" },
  { outfit: "Square neckline", bra: "Balconette", reason: "Wide straps — perfect match" },
  { outfit: "Wrap dress", bra: "Plunge Bra", reason: "Deep neckline handle karta hai" },
];
 
export const TYPES_TAGS = ["#BraTypes", "#StyleGuide", "#LingerieStyle", "#OutfitTips", "#FashionGuide", "#BraForEveryOutfit"];
 
//─── Blog 3: Lingerie Care Tips
export const CARE_SECTIONS = [
  {
    id: "washing",
    title: "Dhonay ka sahi tarika",
    imagePlaceholder: "Washing guide image — e.g. hand wash in bowl",
    imageAlt: "Lingerie washing technique",
    steps: [
      { num: "1", title: "Hand wash recommend hai", desc: "Thande paani mein gentle detergent se haath se dhoyein. Machine wash lingerie ko stretch kar deta hai aur elastic kharaab karta hai." },
      { num: "2", title: "Machine mein to mesh bag use karein", desc: "Agar machine mein dalna zaroori ho to lingerie bag mein band karein. Delicate cycle aur thanda paani use karein." },
      { num: "3", title: "Kisi bhi bra ko wringer se mat nikorain", desc: "Twist karne se cup ka shape bigarta hai. Gently press karein aur clean towel mein wrap karein." },
      { num: "4", title: "Sahi tarah sukhaein", desc: "Flat ya inverted position mein sukhaein. Dryer se bilkul bachein — heat elastic aur fabric dono kharaab karta hai." },
    ],
    tips: [
      { title: "Soap nahi, detergent", body: "Regular soap lingerie fabric ke liye harsh hota hai. Lingerie-specific ya gentle baby detergent use karein." },
      { title: "Hot water se bachein", body: "Garam paani elastic ko loose karta hai aur color fade karta hai. Hamesha thanda ya lukewarm paani use karein." },
      { title: "Bleach kabhi nahi", body: "Bleach fabric ko weak karta hai aur color kharaab karta hai — white pieces ke liye bhi nahi." },
      { title: "Har use ke baad wash nahi", body: "Bra ko 2-3 baar pehanne ke baad dhoyein taake fabric life zyada ho." },
    ],
    checks: [
      "Thande paani mein dhoya",
      "Gentle detergent use kiya",
      "Twist nahi kiya",
      "Flat sukhaaya",
      "Dryer se bachay",
      "Mesh bag use ki (machine mein)",
    ],
  },
  {
    id: "storage",
    title: "Store karne ka sahi tarika",
    imagePlaceholder: "Storage guide image — e.g. organized drawer with bras",
    imageAlt: "Lingerie storage organization",
    steps: [
      { num: "1", title: "Bras ko flat rakhein", desc: "Bras ko ek doosre ke upar stack karein — cup ke andar cup mat rakhein. Is se underwire aur cup ka shape maintain rehta hai." },
      { num: "2", title: "Straps andar tuck karein", desc: "Store karne se pehle straps ko cup ke andar tuck karein taake tangle na hon aur stretch na hon." },
      { num: "3", title: "Alag drawer mein rakhein", body: "Lingerie ko heavy clothes ke saath mat rakhein. Dedicated drawer ya divider use karein." },
      { num: "4", title: "Fold karne ka sahi tarika", desc: "Bralettes aur soft bras ko gently fold karein. Underwire bras ko kabhi fold mat karein — wire bend ho jaata hai." },
    ],
    tips: [
      { title: "Rotation zaroori hai", body: "Same bra roz roz mat pehnen. 2-3 bras rotate karein taake elastic ko rest mile aur shape bane rahe." },
      { title: "Travel mein cup ke andar cup", body: "Safar mein ek bra ke cup mein doosra bra rakhein — space bachta hai aur shape protect rehta hai." },
      { title: "Hooks band rakhein", body: "Store karte waqt hooks band karein taake doosre fabric mein na ulchein." },
      { title: "Sunlight se bachao", body: "Direct sunlight color fade karta hai — closed drawer ya wardrobe mein rakhein." },
    ],
    checks: [
      "Flat stack kiya",
      "Straps tuck kiye",
      "Alag jagah rakhay",
      "Underwire fold nahi kiya",
      "Hooks band kiye",
      "Rotation maintain ki",
    ],
  },
];
 
export const CARE_TAGS = ["#LingerieCareTips", "#BraCare", "#LingerieLove", "#WashingTips", "#StorageTips", "#LingerieLife"];

 
