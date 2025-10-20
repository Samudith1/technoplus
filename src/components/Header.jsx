import React, { useEffect, useState } from "react";
import "./Header.css";
import logoWhite from "../assets/WiteLogo.png";
import logoBlack from "../assets/BlackLogo.png";
import SearchBar from "./SearchBar";

// ✅ Correct MUI icon import (default export)
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`tp-nav ${scrolled ? "tp-nav--scrolled" : ""}`}>
      <div className="tp-nav__inner">
        <a href="/" className="tp-nav__brand">
          <img src={scrolled ? logoBlack : logoWhite} alt="Technoplus" />
        </a>

        <nav className="tp-nav__links">
          <a href="/store">Products</a>
          <a href="/gallery">Our Gallery</a>
          <a href="#where-to-buy">Where to Buy</a>
          <a href="/support">Support</a>
          <a href="#/product">AboutUs</a>
        </nav>

        <div className="tp-nav__actions">
          
        </div>
      </div>
    </header>
  );
}
