import "../../assets/styles/PriceComparation.css";

const plans = [
  {
    name: "Basic",
    popular: false,
    price: "$9.99/Month",
    content:
      "Access to a wide selection of movies and shows, including some new releases.",
    devices: "Watch on one device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: "Yes",
    hdr: "No",
    dolbyAtmos: "No",
    adFree: "No",
    offlineViewing: "No",
    familySharing: "No",
  },
  {
    name: "Standard",
    popular: true,
    price: "$12.99/Month",
    content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    devices: "Watch on Two device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: "Yes",
    hdr: "Yes",
    dolbyAtmos: "Yes",
    adFree: "Yes",
    offlineViewing: "Yes, for select titles.",
    familySharing: "Yes, up to 5 family members.",
  },
  {
    name: "Premium",
    popular: false,
    price: "$14.99/Month",
    content:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    devices: "Watch on Four device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: "Yes",
    hdr: "Yes",
    dolbyAtmos: "Yes",
    adFree: "Yes",
    offlineViewing: "Yes, for all titles.",
    familySharing: "Yes, up to 6 family members.",
  },
];

const rows = [
  { label: "Price", key: "price" },
  { label: "Content", key: "content" },
  { label: "Devices", key: "devices" },
  { label: "Free Trail", key: "freeTrial" },
  { label: "Cancel Anytime", key: "cancelAnytime" },
  { label: "HDR", key: "hdr" },
  { label: "Dolby Atmos", key: "dolbyAtmos" },
  { label: "Ad - Free", key: "adFree" },
  { label: "Offline Viewing", key: "offlineViewing" },
  { label: "Family Sharing", key: "familySharing" },
];

const PriceComparison = () => {
  return (
    <div className="price-comparison">
      <div className="price-comparison__header">
        <h2 className="price-comparison__title">
          Compare our plans and find the right one for you
        </h2>
        <p className="price-comparison__desc">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>
      <div className="comparison-table">
        <div className="comparison-row comparison-row--head">
          <div className="comparison-cell comparison-cell--label">Features</div>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="comparison-cell comparison-cell--plan"
            >
              {plan.name}
              {plan.popular && <span className="popular-badge">Popular</span>}
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div key={row.key} className="comparison-row">
            <div className="comparison-cell comparison-cell--label">
              {row.label}
            </div>
            {plans.map((plan) => (
              <div key={plan.name} className="comparison-cell">
                {plan[row.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceComparison;
