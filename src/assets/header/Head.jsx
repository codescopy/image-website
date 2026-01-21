import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [open, setOpen] = useState(false);

    useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="header-content">
      <NavLink to="/">
        <img className="head-image" src="al9ora.png" alt="logo" />
      </NavLink>

      <input className="search-input" type="search" placeholder="search..." />

      {/* HAMBURGER */}
      <p className="phone-menu" onClick={() => setOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </p>

      {/* CLOSE */}
      <p className={`close ${open ? "show" : ""}`} onClick={() => setOpen(false)}>
        X
      </p>

      {/* DARK BACKGROUND */}
      <div
        className={`dark-background ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* MENU */}
      <ul className={`menu ${open ? "open" : ""}`}>
        <li className="about-us" onClick={() => setOpen(false)}>
          About us
        </li>
        <li className="categories" onClick={() => setOpen(false)}>
          Categories
        </li>
        <li className="sign-up-container" onClick={() => setOpen(false)}>
          <NavLink className="sign-up" to="/sign-up">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
