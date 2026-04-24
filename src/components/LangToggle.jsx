import "../styles/blogPage.css";

export default function LangToggle({ lang, onToggle }) {
    return (
        <div className="lang-toggle-wrap">
            <button
                className={`lang-btn ${lang === "en" ? "lang-btn--active" : ""}`}
                onClick={() => lang !== "en" && onToggle()}
            >
                EN
            </button>
            <span className="lang-divider" />
            <button
                className={`lang-btn ${lang === "ur" ? "lang-btn--active" : ""}`}
                onClick={() => lang !== "ur" && onToggle()}
            >
                urdu

            </button>
        </div>
    );
}