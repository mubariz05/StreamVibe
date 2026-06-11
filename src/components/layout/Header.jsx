import { useState } from "react";
import "../../assets/styles/Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-icon">
          <img src="/icons/Logo.svg" alt="logo" />
        </div>
        <span className="header__logo-text">StreamVibe</span>
      </div>

      <nav className={`header__nav${menuOpen ? " header__nav--open" : ""}`}>
        <ul className="header__nav-list">
          <li
            className={`header__nav-item${location.pathname === "/" ? " active" : ""}`}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li
            className={`header__nav-item${location.pathname === "/movies" ? " active" : ""}`}
          >
            <Link to="/movies" onClick={() => setMenuOpen(false)}>
              Movies &amp; Shows
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="#" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="#" onClick={() => setMenuOpen(false)}>
              Subscriptions
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header__actions">
        <button className="header__icon-btn" aria-label="Search">
          <img src="/icons/search.svg" alt="search" />
        </button>
        <button className="header__icon-btn" aria-label="Notifications">
          <img src="/icons/notification.svg" alt="notification" />
        </button>

        <button
          className={`header__burger${menuOpen ? " header__burger--open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src="/icons/burger-btn.svg" alt="burger-btn" />
        </button>
      </div>
    </header>
  );
};

export default Header;
