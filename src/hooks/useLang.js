import { useState, useEffect } from "react";

export function useLang(initial = "en") {
  const [lang, setLang] = useState(initial);

  useEffect(() => {
    setLang(initial);
  }, [initial]);

  const toggle = () => setLang((l) => (l === "en" ? "ur" : "en"));

  const t = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] ?? obj["en"] ?? "";
  };

  return { lang, toggle, t };
}