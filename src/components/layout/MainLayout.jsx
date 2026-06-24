import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CTASection from "../home/CTASection";
import { useAuthModal } from "../../hooks/useAuthModal";
import { AuthModal } from "../auth/AuthModal";
import { LoginModal } from "../auth/LoginModal";
import { RegisterModal } from "../auth/RegisterModal";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const { isOpen, modalType, openLogin, openRegister, closeModal } =
    useAuthModal();

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1a1a2e",
            color: "#e2e8f0",
            border: "1px solid #2d2d4e",
            fontSize: "14px",
          },
          success: {
            iconTheme: { primary: "#4ade80", secondary: "#0f0f1a" },
          },
          error: {
            iconTheme: { primary: "#e53e3e", secondary: "#0f0f1a" },
          },
        }}
      />
      <Header onLoginClick={openLogin} />
      <main>
        <Outlet />
        <CTASection />
      </main>
      <Footer />

      <AuthModal isOpen={isOpen} onClose={closeModal}>
        {modalType === "login" ? (
          <LoginModal onSwitchToRegister={openRegister} onClose={closeModal} />
        ) : (
          <RegisterModal onSwitchToLogin={openLogin} onClose={closeModal} />
        )}
      </AuthModal>
    </div>
  );
};

export default MainLayout;
