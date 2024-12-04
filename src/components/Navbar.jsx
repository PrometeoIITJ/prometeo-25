import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Font Awesome Icons
import image from "../assets/image.png";
import smallLogo from "../assets/logo.gif";
import AuthContext from "../context/AuthContext";
import { HOME_PAGE_URL } from "../config";

const navlinks = [
  {
    path: "/theme",
    name: "Theme",
  },
  {
    path: "/ca",
    name: "Campus Ambassador",
  },
  {
    path: "/accommodation",
    name: "Accommodation",
  },
  {
    path: "/events",
    name: "Events",
  },
  {
    path: "/team",
    name: "Team",
  },
  // {
  //   path: "/sponsors",
  //   name: "Sponsors",
  // },
  {
    path: "/workshop",
    name: "Workshops",
  },
  // {
  //   path: "/informals",
  //   name: "Informals",
  // },
];

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
      if (window.innerWidth > 1250) {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && !event.target.closest('#navbar')) {
        setToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [toggle]);

  const handleNavClick = (itemName = "") => {
    setSelected(itemName);
    setToggle(false);
  };

  const renderAuthButton = () => {
    const buttonProps = {
      onClick: () => handleNavClick("register"),
      className: selected === "register" ? "" : "register"
    };

    return !user ? (
      <Link to="/register">
        <button {...buttonProps}>Register</button>
      </Link>
    ) : (
      <Link to="/dashboard">
        <button {...buttonProps}>Dashboard</button>
      </Link>
    );
  };

  const renderNavLinks = () => (
    navlinks.map((item, index) => (
      <Link key={index} to={item.path} className="nav-links">
        <div
          onClick={() => handleNavClick(item.name)}
          className={selected === item.name ? "highlight pad" : "pad"}
        >
          {item.name}
        </div>
      </Link>
    ))
  );

  return (
    <div id="navbar">
      {/* Logo and Home Link */}
      <Link to={HOME_PAGE_URL}>
        <img
          className="home-img"
          src={smallLogo}
          alt="click to go home"
          onClick={() => handleNavClick()}
        />

        {/* Title Image */}
        <img
          className="title-image"
          src={image}
          alt="Prometeo '25"
          onClick={() => handleNavClick()}
        />
      </Link>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="navall">
          <div className="nav-links-container">
            {renderNavLinks()}
          </div>
          <div className="auth-button-container">
            {renderAuthButton()}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="nav-mobile-container">
          <div
            className="menu-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setToggle(prev => !prev);
            }}
          >
            {toggle ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          
          <div className={`nav-mobile ${toggle ? "active" : ""}`}>
            <div className="nav-mobile-links-container">
              {renderNavLinks()}
              <div className="mobile-auth-button">
                {renderAuthButton()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;