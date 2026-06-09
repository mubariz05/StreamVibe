import "../../assets/styles/Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__gradient-top" />
      <div className="hero__gradient-bottom" />

      <div className="hero__rows">
        <div className="hero__row">
          <img src="/img/Image1.png" alt="images-1" />
        </div>
        <div className="hero__row">
          <img src="/img/Image2.png" alt="images-2" />
        </div>
        <div className="hero__row">
          <img src="/img/Image3.png" alt="images-3" />
        </div>
        <div className="hero__row">
          <img src="/img/Image4.png" alt="images-4" />
        </div>
      </div>

      {/* Logo — şəkillərin ortasında */}
      <div className="hero__logo">
        <img className="media-img" src="/img/media-btn.svg" alt="media" />
      </div>

      <div className="hero__content">
        <div className="container">
          <h1 className="hero__title">The Best Streaming Experience</h1>
        </div>
        <p className="hero__subtitle">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <button className="hero__btn">
          <span className="hero__btn-icon">
            <img src="/icons/play.svg" alt="media" />
          </span>
          Start Watching Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
