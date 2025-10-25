import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import WhiteLogo from "../assets/WhiteLogo.png";
import BlackLogo from "../assets/BlackLogo.png";
import { Search, AccountCircle } from "@mui/icons-material"; // optional if using MUI icons

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); // always white bar for other pages
    }
  }, [isHome]);

  return (
    <header className={`tp-nav ${scrolled ? "tp-nav--scrolled" : ""}`}>
      <div className="tp-nav__inner">
        {/* Logo */}
        <Link to="/" className="tp-nav__brand">
          <img
            src={scrolled ? BlackLogo : WhiteLogo}
            alt="Technoplus Logo"
          />
        </Link>

        {/* Links */}
        <nav className="tp-nav__links">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/gallery">Our Gallery</Link>
          <Link to="/where-to-buy">Where to Buy</Link>
          <Link to="/support">Support</Link>
          <Link to="/about">About Us</Link>
        </nav>

        {/* Right Actions */}
        <div className="tp-nav__actions">
          
        </div>
      </div>
    </header>
  );
};

export default Header;
