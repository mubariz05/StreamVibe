const BillingToggle = ({ billingCycle, onToggle }) => {
  return (
    <div className="billing-toggle">
      <button
        className={`billing-toggle__btn ${billingCycle === "monthly" ? "billing-toggle__btn--active" : ""}`}
        onClick={() => onToggle("monthly")}
      >
        Monthly
      </button>
      <button
        className={`billing-toggle__btn ${billingCycle === "yearly" ? "billing-toggle__btn--active" : ""}`}
        onClick={() => onToggle("yearly")}
      >
        Yearly
      </button>
    </div>
  );
};

export default BillingToggle;