import "../../assets/styles/PriceCardList.css";
import Button from "./Button";

const plans = [
  {
    name: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "$9.99",
    period: "/month",
  },
  {
    name: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    price: "$12.99",
    period: "/month",
    featured: true,
  },
  {
    name: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    price: "$14.99",
    period: "/month",
  },
];

const PriceCardList = () => {
  return (
    <section className="price-card-list">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`price-card ${plan.featured ? "price-card--featured" : ""}`}
        >
          <div className="price-card__body">
            <h3 className="price-card__name">{plan.name}</h3>
            <p className="price-card__description">{plan.description}</p>
          </div>

          <div className="price-card__pricing">
            <span className="price-card__amount">{plan.price}</span>
            <span className="price-card__period">{plan.period}</span>
          </div>

          <div className="price-card__actions">
            <Button variant="outline" size="lg">
              Start a Free Trial
            </Button>
            <Button variant="primary" size="lg">
              Choose Plan
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PriceCardList;
