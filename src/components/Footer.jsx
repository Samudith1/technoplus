// Footer.jsx
import React from "react";
import "./Footer.css";
import logo from "../assets/WhiteLogo.png";

// ✅ correct icon imports
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer className="tp-footer">
      <div className="tp-footer__app">
        <h3>Experience Our Technoplus App Soon</h3>
        <button className="tp-footer__button">Download Soon</button>
      </div>

      <hr className="tp-footer__divider" />

      <div className="tp-footer__links">
        <div className="tp-footer__col">
          <h4>Service and Repair</h4>
          <a href="#support">Technoplus Support</a>
          <a href="#verify">Verify Product</a>
          <a href="#warranty">Register Warranty</a>
          <a href="#repair">Book a Repair</a>
          <a href="#portal">My Service Portal</a>
        </div>
        <div className="tp-footer__col">
          <h4>Service and Repair</h4>
          <a href="#support">Technoplus Support</a>
          <a href="#verify">Verify Product</a>
          <a href="#warranty">Register Warranty</a>
          <a href="#repair">Book a Repair</a>
          <a href="#portal">My Service Portal</a>
        </div>
        <div className="tp-footer__col">
          <h4>Service and Repair</h4>
          <a href="#support">Technoplus Support</a>
          <a href="#verify">Verify Product</a>
          <a href="#warranty">Register Warranty</a>
          <a href="#repair">Book a Repair</a>
          <a href="#portal">My Service Portal</a>
        </div>

        <div className="tp-footer__subscribe">
          <h4>Subscribe</h4>
          <p>Get the latest news from Technoplus</p>
          <div className="tp-footer__email">
            <input type="email" placeholder="Your email address" />
            <button>✉️</button>
          </div>
          <div className="tp-footer__socials">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>

      <hr className="tp-footer__divider" />

      <div className="tp-footer__bottom">
        <div className="tp-footer__left">
          <img src={logo} alt="Technoplus" />
          <p>
            Since 2008.<br />©2025 Technoplus Engineering. All rights reserved.
          </p>
        </div>
        <div className="tp-footer__right">
          <a href="#feedback">Feedback on web experience</a>
        </div>
      </div>
    </footer>
  );
}
