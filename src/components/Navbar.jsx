import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { navbarData } from "../Data/navbarData";
import "../styles/navbar.css";

const Navbar = ({ searchQuery, setSearchQuery, cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { logo, navLinks } = navbarData;

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-top">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navbar-right">
          <div className={`search-box ${searchOpen ? "search-open" : ""}`}>
            <FaSearch
              className="search-icon"
              onClick={() => {
                if (searchOpen) handleSearch();
                else {
                  setSearchOpen(true);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }
              }}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <FaTimes
              className="search-clear"
              onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
            />
          </div>

          <div className="navbar-cart-icon" onClick={() => navigate("/cart")}>
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </div>

      {/* NAV LINKS */}
      <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
        {navLinks.map((link) => (
          <div key={link.id} className="nav-item-wrapper">

            {/* Parent link — hamesha navigate kare */}
            <Link
              to={link.href}
              className="nav-link"
              onClick={() => {
                setMenuOpen(false);
                setOpenDropdown(null);
              }}
            >
              {link.label}

              {/* Chevron — sirf dropdown toggle, navigate nahi */}
              {link.subLinks && (
                <FaChevronDown
                  className={`chevron ${openDropdown === link.id ? "chevron-open" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenDropdown((prev) =>
                      prev === link.id ? null : link.id
                    );
                  }}
                />
              )}
            </Link>

            {/* Dropdown */}
            {link.subLinks && (
              <div
                className={`nav-dropdown ${
                  openDropdown === link.id ? "mobile-dropdown-open" : ""
                }`}
              >
                {link.subLinks.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.href}
                    className="nav-dropdown-item"
                    onClick={() => {
                      setMenuOpen(false);
                      setOpenDropdown(null);
                    }}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;