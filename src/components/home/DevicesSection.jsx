import "../../assets/styles/DevicesSection.css";

const DevicesSection = () => {
  return (
    <div className="devices-wrapper">
      <div className="devices-section">
        <div className="devices-header">
          <h2 className="devices-title">
            We Provide you streaming experience across various devices.
          </h2>
          <p className="devices-desc">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>

        <div className="devices-grid">
          <div className="device-card">
            <div className="device-card-header">
              <div className="device-icon">
                <img src="icons/smartphone.svg" alt="Smartphones" />
              </div>
              <span className="device-name">Smartphones</span>
            </div>
            <p className="device-desc">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="device-card">
            <div className="device-card-header">
              <div className="device-icon">
                <img src="icons/tablet.svg" alt="Tablet" />
              </div>
              <span className="device-name">Tablet</span>
            </div>
            <p className="device-desc">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="device-card">
            <div className="device-card-header">
              <div className="device-icon">
                <img src="icons/smarttv.svg" alt="Smart TV" />
              </div>
              <span className="device-name">Smart TV</span>
            </div>
            <p className="device-desc">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="device-card">
            <div className="device-card-header">
              <div className="device-icon">
                <img src="icons/laptop.svg" alt="Laptops" />
              </div>
              <span className="device-name">Laptops</span>
            </div>
            <p className="device-desc">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="device-card">
            <div className="device-card-header">
              <div className="device-icon">
                <img src="icons/gaming-console.svg" alt="Gaming Consoles" />
              </div>
              <span className="device-name">Gaming Consoles</span>
            </div>
            <p className="device-desc">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className="device-card">
            <div className="device-card-header">
              <div className="device-icon">
                <img src="icons/vr-headset.svg" alt="VR Headsets" />
              </div>
              <span className="device-name">VR Headsets</span>
            </div>
            <p className="device-desc">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesSection;
