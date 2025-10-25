import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./gallery.css";
import hero from "../assets/gallery.png"; // hero banner image

// 🔽 Auto-import every image in src/assets/Images
const modules = import.meta.glob("../assets/Images/*.{jpg,jpeg,png,webp,gif}", {
  eager: true,
});

const images = Object.entries(modules)
  .map(([path, mod]) => ({
    src: mod.default,
    name: path.split("/").pop(),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function Gallery() {
  return (
    <>
      <Header />

      {/* 🔹 Hero Section */}
      <section
        className="gallery-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="gallery-hero__overlay">
          <h1>Technoplus Gallery</h1>
        </div>
      </section>



      {/* 🔹 Masonry Image Grid */}
      <main className="gallery-main">
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.src} alt={img.name} loading="lazy" />
            </div>
          ))}
        </div>
      </main>

      {/* 🔹 Image Count */}
      <section className="gallery-count">
        <p>
          Showing <strong>{images.length}</strong>{" "}
          {images.length === 1 ? "Image" : "Images"}
        </p>
      </section>
      <Footer />
      
    </>
  );
}
