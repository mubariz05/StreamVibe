import "../../assets/styles/CTASection.css";
import Button from "../ui/Button";

const CTASection = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta-section">
        <div className="cta-bg">
          <img src="/img/Image1.png" alt="image1" />
          <img src="/img/Image2.png" alt="image2" />
          <img src="/img/Image3.png" alt="image3" />
          <img src="/img/Image4.png" alt="image4" />
        </div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <div className="cta-left">
            <h2 className="cta-title">Start your free trial today!</h2>
            <p className="cta-desc">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Button variant="primary" size="lg">
            Start a Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
