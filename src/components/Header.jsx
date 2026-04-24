// import { FaPhone } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import "../styles/header.css";

// const TopBar = () => {
//   return (
//     // TopBar
//     <div className="top-bar">
//       <div className="top-left">
//         <span>
//           <FaPhone className="phone-icon" />
//            Discreet Help: +1-800-COMFORT</span>
//       </div>

//       <div className="top-center">
//         <span>
//           <FaMoon className="moon-icon" />Indulge in Comfy Nights:Sign Up for 20% Off your first order.</span>
//         <a href="/signup">Sign up now</a>
//       </div>

//       <div className="top-right">
//         <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
//           <FaFacebookF />
//         </a>
//         <a href="https://www.instagram.com/dsoutfits_?igsh=ZGJndmxkMWkxejR4" target="_blank" rel="noreferrer" className="social-icon">
//           <FaInstagram />
//         </a>
//         <a href="https://wa.me/123456789" target="_blank" rel="noreferrer" className="social-icon">
//           <FaWhatsapp />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
import "../styles/header.css";
import { topBarData } from "../Data/topbarData";

const TopBar = () => {
  const { left, center, socialLinks } = topBarData;

  const LeftIcon = left.icon;
  const CenterIcon = center.icon;

  return (
    <div className="top-bar">
      <div className="top-bar-inner">

        {/* LEFT */}
        <div className="top-left">
          <span>
            <LeftIcon className="icon" /> 
            {left.text}
          </span>
        </div>

        {/* CENTER */}
        <div className="top-center">
          <span>
            <CenterIcon className="icon" />
            {center.text}
          </span>

          <a href={center.link}>{center.linkText}</a>
        </div>

        {/* RIGHT SOCIAL LINKS */}
        <div className="top-right">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;