import React from 'react'
import { Link } from "react-router-dom"

export default function Footer(){
return (
<footer className="footer">
<div style={{maxWidth:1200, margin:'0 auto', display:'flex', gap:24, flexWrap:'wrap', justifyContent:'space-between'}}>
<div>
<strong>PerfumeCo</strong>
<p>Premium fragrances & beauty products</p>
</div>
<div>
<div><Link to="/about">About Us</Link></div>
<div><Link to="/contact">Contact</Link></div>
<div><Link to="/privacy">Privacy Policy</Link></div>
</div>
<div>
<div>© {new Date().getFullYear()} PerfumeCo</div>
</div>
</div>
</footer>
)
}