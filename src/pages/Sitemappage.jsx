// pages/SitemapPage.jsx
import { Link } from "react-router-dom";
import "../styles/SitemapPage.css";

const sitemapData = [
  {
    section: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Cart", href: "/cart" },
      { label: "Search", href: "/search" },
      { label: "Checkout", href: "/checkout" },
    ],
  },
  {
    section: "Shop",
    links: [
      { label: "New Arrivals", href: "/category/new-arrivals" },
      { label: "Bras", href: "/category/bras" },
      { label: "Panties", href: "/category/panties" },
      { label: "Bra Panty Sets", href: "/category/bra-panty-sets" },
      { label: "Body Shapers", href: "/category/body-shapers" },
      { label: "Lingerie", href: "/category/lingerie" },
      { label: "PJ Sets", href: "/category/pj-sets" },
      { label: "Stockings", href: "/category/stockings" },
    ],
  },
  {
    section: "Blog",
    links: [
      { label: "All Blogs", href: "/blog" },
      { label: "How to Choose the Perfect Bra", href: "/blog/how-to-choose-the-perfect-bra" },
      { label: "Night Suits Blog", href: "/blog/nightsuits" },
      { label: "Perfect Night Suit for Every Season", href: "/blog/nightsuits/perfect-night-suit-every-season" },
    ],
  },
  {
    section: "Help & Info",
    links: [
      { label: "FAQ's", href: "/faqs" },
      { label: "Bra Size Calculator", href: "/bra-size-calculator" },
      { label: "Return & Exchange", href: "/returns" },
      { label: "Monaz Affiliate", href: "/affiliate" },
    ],
  },
  {
    section: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="sitemap-page">
      <div className="sitemap-hero">
        <h1>Sitemap</h1>
        <p>A complete overview of all pages on the Monaz website.</p>
      </div>

      <div className="sitemap-grid">
        {sitemapData.map((section) => (
          <div key={section.section} className="sitemap-section">
            <h2 className="sitemap-section-title">{section.section}</h2>
            <ul className="sitemap-links">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}