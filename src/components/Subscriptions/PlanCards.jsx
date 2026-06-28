import PlanCard from "./PlanCard";
import { plans } from "../../utils/mockData";

const PlanCards = ({ billingCycle }) => (
  <div className="plan-cards">
    {plans.map((plan) => (
      <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} />
    ))}
  </div>
);

export default PlanCards;
