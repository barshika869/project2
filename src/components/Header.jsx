import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'


export default function Header(){
return (
<header className="header">
<div style={{display:'flex',alignItems:'center',gap:16}}>
<Link to="/" className="logo">PerfumeCo</Link>
<nav className="nav">
<NavLink to="/fragrance">Fragrance</NavLink>
<NavLink to="/haircare">Hair Care</NavLink>
<NavLink to="/skincare">Skin Care</NavLink>
<NavLink to="/makeup">Makeup</NavLink>


</nav>
</div>
<div style={{display:'flex',alignItems:'center',gap:12}}>
<SearchBar />
<Link to="/login">Login</Link>
</div>
</header>
)
}


