import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import "./product.css";

import hero1 from "../assets/Products/prod1.png";
import hero2 from "../assets/Products/prod2.png";
import hero3 from "../assets/Products/prod3.png";
import specImg from "../assets/Products/prod1.png";

export default function Product() {
  const slides = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    start();
    return stop;
  }, [index]);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
  };
  const stop = () => timerRef.current && clearInterval(timerRef.current);
  const goto = (i) => setIndex(i % slides.length);
  const next = () => goto(index + 1);
  const prev = () => goto((index - 1 + slides.length) % slides.length);

  return (
    <>
      <Header />

      {/* HERO SLIDER */}
      <section className="product-hero" onMouseEnter={stop} onMouseLeave={start}>
        {slides.map((img, i) => (
          <div
            key={i}
            className={`product-slide ${i === index ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            {i === index && (
              <div className="product-title">
                <h2>Reload Master with Touch Pad</h2>
              </div>
            )}
          </div>
        ))}
        <button className="arrow left" onClick={prev}>‹</button>
        <button className="arrow right" onClick={next}>›</button>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goto(i)}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT PREVIEW GRID */}
      <section className="product-preview">
        <div className="preview-grid">
          <div className="preview-item"></div>
          <div className="preview-item"></div>
          <div className="preview-item wide"></div>
        </div>
      </section>

      {/* IN THE BOX */}
      <section className="inbox">
        <h3>In the Box</h3>
        <div className="inbox-grid">
          {[1, 2, 3, 4, 5].map((n) => (
            <div className="inbox-item" key={n}>
              <div className="inbox-box"></div>
              <p>Machine ×1</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="specs">
        <h3>Specifications & Features</h3>
        <p className="specs-desc">
          Enjoy the warm sound of vinyl anywhere in your home, thanks to the PS-LX310BT’s easy Bluetooth® connectivity.
          One-step auto play lets you spin your favourite music at the touch of a button, while a newly designed tone arm
          delivers a smoother listening experience.
        </p>

        <div className="specs-content">
          <ul>
            <li>Specifications & Features 01</li>
            <li>Specifications & Features 02</li>
            <li>Specifications & Features 03</li>
            <li>Specifications & Features 04</li>
            <li>Specifications & Features 05</li>
          </ul>
          <div className="specs-img">
            <img src={specImg} alt="Product feature" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
