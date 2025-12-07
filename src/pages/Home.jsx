import React from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

export default function Home() {
  // shuffle products and take 8
  const randomProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8)

  return (
    <div>
    <section className="promo-banner">
  <div className="promo-overlay"></div>

  <div className="promo-center">
    <h2>VARIETY<br />GIFT SETS</h2>
    <p>THE PERFECT GIFT</p>
    <a href="/fragrance" className="promo-btn">SHOP NOW</a>
  </div>
</section>


      <h1>Featured Products</h1>
      <section className="products-grid">
        {randomProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  )
}
