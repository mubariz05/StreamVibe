import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { AuthModal } from "../auth/AuthModal";
import { LoginModal } from "../auth/LoginModal";
import { RegisterModal } from "../auth/RegisterModal";
import "../../assets/styles/NavbarUserMenu.css";

const getInitials = (user) => {
  if (!user) return "?";
  const name = user.displayName || user.email || "";
  return name.slice(0, 2).toUpperCase();
};

export const NavbarUserMenu = () => {
  const { user, authModal, openLoginModal, closeAuthModal } = useAuth();
  const { logout } = useAuth();
  const [modalView, setModalView] = useState("login");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (authModal) setModalView(authModal);
  }, [authModal]);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleProfile = () => {
    setDropdownOpen(false);
    navigate("/profile");
  };

  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout();
    navigate("/");
  };

  return (
    <>
      {user ? (
        <div className="nv-user" ref={dropRef}>
          <button
            className="nv-avatar"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-label="User menu"
            aria-expanded={dropdownOpen}
          >
            {getInitials(user)}
          </button>

          {dropdownOpen && (
            <div className="nv-dropdown" role="menu">
              <div className="nv-dropdown__info">
                <span className="nv-dropdown__name">
                  {user.displayName || "User"}
                </span>
                <span className="nv-dropdown__email">{user.email}</span>
              </div>
              <div className="nv-dropdown__divider" />
              <button
                className="nv-dropdown__item"
                onClick={handleProfile}
                role="menuitem"
              >
                My Profile
              </button>
              <button
                className="nv-dropdown__item nv-dropdown__item--danger"
                onClick={handleLogout}
                role="menuitem"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button className="nv-signin-btn" onClick={openLoginModal}>
          Sign in
        </button>
      )}

      <AuthModal isOpen={!!authModal} onClose={closeAuthModal}>
        {modalView === "login" ? (
          <LoginModal
            onSwitchToRegister={() => setModalView("register")}
            onClose={closeAuthModal}
          />
        ) : (
          <RegisterModal
            onSwitchToLogin={() => setModalView("login")}
            onClose={closeAuthModal}
          />
        )}
      </AuthModal>
    </>
  );
};

export default NavbarUserMenu;
