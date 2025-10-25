import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


// Example hero images
import hero1 from "../assets/hero.jpg";

import cat1 from "../assets/hero.jpg";   // replace with ../assets/automation.jpg
import cat2 from "../assets/hero.jpg";   // replace with ../assets/security.jpg
import cat3 from "../assets/hero.jpg";   // replace with ../assets/agri.jpg"


import warrantyIcon from "../assets/Icons/Warrantry.png";
import serviceIcon from "../assets/Icons/Service.png";
import contactIcon from "../assets/Icons/Contact.png";
import guideIcon from "../assets/Icons/Guide.png";



export default function Home() {
    // Slides (image + headline + product name)
    const slides = [
        { img: hero1, headline: "Smart Automation for Modern Businesses", product: "Technoplus Kiosk Pro" },
        { img: hero1, headline: "Smart Automation for Modern Businesses", product: "Technoplus Kiosk Pro" },
        { img: hero1, headline: "Smart Automation for Modern Businesses", product: "Technoplus Kiosk Pro" },
        { img: hero1, headline: "Smart Automation for Modern Businesses", product: "Technoplus Kiosk Pro" },
        { img: hero1, headline: "Smart Automation for Modern Businesses", product: "Technoplus Kiosk Pro" },
    ];

    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    // ---- vertical list window constants (must match CSS) ----
    const VISIBLE = 3;       // show 3 names
    const ITEM_H = 28;       // line-height of one row in px
    const ITEM_GAP = 8;      // gap between rows in px

    // compute offset so active item stays centered (2nd row) when possible
    const maxOffset = Math.max(0, slides.length - VISIBLE);
    const offset = Math.min(Math.max(index - 1, 0), maxOffset);
    const translateY = -(offset * (ITEM_H + ITEM_GAP));

    // autoplay
    useEffect(() => {
        start();
        return stop;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const start = () => {
        stop();
        timerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, 5000);
    };
    const stop = () => timerRef.current && clearInterval(timerRef.current);

    const goto = (i) => setIndex(((i % slides.length) + slides.length) % slides.length);
    const next = () => goto(index + 1);
    const prev = () => goto(index - 1);

    return (
        <>
            <Header />

            {/* HERO / SLIDER */}
            <section className="hero" onMouseEnter={stop} onMouseLeave={start}>
                {slides.map((s, i) => (
                    <div
                        key={i}
                        className={`hero__slide ${i === index ? "is-active" : ""}`}
                        style={{ backgroundImage: `url(${s.img})` }}
                        aria-hidden={i !== index}
                    >
                        <div className="hero__content">
                            <h1>{s.headline}</h1>
                            <div className="hero__cta">
                                <a href="#learn" className="btn ghost">Learn More</a>
                                <a href="#buy" className="btn solid">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}

                {/* nav arrows */}
                <button className="hero__arrow hero__arrow--left" aria-label="Previous" onClick={prev}>‹</button>
                <button className="hero__arrow hero__arrow--right" aria-label="Next" onClick={next}>›</button>

                {/* bottom-center product list (vertical, auto-scroll, 3 visible) */}
                <div className="hero__products">
                    <div className="hero__track" style={{ transform: `translateY(${translateY}px)` }}>
                        {slides.map((s, i) => (
                            <button
                                key={i}
                                className={`hero__product ${i === index ? "active" : ""}`}
                                onClick={() => goto(i)}
                                aria-label={`Go to ${s.product}`}
                            >
                                {s.product}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* STRIP / BAND under hero */}
            <section className="tp-band">
                <div className="tp-band__inner">{/* content */}</div>
            </section>

            {/* FEATURE GRID SECTION */}
            <section className="tp-grid">
                <div className="tp-grid__inner">
                    <div className="tp-grid__item">Product 01</div>
                    <div className="tp-grid__item">Product 02</div>
                    <div className="tp-grid__item">Product 03</div>
                    <div className="tp-grid__item">Product 04</div>
                </div>
            </section>

            {/* CUSTOMER SHOWCASE */}
            <section className="tp-showcase" id="showcase">
                <div className="tp-showcase__inner">
                    <div className="tp-showcase__header">
                        <h3>Discover Our Customer Showcase</h3>
                        <p>Our Customers, Our Pride</p>
                    </div>

                    <div className="tp-showcase__scroller" id="showcaseScroller">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <article className="tp-showcase__card" key={n}></article>
                        ))}
                    </div>

                    <button
                        className="tp-showcase__arrow left"
                        aria-label="Scroll left"
                        onClick={() => {
                            const el = document.getElementById("showcaseScroller");
                            el && el.scrollBy({ left: -320, behavior: "smooth" });
                        }}
                    >‹</button>
                    <button
                        className="tp-showcase__arrow right"
                        aria-label="Scroll right"
                        onClick={() => {
                            const el = document.getElementById("showcaseScroller");
                            el && el.scrollBy({ left: 320, behavior: "smooth" });
                        }}
                    >›</button>
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="tp-categories" id="categories">
                <div className="tp-categories__inner">
                    <h3 className="tp-categories__title">
                        Explore Technoplus Products in Different Fields
                    </h3>

                    <div className="tp-categories__grid">
                        {/* Automation & Vending */}
                        <a className="tp-cat" href="#automation" aria-label="Automation & Vending Solutions">
                            <div
                                className="tp-cat__card"
                                style={{ backgroundImage: `url(${cat1})` }}
                            >
                                <div className="tp-cat__overlay">
                                    <h4 className="tp-cat__title">Automation & Vending</h4>
                                    <p className="tp-cat__sub">Smart kiosks, POS and vending solutions</p>
                                    <span className="tp-cat__cta">Learn More ›</span>
                                </div>
                            </div>
                        </a>

                        {/* Security & Smart Living */}
                        <a className="tp-cat" href="#security" aria-label="Security & Smart Living">
                            <div
                                className="tp-cat__card"
                                style={{ backgroundImage: `url(${cat2})` }}
                            >
                                <div className="tp-cat__overlay">
                                    <h4 className="tp-cat__title">Security & Smart Living</h4>
                                    <p className="tp-cat__sub">CCTV, access control, and smart home</p>
                                    <span className="tp-cat__cta">Learn More ›</span>
                                </div>
                            </div>
                        </a>

                        {/* Agriculture & Outdoor */}
                        <a className="tp-cat" href="#agri" aria-label="Agriculture & Outdoor Solutions">
                            <div
                                className="tp-cat__card"
                                style={{ backgroundImage: `url(${cat3})` }}
                            >
                                <div className="tp-cat__overlay">
                                    <h4 className="tp-cat__title">Agriculture</h4>
                                    <p className="tp-cat__sub">Efficient and intelligent agri solutions</p>
                                    <span className="tp-cat__cta">Learn More ›</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>


            {/* SUPPORT STRIP */}
            <section className="tp-support" id="support">
                <div className="tp-support__inner">
                    <h3 className="tp-support__title">Technoplus Support</h3>

                    <div className="tp-support__grid">
                        {/* Warranty */}
                        <a className="tp-support__item" href="#warranty">
                            <span className="tp-support__icon" aria-hidden="true">
                                <img src={warrantyIcon} alt="Warranty Icon" />
                            </span>
                            <h4>Warranty</h4>
                            <p>Warranty policy, protection & proof of purchase.</p>
                        </a>

                        {/* Service Centers */}
                        <a className="tp-support__item" href="#service-centers">
                            <span className="tp-support__icon" aria-hidden="true">
                                <img src={serviceIcon} alt="Service Centers Icon" />
                            </span>
                            <h4>Service Centers</h4>
                            <p>Repair with 100% genuine official parts.</p>
                        </a>

                        {/* Contact Us */}
                        <a className="tp-support__item" href="#contact">
                            <span className="tp-support__icon" aria-hidden="true">
                                <img src={contactIcon} alt="Contact Icon" />
                            </span>
                            <h4>Contact Us</h4>
                            <p>Email or social media — reach us easily.</p>
                        </a>

                        {/* User Guide */}
                        <a className="tp-support__item" href="#user-guide">
                            <span className="tp-support__icon" aria-hidden="true">
                                <img src={guideIcon} alt="User Guide Icon" />
                            </span>
                            <h4>User Guide</h4>
                            <p>Find & download your product user guides.</p>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />


        </>
    );
}
