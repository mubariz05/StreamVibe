import { useNavigate } from "react-router-dom";

export const TrendingCard = ({ id, img, title, duration, views }) => {
  const navigate = useNavigate();

  return (
    <div className="trending-card" onClick={() => navigate(`/movies/${id}`)}>
      <div className="trending-card__img-wrap">
        <img src={img} alt={title} />
      </div>
      <div className="trending-card__info">
        <span className="trending-card__duration">
          <img src="/icons/watch.svg" alt="duration" /> {duration}
        </span>
        <span className="trending-card__views">
          <img src="/icons/eye.svg" alt="views" /> {views}
        </span>
      </div>
    </div>
  );
};
