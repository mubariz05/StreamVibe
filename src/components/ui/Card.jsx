import { useState, useEffect } from "react";
import request from "../../api/Api";
import "../../assets/styles/Card.css";

const Card = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await request("genre/movie/list?language=en-US");
      if (!data) return;

      const genres = data.genres.slice(0, 5);

      const genresWithImages = await Promise.all(
        genres.map(async (genre) => {
          const movies = await request(
            `discover/movie?with_genres=${genre.id}&language=en-US&page=1`,
          );
          const images = movies
            ? movies.results
                .slice(0, 4)
                .map((m) => `https://image.tmdb.org/t/p/w300${m.poster_path}`)
            : [];
          return { name: genre.name, images };
        }),
      );

      setCategories(genresWithImages);
    };

    fetchGenres();
  }, []);

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
