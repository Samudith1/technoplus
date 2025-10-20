import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import "./support.css";

import hero from "../assets/hero.jpg";               // banner image
import sampleImg from "../assets/Products/prod1.png";  // placeholder for tiles

const QUICK_ACTIONS = [
  {
    title: "Verify Product",
    desc: "Check authenticity of your Technoplus devices.",
    cta: "Check Now »",
    href: "#verify"
  },
  {
    title: "Register Warranty",
    desc: "Activate your warranty for support, sales & repairs.",
    cta: "Start Registration »",
    href: "#warranty"
  },
  {
    title: "Book a Repair",
    desc: "Schedule a service or repair easily.",
    cta: "Make Appointment »",
    href: "#repair"
  },
  {
    title: "My Service Portal",
    desc: "Access all your service tickets and product history.",
    cta: "View Portal »",
    href: "#portal"
  }
];

const CATEGORIES = [
  "Reload Machines",
  "Vending Machines",
  "Ticket Machines",
  "Security Systems",
  "Smart Systems",
  "Agricultural Systems"
];

// demo items (swap with API later)
const ALL_ITEMS = CATEGORIES.flatMap((cat, ci) =>
  Array.from({ length: 9 }).map((_, i) => ({
    id: `${cat}-${i}`,
    category: cat,
    name: `${cat.replace(/s$/, "")}`,
    img: sampleImg
  }))
);

export default function Support() {
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState(CATEGORIES[0]);

  const items = useMemo(() => {
    return ALL_ITEMS.filter(
      it =>
        (!activeCat || it.category === activeCat) &&
        (!q.trim() || it.name.toLowerCase().includes(q.toLowerCase()))
    ).slice(0, 9);
  }, [activeCat, q]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Support search:", q);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="sup-hero" style={{ backgroundImage: `url(${hero})` }} />

      {/* QUICK ACTIONS */}
      <section className="sup-quick">
        <h2>Technoplus Support</h2>
        <div className="sup-quick__grid">
          {QUICK_ACTIONS.map(a => (
            <a key={a.title} className="sup-qa" href={a.href}>
              <div className="sup-qa__title">{a.title}</div>
              <div className="sup-qa__desc">{a.desc}</div>
              <div className="sup-qa__cta">{a.cta}</div>
            </a>
          ))}
        </div>
      </section>

      {/* SEARCH */}
      <section className="sup-search">
        <h3>Search for support</h3>
        <form className="sup-search__bar" onSubmit={handleSearch} role="search">
          <span className="sup-search__icon" aria-hidden="true">🔍</span>
          <input
            type="search"
            placeholder="Search Support"
            value={q}
            onChange={e => setQ(e.target.value)}
            aria-label="Search Support"
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {/* PRODUCT SUPPORT */}
      <section className="sup-products">
        <h3>Product Support</h3>

        <div className="sup-chips">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`sup-chip ${activeCat === cat ? "active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sup-grid">
          {items.map(it => (
            <article key={it.id} className="sup-card">
              <div className="sup-thumb">
                {it.img && <img src={it.img} alt={it.name} loading="lazy" />}
              </div>
              <div className="sup-meta">
                <h4>{it.name}</h4>
                <p className="sup-meta__cat">{it.category}</p>
                <a className="sup-meta__link" href="#docs">View docs</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT US */}
      <section className="sup-contact" id="contact">
        <h3>Contact Us</h3>

        <div className="sup-contact__grid">
          <div className="sup-contact__image" />
          <div className="sup-contact__tile">
            <h4>Online Customer Inquiries</h4>
            <p>Monday – Saturday: 9:00 – 15:00 (SLST)</p>
          </div>
          <div className="sup-contact__tile">
            <h4>Hotline Service</h4>
            <p>Monday – Saturday: 9:00 – 15:00 (SLST)</p>
          </div>
        </div>

        {/* Map (replace src with your Google Maps embed) */}
        <div className="sup-map">
          <iframe
            title="Technoplus Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.241!2d79.786!3d6.927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d1f0%3A0x0!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000"
          />
        </div>
      </section>
    </>
  );
}
