import MistakeDetailTemplate from "./MistakeDetailTemplate";
import {
  MISTAKES_POSTS,
  FIT_MISTAKES,       FIT_CHECKS_MISTAKES,    FIT_MISTAKES_TAGS,
  NIGHTWEAR_MISTAKES, NIGHTWEAR_FIT_CHECKS,   NIGHTWEAR_MISTAKES_TAGS,
  CARE_MISTAKES,      CARE_FIT_CHECKS,        CARE_MISTAKES_TAGS,
} from "../Data/mistakesPageData";

export default function MistakesBlogDetail({ post, onBack }) {

  if (post.slug === "lingerie-fit-mistakes") {
    return (
      <MistakeDetailTemplate
        post={post}
        onBack={onBack}
        mistakes={FIT_MISTAKES}
        fitChecks={FIT_CHECKS_MISTAKES}
        tags={FIT_MISTAKES_TAGS}
        intro="Sahi bra fit sirf comfort ka masla nahi — yeh health aur confidence dono pe asar karta hai. Yeh 6 fit mistakes jaanein aur inhe aaj se avoid karein."
        ctaTitle="Apni perfect fit wali lingerie dekhein"
        ctaSubtitle="28 se 46 tak — har size available hai"
      />
    );
  }

  if (post.slug === "nightwear-comfort-mistakes") {
    return (
      <MistakeDetailTemplate
        post={post}
        onBack={onBack}
        mistakes={NIGHTWEAR_MISTAKES}
        fitChecks={NIGHTWEAR_FIT_CHECKS}
        tags={NIGHTWEAR_MISTAKES_TAGS}
        intro="Acchi neend ke liye sahi nightwear utna hi zaroori hai jitna sahi pillow. Yeh 6 common nightwear mistakes neend kharaab karti hain — inhe pahchanen aur theek karein."
        ctaTitle="Comfortable night suits ki range"
        ctaSubtitle="XS se XXL — har size available hai"
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
        mistakes={CARE_MISTAKES}
        fitChecks={CARE_FIT_CHECKS}
        tags={CARE_MISTAKES_TAGS}
        intro="Sahi care se lingerie aur nightwear ki life double ho jaati hai. Yeh 6 washing aur care mistakes dono types ke kapron ko kharaab karti hain — inhe avoid karein."
        ctaTitle="Quality lingerie jo zyada chale"
        ctaSubtitle="Sahi care ke saath saalon tak chale"
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