import { useState } from "react";
import "../../assets/styles/PasswordInput.css";

export function PasswordInput({
  id,
  placeholder,
  value,
  onChange,
  error,
  ...inputProps
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="password-wrapper">
      <input
        id={id}
        type={show ? "text" : "password"}
        placeholder={placeholder || "Password"}
        value={value}
        onChange={onChange}
        className={`password-input ${error ? "error" : ""}`}
        onFocus={(e) => {
          e.target.style.borderColor = error ? "#e53e3e" : "#4ade80";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? "#e53e3e" : "#2d2d4e";
        }}
        {...inputProps}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="password-toggle"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
}
