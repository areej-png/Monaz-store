// components/NightSuitBlogDetail.jsx
// Router — slug ke hisaab se sahi blog component render karta hai

import NightSuitSeasonDetail from "./Nightsuitseasondetail";
import NightSuitFabricDetail from "./Nightsuitfdetail";
import NightSuitStyleDetail from "./Nightssdetail";

export default function NightSuitBlogDetail({ post, onBack, initialLang = "en" }) {

  if (post.slug === "night-suit-season-guide")
    return <NightSuitSeasonDetail post={post} onBack={onBack} initialLang={initialLang} />;
  //                                                          ↑ add karo

  if (post.slug === "night-suit-fabric-guide")
    return <NightSuitFabricDetail post={post} onBack={onBack} initialLang={initialLang} />;
  //                                                          ↑ add karo

  if (post.slug === "night-suit-style-guide")
    return <NightSuitStyleDetail post={post} onBack={onBack} initialLang={initialLang} />;
  //                                                          ↑ add karo

  return (
    <div style={{ textAlign: "center", padding: "3rem", color: "#999" }}>
      Blog post nahi mila.
    </div>
  );
}