import "../../assets/styles/PriceSection.css";
import PriceCardList from "../ui/PriceCardList";
import ToggleSwitch from "../ui/ToggleSwitch";

const PriceSection = () => {
  return (
    <div className="price-wrapper">
      <div className="price-section">
        <div className="price-header">
          <div className="price-header-left">
            <h2 className="price-title">
              Choose the plan that's right for you
            </h2>
            <span className="price-desc">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </span>
          </div>
          <ToggleSwitch />
        </div>
        <PriceCardList />
      </div>
    </div>
  );
};

export default PriceSection;
