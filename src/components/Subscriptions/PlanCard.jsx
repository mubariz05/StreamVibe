import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useSubscription } from "../../api/Usesubscription";
import toast from "react-hot-toast";

const PlanCard = ({ plan, billingCycle }) => {
  const price =
    billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

  const { user, openLoginModal } = useAuth();
  const { subscribe } = useSubscription();

  const [trialLoading, setTrialLoading] = useState(false);
  const [planLoading, setPlanLoading] = useState(false);

  const handleSubscribe = async (isTrial) => {
    if (!user) {
      openLoginModal();
      return;
    }

    const setLoading = isTrial ? setTrialLoading : setPlanLoading;
    setLoading(true);
    try {
      await subscribe(plan.id, billingCycle, isTrial);
      toast.success("Subscription activated!");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const busy = trialLoading || planLoading;

  return (
    <div className={`plan-card ${plan.isPopular ? "plan-card--popular" : ""}`}>
      <div className="plan-card__header">
        <h3 className="plan-card__name">{plan.name}</h3>
        <p className="plan-card__desc">{plan.description}</p>
      </div>

      <div className="plan-card__price">
        <span className="plan-card__amount">${price.toFixed(2)}</span>
        <span className="plan-card__period">/month</span>
      </div>

      <div className="plan-card__actions">
        <button
          className="plan-card__btn plan-card__btn--outline"
          onClick={() => handleSubscribe(true)}
          disabled={busy}
        >
          {trialLoading ? "Processing..." : "Start Free Trial"}
        </button>
        <button
          className="plan-card__btn plan-card__btn--primary"
          onClick={() => handleSubscribe(false)}
          disabled={busy}
        >
          {planLoading ? "Processing..." : "Choose Plan"}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
