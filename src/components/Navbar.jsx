import { useState, useRef, useEffect, useCallback } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { navbarData } from "../Data/navbarData";
import "../styles/navbar.css";

const Navbar = ({ searchQuery, setSearchQuery, cartCount }) => {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate  = useNavigate();
  const location  = useLocation();
  const inputRef  = useRef(null);
  const navRef    = useRef(null);

  const { logo, navLinks } = navbarData;

  // Reset search on route change
  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname, setSearchQuery]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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
    if (searchOpen) {
      handleSearch();
    } else {
      setSearchOpen(true);
    }
  }, [searchOpen, handleSearch]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchOpen(false);
  }, [setSearchQuery]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  const toggleDropdown = useCallback((id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  return (
    <header className="navbar-wrapper">
      {/* search-active class add/remove hoti hai searchOpen se */}
      <div className={`navbar-top ${searchOpen ? "search-active" : ""}`}>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => {
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

        {/* Logo — search open hone par hide ho jata hai */}
        <div className="navbar-logo">
          <Link to="/" aria-label="Go to homepage">
            <img src={logo} alt="Brand logo" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          <div
            className={`search-box ${searchOpen ? "search-open" : ""}`}
            role="search"
          >
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

          {/* Cart */}
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

      {/* Nav Links */}
      <nav
        id="main-nav"
        ref={navRef}
        className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <div
            key={link.id}
            className="nav-item-wrapper"
            onMouseEnter={() => link.subLinks && setOpenDropdown(link.id)}
            onMouseLeave={() => link.subLinks && setOpenDropdown(null)}
          >
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
              onClick={closeMenu}
              end={link.href === "/"}
            >
              {link.label}

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

            {link.subLinks && (
              <div
                className={`nav-dropdown ${openDropdown === link.id ? "mobile-dropdown-open" : ""}`}
                role="menu"
                aria-label={`${link.label} submenu`}
              >
                {link.subLinks.map((sub) => (
                  <NavLink
                    key={sub.href}
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