import "../../assets/styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footerListContainer">
        <div className="footerLinkContainer">
          <h4>Home</h4>
          <div className="footerLink">
            <a className="footer-link" href="#">
              Categories
            </a>
            <a className="footer-link" href="#">
              Devices
            </a>
            <a className="footer-link" href="#">
              Pricing
            </a>
            <a className="footer-link" href="#">
              FAQ
            </a>
          </div>
        </div>
        <div>
          <h4>Movies</h4>
          <div className="footerLink">
            <a className="footer-link" href="#">
              Genres
            </a>
            <a className="footer-link" href="#">
              Trending
            </a>
            <a className="footer-link" href="#">
              New Release
            </a>
            <a className="footer-link" href="#">
              Popular
            </a>
          </div>
        </div>
        <div>
          <h4>Shows</h4>
          <div className="footerLink">
            <a className="footer-link" href="#">
              Genres
            </a>
            <a className="footer-link" href="#">
              Trending
            </a>
            <a className="footer-link" href="#">
              New Release
            </a>
            <a className="footer-link" href="#">
              Popular
            </a>
          </div>
        </div>
        <div>
          <h4>Support</h4>
          <div className="footerLink">
            <a className="footer-link" href="#">
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <h4>Subscription</h4>
          <div className="footerLink">
            <a className="footer-link" href="#">
              Plans
            </a>
            <a className="footer-link" href="#">
              Features
            </a>
          </div>
        </div>
        <div>
          <h4>Connect With Us</h4>
          <div className="socialLinks">
            <a href="#" className="socialIcon">
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
            <a href="#" className="socialIcon">
              <img src="/icons/twitter.svg" alt="twitter" />
            </a>
            <a href="#" className="socialIcon">
              <img src="/icons/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <span>© 2023 StreamVib, All Rights Reserved</span>
        <div className="footerPolicy">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
