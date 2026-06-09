import "../../assets/styles/Button.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${fullWidth ? "btn--full" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
