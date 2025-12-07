import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen((o) => !o);
    document.addEventListener("toggleMenu", handler);
    return () => document.removeEventListener("toggleMenu", handler);
  }, []);

  return (
    <div
      className="mobile-menu"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="container">
        <NavLink to="/" className="mobile-link">
          Home
        </NavLink>
        <NavLink to="/gallery" className="mobile-link">
          Gallery
        </NavLink>
        <a href="#contact" className="mobile-link">Contact</a>
      </div>
    </div>
  );
}
