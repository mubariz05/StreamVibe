import { useEffect, useRef } from "react";

const SaintStreamLogo = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "4px",
    }}
  >
    <div
      style={{
        width: "36px",
        height: "36px",
        background: "linear-gradient(135deg, #1a3a2a, #2d5a3d)",
        border: "1px solid #4ade80",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        fontWeight: "700",
        color: "#4ade80",
        letterSpacing: "-0.5px",
      }}
    >
      SS
    </div>
    <span
      style={{
        fontSize: "20px",
        fontWeight: "700",
        color: "#f1f5f9",
        letterSpacing: "-0.3px",
      }}
    >
      SaintStream
    </span>
  </div>
);

export function AuthModal({ isOpen, onClose, children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        animation: "fadeIn 0.18s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
        .ss-input::placeholder { color: #4a5568; }
        .ss-input:focus { outline: none; border-color: #4ade80 !important; }
        .ss-input-error:focus { outline: none; border-color: #e53e3e !important; }
      `}</style>
      <div
        style={{
          background: "#0f0f1a",
          border: "1px solid #1e1e38",
          borderRadius: "16px",
          padding: "32px",
          width: "100%",
          maxWidth: "400px",
          position: "relative",
          animation: "slideUp 0.22s ease",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "#1a1a2e",
            border: "1px solid #2d2d4e",
            borderRadius: "8px",
            color: "#94a3b8",
            padding: "6px 14px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "#4ade80";
            e.target.style.color = "#4ade80";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "#2d2d4e";
            e.target.style.color = "#94a3b8";
          }}
        >
          Close
        </button>

        <SaintStreamLogo />

        {children}
      </div>
    </div>
  );
}
