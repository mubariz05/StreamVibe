import "../../assets/styles/MoviesRow.css";
import { mustWatchMovies, trendingMovies } from "../../utils/MoviesData";
import { MustWatchCard } from "./components/MustWatchCard";
import { TrendingCard } from "./components/TrendingCard";
import { RowControls } from "./components/RowControls";

const MovieRow = () => {
  return (
    <div className="movie-rows-wrapper">
      <div className="movie-row">
        <div className="movie-row__header">
          <h2 className="movie-row__title">Trending Now</h2>
          <RowControls />
        </div>
        <div className="movie-row__grid movie-row__grid--trending">
          {trendingMovies.map((m, i) => (
            <TrendingCard key={i} {...m} />
          ))}
        </div>
        <div className="row-controls__dots-only">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="movie-row">
        <div className="movie-row__header">
          <h2 className="movie-row__title">New Releases</h2>
          <RowControls />
        </div>
        <div className="movie-row__grid movie-row__grid--trending">
          {trendingMovies.map((m, i) => (
            <TrendingCard key={i} {...m} />
          ))}
        </div>
      </div>

      <div className="movie-row">
        <div className="movie-row__header">
          <h2 className="movie-row__title">Must - Watch Movies</h2>
          <RowControls />
        </div>
        <div className="movie-row__grid movie-row__grid--mustwatch">
          {mustWatchMovies.map((m, i) => (
            <MustWatchCard key={i} {...m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
