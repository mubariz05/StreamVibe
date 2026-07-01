import { useState } from "react";
import { PasswordInput } from "../ui/PasswordInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

import { auth, db } from "../../firebase";
import "../../assets/styles/RegisterModal.css";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const FieldError = ({ msg }) =>
  msg ? <p className="field-error">{msg}</p> : null;

export function RegisterModal({ onSwitchToLogin, onClose }) {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    agreed: false,
  });
  const [errors, setErrors] = useState({});

  const set = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));
  const toggle = () => setFields((f) => ({ ...f, agreed: !f.agreed }));

  const validate = () => {
    const errs = {};
    if (!fields.username.trim()) errs.username = "Username is required";
    else if (fields.username.trim().length < 3)
      errs.username = "Username must be at least 3 characters";

    if (!fields.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = "Please enter a valid email";

    if (!fields.password) errs.password = "Password is required";
    else if (fields.password.length < 8)
      errs.password = "Password must be at least 8 characters";

    if (!fields.confirm) errs.confirm = "Please confirm your password";
    else if (fields.confirm !== fields.password)
      errs.confirm = "Passwords do not match";

    if (!fields.agreed) errs.agreed = "You must agree to the terms";

    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          fields.email,
          fields.password,
        );

        await updateProfile(userCredential.user, {
          displayName: fields.username,
        });

        await setDoc(doc(db, "users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          username: fields.username,
          email: fields.email,
          createdAt: serverTimestamp(),
        });

        toast.success(`Xoş gəldin, ${fields.username}! Qeydiyyat tamamlandı`);
        onClose?.();
      } catch (error) {
        console.error(error);

        switch (error.code) {
          case "auth/email-already-in-use":
            toast.error("Bu email artıq istifadə olunur");
            break;

          case "auth/weak-password":
            toast.error("Şifrə çox zəifdir");
            break;

          case "auth/invalid-email":
            toast.error("Email düzgün deyil");
            break;

          default:
            toast.error(error.message);
        }
      }
    }
  };

  return (
    <div>
      <p className="auth-subtitle">Register to enjoy the features</p>

      <div className="auth-field">
        <label className="auth-label" htmlFor="reg-username">
          Username
        </label>
        <input
          id="reg-username"
          type="text"
          placeholder="Username"
          value={fields.username}
          onChange={set("username")}
          className={`auth-input ${errors.username ? "error" : ""}`}
        />
        <FieldError msg={errors.username} />
      </div>

      <div className="auth-field">
        <label className="auth-label" htmlFor="reg-email">
          Email
        </label>
        <input
          id="reg-email"
          type="email"
          placeholder="Email"
          value={fields.email}
          className={`auth-input ${errors.email ? "error" : ""}`}
          onChange={set("email")}
        />
        <FieldError msg={errors.email} />
      </div>

      <div className="auth-field">
        <label className="auth-label" htmlFor="reg-password">
          Password
        </label>
        <PasswordInput
          id="reg-password"
          placeholder="Password"
          value={fields.password}
          onChange={set("password")}
          error={!!errors.password}
        />
        <FieldError msg={errors.password} />
      </div>

      <div className="auth-field-confirm">
        <label className="auth-label" htmlFor="reg-confirm">
          Confirm Password
        </label>
        <PasswordInput
          id="reg-confirm"
          placeholder="Confirm Password"
          value={fields.confirm}
          onChange={set("confirm")}
          error={!!errors.confirm}
        />
        <FieldError msg={errors.confirm} />
      </div>

      <div>
        <label className="checkbox-wrapper">
          <div
            onClick={toggle}
            className={`checkbox-box ${fields.agreed ? "active" : ""} ${
              errors.agreed ? "checkbox-error" : ""
            }`}
          >
            {fields.agreed && (
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                <path
                  d="M1 4L4 7.5L10 1"
                  stroke="#0f0f1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span className="checkbox-text">
            I agree to our <a href="#">Privacy Policy</a> and
            <a href="#">Term &amp; Conditions</a>
          </span>
        </label>
        <FieldError msg={errors.agreed} />
      </div>

      <button type="button" onClick={handleSubmit} className="auth-submit-btn">
        Continue
      </button>

      <p className="auth-switch-text">
        Already have an account?
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="auth-switch-btn"
        >
          Login
        </button>
      </p>
    </div>
  );
}
