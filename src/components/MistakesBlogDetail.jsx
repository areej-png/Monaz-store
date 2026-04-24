import MistakeDetailTemplate from "./Mistakedetailtemplate";
import {
  MISTAKES_POSTS,
  FIT_MISTAKES,        FIT_CHECKS_MISTAKES,    FIT_MISTAKES_TAGS,
  NIGHTWEAR_MISTAKES,  NIGHTWEAR_FIT_CHECKS,   NIGHTWEAR_MISTAKES_TAGS,
  CARE_MISTAKES,       CARE_FIT_CHECKS,        CARE_MISTAKES_TAGS,
} from "../Data/Mistakespagedata";

export default function MistakesBlogDetail({ post, onBack, initialLang = "en" }) {

  if (post.slug === "lingerie-fit-mistakes") {
    return (
      <MistakeDetailTemplate
        post={post}
        onBack={onBack}
        initialLang={initialLang}
        mistakes={FIT_MISTAKES}
        fitChecks={FIT_CHECKS_MISTAKES}
        tags={FIT_MISTAKES_TAGS}
        intro={{
          en: "The right bra fit isn't just about comfort — it affects health and confidence too. Learn these 6 fit mistakes and avoid them from today.",
          ur: "Sahi bra fit sirf comfort ka masla nahi — yeh health aur confidence dono pe asar karta hai. Yeh 6 fit mistakes jaanein aur inhe aaj se avoid karein.",
        }}
        sectionTitle={{ en: "6 Common Fit Mistakes", ur: "6 Common Fit Galtiyan" }}
        ctaTitle={{ en: "Shop lingerie in the right fit", ur: "Apni perfect fit wali lingerie dekhein" }}
        ctaSubtitle={{ en: "Every size available from 28 to 46", ur: "28 se 46 tak — har size available hai" }}
      />
    );
  }

  if (post.slug === "nightwear-comfort-mistakes") {
    return (
      <MistakeDetailTemplate
        post={post}
        onBack={onBack}
        initialLang={initialLang}
        mistakes={NIGHTWEAR_MISTAKES}
        fitChecks={NIGHTWEAR_FIT_CHECKS}
        tags={NIGHTWEAR_MISTAKES_TAGS}
        intro={{
          en: "The right nightwear matters as much as the right pillow for good sleep. These 6 common nightwear mistakes ruin sleep — recognise and fix them.",
          ur: "Acchi neend ke liye sahi nightwear utna hi zaroori hai jitna sahi pillow. Yeh 6 common nightwear mistakes neend kharaab karti hain — inhe pahchanen aur theek karein.",
        }}
        sectionTitle={{ en: "6 Mistakes That Ruin Your Sleep", ur: "6 Galtiyan Jo Neend Kharaab Karti Hain" }}
        ctaTitle={{ en: "Comfortable night suits range", ur: "Comfortable night suits ki range" }}
        ctaSubtitle={{ en: "XS to XXL — every size available", ur: "XS se XXL — har size available hai" }}
        pillClass="ns-pill"
        heroClass="ns-hero"
        fitCheckClass="ns-fit-check"
        ctaClass="ns-cta-banner"
        ctaBtnClass="ns-btn-cta"
      />
    );
  }

  if (post.slug === "care-washing-mistakes") {
    return (
      <MistakeDetailTemplate
        post={post}
        onBack={onBack}
        initialLang={initialLang}
        mistakes={CARE_MISTAKES}
        fitChecks={CARE_FIT_CHECKS}
        tags={CARE_MISTAKES_TAGS}
        intro={{
          en: "Proper care can double the life of your lingerie and nightwear. These 6 washing and care mistakes damage both types — avoid them.",
          ur: "Sahi care se lingerie aur nightwear ki life double ho jaati hai. Yeh 6 washing aur care mistakes dono types ke kapron ko kharaab karti hain — inhe avoid karein.",
        }}
        sectionTitle={{ en: "6 Care Mistakes to Avoid", ur: "6 Care Galtiyan Jo Avoid Karein" }}
        ctaTitle={{ en: "Quality lingerie worth caring for", ur: "Quality lingerie jo zyada chale" }}
        ctaSubtitle={{ en: "Lasts years with the right care", ur: "Sahi care ke saath saalon tak chale" }}
        pillClass="care-pill"
        heroClass="care-hero"
        fitCheckClass="care-fit-check"
        ctaClass="care-cta-banner"
        ctaBtnClass="care-btn-cta"
      />
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "3rem", color: "#999" }}>
      Blog post nahi mila.
    </div>
  );
}