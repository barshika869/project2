import React from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'


export default function Fragrance(){
const list = products.filter(p => p.category === 'Fragrance')
return (
<div style={{ width: "100%" }}>
<h1>Fragrance</h1>
<section className="products-grid">
{list.map(p => <ProductCard key={p.id} product={p} />)}
</section>
</div>
)
}