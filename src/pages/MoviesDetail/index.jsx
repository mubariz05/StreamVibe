import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../assets/styles/MoviesHero.css";
import "../../assets/styles/MoviesDetail.css";
import Button from "../../components/ui/Button";
import request from "../../api/Api";

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
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewPage, setReviewPage] = useState(0);
  const castRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const [movieData, creditsData, reviewsData] = await Promise.all([
        request(`movie/${id}?language=en-US`),
        request(`movie/${id}/credits?language=en-US`),
        request(`movie/${id}/reviews?language=en-US&page=1`),
      ]);
      if (movieData) setMovie(movieData);
      if (creditsData) setCredits(creditsData);
      if (reviewsData) setReviews(reviewsData.results || []);
    };
    fetchData();
  }, [id]);

  if (!movie) return <div className="not-found">Yüklənir...</div>;

  const imdbRating = (movie.vote_average / 2).toFixed(1);
  const totalReviewPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const visibleReviews = reviews.slice(
    reviewPage * REVIEWS_PER_PAGE,
    reviewPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE,
  );
  const cast = credits?.cast?.slice(0, 10) || [];
  const director = credits?.crew?.find((c) => c.job === "Director");

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
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="movies-hero__img"
            />
            <div className="movies-hero__overlay" />
            <div className="movies-hero__content">
              <h2 className="movies-hero__title">{movie.title}</h2>
              <p className="movies-hero__desc">
                {movie.runtime}min • {movie.vote_count} votes
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
            <p className="detail-card__text">{movie.overview}</p>
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
              {cast.map((member) => (
                <div className="cast-item" key={member.id}>
                  <img
                    className="cast-img"
                    src={
                      member.profile_path
                        ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                        : "/img/no-avatar.png"
                    }
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
              {visibleReviews.map((review) => (
                <div className="review-card" key={review.id}>
                  <div className="review-card__top">
                    <div className="review-content">
                      <h3 className="review-card__name">{review.author}</h3>
                      <p className="review-card__from">
                        {review.author_details?.rating
                          ? `Rating: ${review.author_details.rating}/10`
                          : ""}
                      </p>
                    </div>
                    {review.author_details?.rating && (
                      <StarRating rating={review.author_details.rating / 2} />
                    )}
                  </div>
                  <p className="review-card__text">
                    {review.content?.slice(0, 300)}...
                  </p>
                </div>
              ))}
              {reviews.length === 0 && (
                <p className="detail-card__text">Hələ review yoxdur.</p>
              )}
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
            <p className="detail-year">{movie.release_date?.slice(0, 4)}</p>
          </div>

          <div className="detail-card">
            <p className="detail-card__label">🔤 Available Languages</p>
            <div className="tag-list">
              {(movie.spoken_languages || []).map((lang, i) => (
                <span className="tag" key={i}>
                  {lang.english_name}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <p className="detail-card__label">⭐ Ratings</p>
            <div className="ratings-row">
              <div className="rating-box">
                <p className="rating-platform">IMDb</p>
                <StarRating rating={Number(imdbRating)} />
              </div>
              <div className="rating-box">
                <p className="rating-platform">Streamvibe</p>
                <StarRating rating={Number(imdbRating)} />
              </div>
            </div>
          </div>

          <div className="detail-card">
            <p className="detail-card__label">Genres</p>
            <div className="tag-list">
              {(movie.genres || []).map((g) => (
                <span className="tag" key={g.id}>
                  {g.name}
                </span>
              ))}
            </div>
          </div>

          {director && (
            <div className="detail-card">
              <p className="detail-card__title">Director</p>
              <div className="person-card">
                <img
                  className="person-img"
                  src={
                    director.profile_path
                      ? `https://image.tmdb.org/t/p/w185${director.profile_path}`
                      : "/img/no-avatar.png"
                  }
                  alt={director.name}
                />
                <div>
                  <p className="person-name">{director.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesDetail;
