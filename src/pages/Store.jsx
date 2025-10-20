import React from "react";
import Header from "../components/Header";
import "./store.css";

// --- Demo images (replace with your own) ---
import hero from "../assets/hero.jpg";
import thumb from "../assets/Products/prod1.png";

// Example data (swap with API later)
const topProducts = [
  { id: "tp1", name: "Reload Machine", img: thumb },
  { id: "tp2", name: "Reload Machine", img: thumb },
  { id: "tp3", name: "Reload Machine", img: thumb },
  { id: "tp4", name: "Reload Machine", img: thumb },
  { id: "tp5", name: "Reload Machine", img: thumb },
  { id: "tp6", name: "Reload Machine", img: thumb },
];

const catalog = [
  {
    title: "Reload Machines",
    items: Array.from({ length: 6 }).map((_, i) => ({
      id: `reload-${i}`,
      name: "Reload Machine",
      price: "LKR 100,000",
      img: thumb,
      stock: "In Stock Now",
    })),
  },
  {
    title: "Vending Machines",
    items: Array.from({ length: 6 }).map((_, i) => ({
      id: `vend-${i}`,
      name: "Vending Machine",
      price: "LKR 100,000",
      img: thumb,
      stock: "In Stock Now",
    })),
  },
  {
    title: "Ticket Machines",
    items: Array.from({ length: 6 }).map((_, i) => ({
      id: `ticket-${i}`,
      name: "Ticket Machine",
      price: "LKR 100,000",
      img: thumb,
      stock: "In Stock Now",
    })),
  },
  {
    title: "Security Systems",
    items: Array.from({ length: 6 }).map((_, i) => ({
      id: `sec-${i}`,
      name: "Security System",
      price: "LKR 100,000",
      img: thumb,
      stock: "In Stock Now",
    })),
  },
  {
    title: "Smart Systems",
    items: Array.from({ length: 6 }).map((_, i) => ({
      id: `smart-${i}`,
      name: "Smart System",
      price: "LKR 100,000",
      img: thumb,
      stock: "In Stock Now",
    })),
  },
  {
    title: "Agricultural Systems",
    items: Array.from({ length: 6 }).map((_, i) => ({
      id: `agri-${i}`,
      name: "Agricultural System",
      price: "LKR 100,000",
      img: thumb,
      stock: "In Stock Now",
    })),
  },
];

function ProductCard({ item, onBuy }) {
  return (
    <article className="sp-card">
      <div className="sp-thumb">
        {/* Use real image if available; fallback to gray bg */}
        {item.img ? <img src={item.img} alt={item.name} /> : null}
      </div>

      <div className="sp-meta">
        {item.stock && <span className="sp-badge">{item.stock}</span>}
        <h4 className="sp-name">{item.name}</h4>
        <div className="sp-bottom">
          <span className="sp-price">{item.price}</span>
          <button className="sp-buy" onClick={() => onBuy(item)}>Buy</button>
        </div>
      </div>
    </article>
  );
}

export default function Store() {
  const handleBuy = (item) => {
    // TODO: route to /product/:id or open cart
    alert(`Buying: ${item.name}`);
  };

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="store-hero" style={{ backgroundImage: `url(${hero})` }} />

      {/* Top products row */}
      <section className="store-top">
        <div className="store-top__inner">
          <div className="store-top__scroller">
            {topProducts.map((p) => (
              <a className="store-chip" key={p.id} href="#products">
                <img src={p.img} alt={p.name} />
                <span>{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      <main className="store-main">
        {catalog.map((cat) => (
          <section className="store-section" key={cat.title} id={cat.title.replaceAll(" ", "-").toLowerCase()}>
            <h3 className="store-section__title">{cat.title}</h3>
            <div className="store-grid">
              {cat.items.map((item) => (
                <ProductCard key={item.id} item={item} onBuy={handleBuy} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
