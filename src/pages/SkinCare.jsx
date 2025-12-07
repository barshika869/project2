import React from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'


export default function SkinCare(){
const list = products.filter(p => p.category === 'Skin Care')
return (
<div>
<h1>SkinCare</h1>
<section className="products-grid">
{list.map(p => <ProductCard key={p.id} product={p} />)}
</section>
</div>
)
}