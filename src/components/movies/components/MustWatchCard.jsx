import { useNavigate } from "react-router-dom";

export const MustWatchCard = ({ id, img, title, duration, rating, views }) => {
  const navigate = useNavigate();
  return (
    <div className="mustwatch-card" onClick={() => navigate(`/movies/${id}`)}>
      <div className="mustwatch-card__img-wrap">
        <img src={img} alt={title} />
      </div>
      <div className="mustwatch-card__info">
        <span className="mustwatch-card__duration">
          <img src="/icons/watch.svg" alt="duration" /> {duration}
        </span>
        <div className="mustwatch-card__right">
          <span className="mustwatch-card__rating">{"★".repeat(rating)}</span>
          <span className="mustwatch-card__views">{views}</span>
        </div>
      </div>
    </div>
  );
};
