import "../styles/header.css";
import { topBarData } from "../Data/topbarData";

if (!topBarData) {
  console.error("TopBar: topBarData is undefined. Check your data import.");
}

const TopBar = () => {
  if (!topBarData) return null;

  const { left, center, socialLinks } = topBarData;

  if (!left || !center || !socialLinks) return null;

  const LeftIcon = left?.icon ?? null;
  const CenterIcon = center?.icon ?? null;

  const isExternal = (url) =>
    typeof url === "string" && url.startsWith("http");

  return (
    <div
      className="top-bar"
      role="region"
      aria-label="Top information bar"
    >
      <div className="top-bar-inner">

        {/* LEFT */}
        <div className="top-left">
          <div className="top-bar-item">
            {LeftIcon && (
              <LeftIcon
                className="icon"
                aria-hidden="true"
                focusable="false"
              />
            )}
            {left?.text && <span>{left.text}</span>}
          </div>
        </div>

        {/* CENTER */}
        <div className="top-center">
          <div className="top-bar-item">
            {CenterIcon && (
              <CenterIcon
                className="icon"
                aria-hidden="true"
                focusable="false"
              />
            )}
            {center?.text && <span>{center.text}</span>}
          </div>

          {center?.link && center?.linkText && (
            <a
              href={center.link}
              className="top-bar-link"
              rel="noopener noreferrer"
              target={isExternal(center.link) ? "_blank" : undefined}
              aria-label={
                isExternal(center.link)
                  ? `${center.linkText} (opens in new tab)`
                  : center.linkText
              }
            >
              {center.linkText}
            </a>
          )}
        </div>

        {/* RIGHT - SOCIAL LINKS */}
        <div className="top-right">
          {socialLinks?.length > 0 &&
            socialLinks.map((item) => {
              const Icon = item?.icon;

              if (!Icon || !item?.url) return null;

              return (
                <a
                  key={item.id ?? item.label ?? item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`Visit our ${item.label ?? "social media"} page (opens in new tab)`}
                >
                  <Icon aria-hidden="true" focusable="false" />
                </a>
              );
            })}
        </div>

      </div>
    </div>
  );
};

export default TopBar;