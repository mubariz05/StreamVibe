import { useState, useEffect, useRef } from "react";
import "../../assets/styles/Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = ({ onLoginClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserMenuOpen(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const initial = (user?.displayName || user?.email || "?")
    .charAt(0)
    .toUpperCase();

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
          <li
            className={`header__nav-item${location.pathname === "/support" ? " active" : ""}`}
          >
            <Link to="/support" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
          </li>
          <li
            className={`header__nav-item${location.pathname === "/subscriptions" ? " active" : ""}`}
          >
            <Link to="/subscriptions" onClick={() => setMenuOpen(false)}>
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

        {user ? (
          <div className="header__user" ref={userMenuRef}>
            <button
              className="header__user-btn"
              aria-label="Account menu"
              onClick={() => setUserMenuOpen((prev) => !prev)}
            >
              <span className="header__user-avatar">{initial}</span>
              <span className="header__user-name">
                {user.displayName || user.email}
              </span>
              <img
                src="/icons/chevron-down.svg"
                alt=""
                className={`header__user-chevron${
                  userMenuOpen ? " header__user-chevron--open" : ""
                }`}
              />
            </button>

            {userMenuOpen && (
              <div className="header__user-dropdown">
                <Link
                  to="/subscriptions"
                  className="header__user-dropdown-item"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Subscriptions
                </Link>
                <button
                  className="header__user-dropdown-item header__user-dropdown-item--danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="header__icon-btn"
            aria-label="Login"
            onClick={onLoginClick}
          >
            <img src="/icons/user.svg" alt="user" />
          </button>
        )}

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
