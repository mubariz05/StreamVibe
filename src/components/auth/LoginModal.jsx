import { useState } from "react";
import { PasswordInput } from "../ui/PasswordInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";
import "../../assets/styles/LoginModal.css";

const FieldError = ({ msg }) =>
  msg ? <p className="auth-error">{msg}</p> : null;

export function LoginModal({ onSwitchToRegister, onClose }) {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const set = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!fields.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!fields.password) {
      errs.password = "Password is required";
    }
    return errs;
  };
  const handleSubmit = async () => {
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          fields.email,
          fields.password,
        );

        toast.success(
          `Xoş gəldin, ${userCredential.user.displayName || userCredential.user.email}!`,
        );

        onClose();
      } catch (error) {
        console.error(error);
        toast.error("Email və ya şifrə yanlışdır");
      }
    }
  };

  return (
    <div>
      <p className="auth-subtitle">Login to your account</p>

      <div className="auth-field">
        <label className="auth-label" htmlFor="login-email">
          Email
        </label>
        <input
          id="login-email"
          type="email"
          placeholder="Email"
          value={fields.email}
          onChange={set("email")}
          className={`auth-input ${errors.email ? "error" : ""}`}
        />
        <FieldError msg={errors.email} />
      </div>

      <div className="auth-field-password">
        <label className="auth-label" htmlFor="login-password">
          Password
        </label>
        <PasswordInput
          id="login-password"
          placeholder="Password"
          value={fields.password}
          onChange={set("password")}
          error={!!errors.password}
        />
        <FieldError msg={errors.password} />
      </div>

      <div className="auth-forgot-wrapper">
        <button type="button" className="auth-forgot">
          Forgot Password
        </button>
      </div>

      <button type="button" onClick={handleSubmit} className="auth-submit-btn">
        Login
      </button>

      <p className="auth-switch-text">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="auth-link"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
