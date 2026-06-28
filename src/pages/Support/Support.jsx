import SupportFAQ from "../../components/support/components/SupportFAQ";
import { SupportHero } from "../../components/support/components/SupportHero";
import { ContactForm } from "../../components/support/components/ContactForm";
import "../../assets/styles/Support.css";

const SupportPage = () => {
  return (
    <>
      <div className="support-wrapper">
        <div className="support-page">
          <SupportHero />
          <ContactForm />
        </div>
      </div>
      <SupportFAQ />
    </>
  );
};

export default SupportPage;
