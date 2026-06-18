import { useState, useEffect } from "react";
import request from "../../api/Api";
import Button from "../ui/Button";
import "../../assets/styles/Support.css";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [posterImages, setPosterImages] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      const data = await request("movie/popular?language=en-US&page=1");
      if (!data) return;
      const images = data.results
        .slice(0, 9)
        .map((m) => `https://image.tmdb.org/t/p/w300${m.poster_path}`);
      setPosterImages(images);
    };
    fetchPosters();
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="support-wrapper">
      {" "}
      <div className="support-page">
        <div className="support-left">
          <div className="support-left__overlay" />
          <div className="support-left__posters">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`poster poster--${i + 1}`}>
                {posterImages[i] && (
                  <img src={posterImages[i]} alt={`poster ${i + 1}`} />
                )}
              </div>
            ))}
          </div>
          <div className="support-left__content">
            <h1 className="support-left__title">
              Welcome to our
              <br />
              support page!
            </h1>
            <p className="support-left__desc">
              We're here to help you with any problems you may be having with
              our product.
            </p>
          </div>
        </div>

        <div className="support-right">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-row">
                <div className="flag-select">
                  🇦🇿 <span>▾</span>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-footer">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              I agree with Terms of Use and Privacy Policy
            </label>

            <Button variant="primary" size="lg" onClick={() => {}}>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
