import { useState } from "react";
import BillingToggle from "../../components/Subscriptions/BillingToggle";
import PlanCards from "../../components/Subscriptions/PlanCards";
import PlanComparisonTable from "../../components/Subscriptions/PlanComparisonTable";
import "../../assets/styles/Subscriptions.css";

const Subscriptions = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="subscriptions-page">
      <div className="subscriptions-wrapper">
        <section className="plan-section">
          <div className="plan-section__header">
            <div className="plan-section__header-left">
              <h2 className="plan-section__title">
                Choose the plan that's right for you
              </h2>
              <p className="plan-section__desc">
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </p>
            </div>
            <BillingToggle
              billingCycle={billingCycle}
              onToggle={setBillingCycle}
            />
          </div>
          <PlanCards billingCycle={billingCycle} />
        </section>

        <PlanComparisonTable />
      </div>
    </div>
  );
};

export default Subscriptions;
