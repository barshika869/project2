import React from 'react'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fragrance from './pages/Fragrance'
import HairCare from './pages/HairCare'
import SkinCare from './pages/SkinCare'
import Makeup from './pages/Makeup'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import Login from './pages/Login';




export default function App() {
return (
<div className="app-root">
<Header />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/fragrance" element={<Fragrance />} />
<Route path="/haircare" element={<HairCare />} />
<Route path="/skincare" element={<SkinCare />} />
<Route path="/makeup" element={<Makeup />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/privacy" element={<Privacy />} />


</Routes>
</main>
<Footer />
</div>
)
}