// import { useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import { navbarData } from "../Data/navbarData";
// import "../styles/Navbar.css";


// const Navbar = ({ searchQuery, setSearchQuery, cartCount }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate();
//   const inputRef = useRef(null);
//   const { logo, navLinks } = navbarData;

//   const handleSearch = () => {
//     if (searchQuery.trim() !== "") {
//       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//       setSearchOpen(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleSearch();
//   };

//   return (
//     <header className="navbar-wrapper">
//       <div className="navbar-top">

//         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <div className="navbar-logo">
//           <img src={logo} alt="Logo" />
//         </div>

//         <div className="navbar-right">
//           <div className={`search-box ${searchOpen ? "search-open" : ""}`}>
//             <FaSearch
//               className="search-icon"
//               onClick={() => {
//                 if (searchOpen) handleSearch();
//                 else {
//                   setSearchOpen(true);
//                   setTimeout(() => inputRef.current?.focus(), 50);
//                 }
//               }}
//             />
//             <input
//               ref={inputRef}
//               type="text"
//               placeholder="Search for products..."
//               className="search-input"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <FaTimes
//               className="search-clear"
//               onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
//             />
//           </div>

//           <div className="navbar-cart-icon" onClick={() => navigate("/cart")}>
//             <FaShoppingCart className="cart-icon" />
//             {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//           </div>
//         </div>
//       </div>

//       {/* NAV LINKS */}
//       <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
//         {navLinks.map((link) => (
//           <div
//             key={link.id}
//             className="nav-item-wrapper"
//             // Mobile: click se toggle, Desktop: hover CSS handle karta hai
//             onClick={() => {
//               if (window.innerWidth <= 768 && link.subLinks) {
//                 setOpenDropdown(prev => prev === link.id ? null : link.id);
//               }
//             }}
//           >
//             {/* Parent link */}
//             <Link
//               to={link.href}
//               className="nav-link"
//               onClick={(e) => {
//                 // Mobile mein sublinks hain to sirf toggle karo, navigate mat karo
//                 if (window.innerWidth <= 768 && link.subLinks) {
//                   e.preventDefault();
//                 }
//                 setMenuOpen(false);
//               }}
//             >
//               {link.label}
//               {link.subLinks && <FaChevronDown className={`chevron ${openDropdown === link.id ? "chevron-open" : ""}`} />}
//             </Link>

//             {/* Dropdown — desktop: CSS hover, mobile: state se control */}
//             {link.subLinks && (
//               <div className={`nav-dropdown ${openDropdown === link.id ? "mobile-dropdown-open" : ""}`}>
//                 {link.subLinks.map((sub) => (
//                   <Link
//                     key={sub.label}
//                     to={sub.href}
//                     className="nav-dropdown-item"
//                     onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
//                   >
//                     {sub.label}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;                
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { navbarData } from "../Data/navbarData";
import "../styles/Navbar.css";

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

  const toggleDropdown = (e, linkId) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === linkId ? null : linkId));
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
            
            {/* Parent link */}
            <Link
              to={link.href}
              className="nav-link"
              onClick={(e) => {
                const isMobile = window.innerWidth <= 768;
                if (isMobile && link.subLinks) {
                  // Sirf dropdown toggle karo, navigate/close mat karo
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenDropdown((prev) => (prev === link.id ? null : link.id));
                } else {
                  // Desktop ya no sublinks — menu band karo
                  setMenuOpen(false);
                }
              }}
            >
              {link.label}
              {link.subLinks && (
                <FaChevronDown
                  className={`chevron ${openDropdown === link.id ? "chevron-open" : ""}`}
                  onClick={(e) => toggleDropdown(e, link.id)}
                />
              )}
            </Link>

            {/* Dropdown */}
            {link.subLinks && (
              <div className={`nav-dropdown ${openDropdown === link.id ? "mobile-dropdown-open" : ""}`}>
                {link.subLinks.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.href}
                    className="nav-dropdown-item"
                    onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
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