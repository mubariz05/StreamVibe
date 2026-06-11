import "../../assets/styles/Card.css";

const categories = [
  {
    name: "Action",
    images: [
      "/img/card1.png",
      "/img/card2.png",
      "/img/card3.png",
      "/img/card4.png",
    ],
  },
  {
    name: "Adventure",
    images: [
      "/img/card1.png",
      "/img/card2.png",
      "/img/card3.png",
      "/img/card4.png",
    ],
  },
  {
    name: "Comedy",
    images: [
      "/img/card1.png",
      "/img/card2.png",
      "/img/card3.png",
      "/img/card4.png",
    ],
  },
  {
    name: "Drama",
    images: [
      "/img/card1.png",
      "/img/card2.png",
      "/img/card3.png",
      "/img/card4.png",
    ],
  },
  {
    name: "Horror",
    images: [
      "/img/card1.png",
      "/img/card2.png",
      "/img/card3.png",
      "/img/card4.png",
    ],
  },
];

const Card = () => {
  return (
    <div className="card-section">
      <div className="card-header">
        <div className="card-header-left">
          <h2 className="card-title">Explore our wide variety of categories</h2>
          <span className="card-desc">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </span>
        </div>
        <div className="card-controls">
          <button className="ctrl-btn">
            <img src="/icons/arrow-left.svg" alt="left" />
          </button>
          <div className="ctrl-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="ctrl-btn">
            <img src="/icons/arrow-right.svg" alt="right" />
          </button>
        </div>
      </div>

      <div className="card-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
            <div className="category-img-grid">
              {cat.images.map((img, index) => (
                <img key={index} src={img} alt={`${cat.name} ${index + 1}`} />
              ))}
            </div>
            <div className="category-footer">
              <div className="category-footer-left">
                <span className="category-badge">Top 10 In</span>
                <span>{cat.name}</span>
              </div>
              <span className="category-arrow">
                <img src="/icons/arrow-right.svg" alt="right" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
