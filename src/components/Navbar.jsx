import { useState, useRef, useEffect, useCallback } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { navbarData } from "../Data/navbarData";
import "../styles/navbar.css";

const Navbar = ({ searchQuery, setSearchQuery, cartCount }) => {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [searchOpen, setSearchOpen]   = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate  = useNavigate();
  const location  = useLocation();
  const inputRef  = useRef(null);
  const navRef    = useRef(null);

  const { logo, navLinks } = navbarData;

  // Fix Reset searchOpen on route change 
  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname, setSearchQuery]);

  // Fix Focus input via useEffect, not setTimeout
  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  // Fix Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Handlers useCallback for performance
  const handleSearch = useCallback(() => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  }, [searchQuery, navigate]);

  const handleKeyDown = useCallback(
    (e) => { if (e.key === "Enter") handleSearch(); },
    [handleSearch]
  );

  const handleSearchIconClick = useCallback(() => {
    if (searchOpen) handleSearch();
    else setSearchOpen(true);
  }, [searchOpen, handleSearch]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchOpen(false);
  }, [setSearchQuery]);

  // Fix Close menu resets dropdown too
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  const toggleDropdown = useCallback((id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-top">

        {/* Fix Accessible hamburger button */}
        <button
          className="hamburger"
          onClick={() => {
            // Fix #9: toggling off also resets dropdown
            setMenuOpen((prev) => {
              if (prev) setOpenDropdown(null);
              return !prev;
            });
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        {/* Fix #11: Logo links home + descriptive alt */}
        <div className="navbar-logo">
          <Link to="/" aria-label="Go to homepage">
            <img src={logo} alt="Brand logo" />
          </Link>
        </div>

        <div className="navbar-right">
          <div
            className={`search-box ${searchOpen ? "search-open" : ""}`}
            role="search"
          >
            {/* Fix #7: Accessible search button */}
            <button
              className="search-icon-btn"
              aria-label={searchOpen ? "Submit search" : "Open search"}
              onClick={handleSearchIconClick}
            >
              <FaSearch className="search-icon" aria-hidden="true" />
            </button>

            <input
              ref={inputRef}
              type="search"
              placeholder="Search for products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Search products"
            />

            {searchOpen && (
              <button
                className="search-clear-btn"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                <FaTimes className="search-clear" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Fix #7: Accessible cart button */}
          <button
            className="navbar-cart-icon"
            onClick={() => navigate("/cart")}
            aria-label={`Shopping cart, ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
          >
            <FaShoppingCart className="cart-icon" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="cart-badge" aria-hidden="true">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Fix NavLink for active styles, aria-label on nav */}
      <nav
        id="main-nav"
        ref={navRef}
        className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <div
            key={link.id}                      // Fix ensure navbarData has unique ids
            className="nav-item-wrapper"
            // Fix hover handlers for desktop dropdown
            onMouseEnter={() => link.subLinks && setOpenDropdown(link.id)}
            onMouseLeave={() => link.subLinks && setOpenDropdown(null)}
          >
            {/* ── Fix NavLink gives active class automatically ── */}
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
              onClick={closeMenu}
              end={link.href === "/"}          // exact match for home only
            >
              {link.label}

              {/* ── Chevron: mobile toggle only, Fix ARIA ── */}
              {link.subLinks && (
                <button
                  className={`chevron-btn ${openDropdown === link.id ? "chevron-open" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown(link.id);
                  }}
                  aria-label={`${openDropdown === link.id ? "Close" : "Open"} ${link.label} submenu`}
                  aria-expanded={openDropdown === link.id}
                  aria-haspopup="true"
                >
                  <FaChevronDown aria-hidden="true" />
                </button>
              )}
            </NavLink>

            {/* ── Dropdown ── */}
            {link.subLinks && (
              <div
                className={`nav-dropdown ${openDropdown === link.id ? "mobile-dropdown-open" : ""}`}
                role="menu"
                aria-label={`${link.label} submenu`}
              >
                {link.subLinks.map((sub) => (
                  <NavLink
                    key={sub.href}             // Fix href is more reliable than label
                    to={sub.href}
                    className={({ isActive }) =>
                      `nav-dropdown-item${isActive ? " nav-dropdown-item--active" : ""}`
                    }
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    {sub.label}
                  </NavLink>
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