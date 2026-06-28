import { useState } from "react";
import "../../../assets/styles/SupportFAQ.css";
import Button from "../../ui/Button";

const faqs = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How much does StreamVibe cost?",
    answer:
      "We offer multiple plans starting from $4.99/month. You can choose between Basic, Standard, and Premium plans.",
  },
  {
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe offers thousands of movies, TV shows, documentaries, and original content across all genres.",
  },
  {
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on smartphones, tablets, smart TVs, laptops, gaming consoles, and VR headsets.",
  },
  {
    question: "Can I download content to watch offline?",
    answer:
      "Yes, with our Standard and Premium plans you can download content and watch it offline anytime, anywhere.",
  },
  {
    question: "How many screens can I watch on simultaneously?",
    answer:
      "Depending on your plan, you can watch on 1 to 4 screens at the same time with a single account.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your StreamVibe subscription at any time with no cancellation fees.",
  },
  {
    question: "Is there a free trial available?", // data.question
    answer:
      "Yes, we offer a 30-day free trial for new users. No credit card required to get started.", // data.answer
  },
];

const SupportFAQ = () => {
  //const {data} = useApi();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskQuestion = () => {
    const formEl = document.querySelector(".support-right");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-section">
        <div className="faq-header">
          <div className="faq-header-left">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <span className="faq-desc">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </span>
          </div>
          <Button variant="primary" size="lg" onClick={handleAskQuestion}>
            Ask a Question
          </Button>
        </div>
        <div className="faq-accordion">
          <div className="faq-col">
            {faqs
              .filter((_, i) => i % 2 === 0)
              .map((faq, i) => {
                const index = i * 2;
                return (
                  <div
                    className={`faq-item ${openIndex === index ? "open" : ""}`}
                    key={index}
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-question">
                      <div className="faq-question-left">
                        <span className="faq-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="faq-question-text">
                          {faq.question}
                        </span>
                      </div>
                      <span className="faq-icon">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </div>
                    {openIndex === index && (
                      <p className="faq-answer">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
          </div>

          <div className="faq-col">
            {faqs
              .filter((_, i) => i % 2 !== 0)
              .map((faq, i) => {
                const index = i * 2 + 1;
                return (
                  <div
                    className={`faq-item ${openIndex === index ? "open" : ""}`}
                    key={index}
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-question">
                      <div className="faq-question-left">
                        <span className="faq-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="faq-question-text">
                          {faq.question}
                        </span>
                      </div>
                      <span className="faq-icon">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </div>
                    {openIndex === index && (
                      <p className="faq-answer">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportFAQ;
