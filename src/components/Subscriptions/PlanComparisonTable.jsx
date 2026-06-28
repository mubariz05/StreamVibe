import ComparisonRow from "./Comparisonrow";
import { planFeatures } from "../../utils/mockData";

const PlanComparisonTable = () => {
  return (
    <div className="plan-comparison">
      <div className="plan-comparison__header">
        <h2 className="plan-comparison__title">
          Compare our plans and find the right one for you
        </h2>
        <p className="plan-comparison__desc">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>

      <div className="comparison-table">
        <div className="comparison-row comparison-row--head">
          <div className="comparison-cell comparison-cell--label">Features</div>
          <div className="comparison-cell comparison-cell--plan-name">
            Basic
          </div>
          <div className="comparison-cell comparison-cell--plan-name">
            Standard
            <span className="popular-badge">Popular</span>
          </div>
          <div className="comparison-cell comparison-cell--plan-name">
            Premium
          </div>
        </div>

        {planFeatures.map((row) => (
          <ComparisonRow
            key={row.feature}
            feature={row.feature}
            basic={row.basic}
            standard={row.standard}
            premium={row.premium}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanComparisonTable;
