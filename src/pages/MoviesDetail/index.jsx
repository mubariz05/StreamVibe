import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { trendingMovies, mustWatchMovies } from "../../utils/MoviesData";
import "../../assets/styles/MoviesHero.css";
import "../../assets/styles/MoviesDetail.css";
import Button from "../../components/ui/Button";

const allMovies = [...trendingMovies, ...mustWatchMovies];
const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="star-rating">
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
      <span className="star-value">{rating}</span>
    </span>
  );
};

const REVIEWS_PER_PAGE = 2;

const MoviesDetail = () => {
  const { id } = useParams();
  const movie = allMovies.find((m) => m.id === Number(id));
  const [reviewPage, setReviewPage] = useState(0);
  const castRef = useRef(null);

  if (!movie) return <div className="not-found">Film tapılmadı</div>;
  const totalReviewPages = Math.ceil(
    (movie.reviews?.length || 0) / REVIEWS_PER_PAGE,
  );
  const visibleReviews = (movie.reviews || []).slice(
    reviewPage * REVIEWS_PER_PAGE,
    reviewPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE,
  );

  const scrollCast = (dir) => {
    if (castRef.current) {
      castRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="movies-hero">
        <div className="movies-hero__swiper">
          <div className="movies-hero__slide">
            <img
              src={movie.heroImg || movie.img}
              alt={movie.title}
              className="movies-hero__img"
            />
            <div className="movies-hero__overlay" />
            <div className="movies-hero__content">
              <h2 className="movies-hero__title">{movie.title}</h2>
              <p className="movies-hero__desc">
                {movie.duration} • {movie.views} views
              </p>
              <div className="movies-hero__actions">
                <button className="hero__btn">
                  <span className="hero__btn-icon">
                    <img src="/icons/play.svg" alt="play" />
                  </span>
                  Start Watching Now
                </button>
                <button className="movies-hero__icon-btn">
                  <img src="/icons/add.svg" alt="add" />
                </button>
                <button className="movies-hero__icon-btn">
                  <img src="/icons/like.svg" alt="like" />
                </button>
                <button className="movies-hero__icon-btn">
                  <img src="/icons/volume.svg" alt="volume" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-left">
          <div className="detail-card">
            <p className="detail-card__label">Description</p>
            <p className="detail-card__text">{movie.description}</p>
          </div>

          <div className="detail-card">
            <div className="detail-card__header">
              <span className="detail-card__title">Cast</span>
              <div className="detail-card__arrows">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => scrollCast(-1)}
                >
                  <img src="/icons/arrow-left.svg" alt="left" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => scrollCast(1)}
                >
                  <img src="/icons/arrow-right.svg" alt="right" />
                </Button>
              </div>
            </div>
            <div className="cast-scroll" ref={castRef}>
              {(movie.cast || []).map((member, i) => (
                <div className="cast-item" key={i}>
                  <img
                    className="cast-img"
                    src={member.img}
                    alt={member.name}
                  />
                  <p className="cast-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-card__header">
              <span className="detail-card__title">Reviews</span>
              <Button variant="secondary" size="md">
                + Add Your Review
              </Button>
            </div>
            <div className="reviews-grid">
              {visibleReviews.map((review, i) => (
                <div className="review-card" key={i}>
                  <div className="review-card__top">
                    <div className="review-content">
                      <h3 className="review-card__name">{review.name}</h3>
                      <p className="review-card__from">From {review.from}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="review-card__text">{review.text}</p>
                </div>
              ))}
            </div>
            {totalReviewPages > 1 && (
              <div className="pagination">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setReviewPage((p) => Math.max(0, p - 1))}
                >
                  <img src="/icons/arrow-left.svg" alt="left" />
                </Button>
                {Array.from({ length: totalReviewPages }).map((_, i) => (
                  <div
                    key={i}
                    className={`page-dot ${i === reviewPage ? "active" : ""}`}
                    onClick={() => setReviewPage(i)}
                  />
                ))}
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() =>
                    setReviewPage((p) => Math.min(totalReviewPages - 1, p + 1))
                  }
                >
                  <img src="/icons/arrow-right.svg" alt="right" />
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="detail-right">
          <div className="detail-card">
            <p className="detail-card__label">📅 Released Year</p>
            <p className="detail-year">{movie.year}</p>
          </div>

          <div className="detail-card">
            <p className="detail-card__label">🔤 Available Languages</p>
            <div className="tag-list">
              {(movie.languages || []).map((lang, i) => (
                <span className="tag" key={i}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <p className="detail-card__label">⭐ Ratings</p>
            <div className="ratings-row">
              <div className="rating-box">
                <p className="rating-platform">IMDb</p>
                <StarRating rating={movie.imdbRating} />
              </div>
              <div className="rating-box">
                <p className="rating-platform">Streamvibe</p>
                <StarRating rating={movie.streamvibeRating} />
              </div>
            </div>
          </div>

          <div className="detail-card">
            <p className="detail-card__label">
              <img src="" alt="" />
              Genres
            </p>
            <div className="tag-list">
              {(movie.genres || []).map((g, i) => (
                <span className="tag" key={i}>
                  {g}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <p className="detail-card__title">Director</p>
            <div className="person-card">
              <img
                className="person-img"
                src={movie.director.img}
                alt={movie.director.name}
              />
              <div>
                <p className="person-name">{movie.director.name}</p>
                <p className="person-from">From {movie.director.from}</p>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <p className="detail-card__title">Music</p>
            <div className="person-card">
              <img
                className="person-img"
                src={movie.music.img}
                alt={movie.music.name}
              />
              <div>
                <p className="person-name">{movie.music.name}</p>
                <p className="person-from">From {movie.music.from}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetail;
