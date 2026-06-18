import { useState, useEffect } from "react";
import "../../assets/styles/MoviesRow.css";
import request from "../../api/Api";
import { MustWatchCard } from "./components/MustWatchCard";
import { TrendingCard } from "./components/TrendingCard";
import { RowControls } from "./components/RowControls";

const MovieRow = () => {
  const [trending, setTrending] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const [trendingData, newData, mustData] = await Promise.all([
        request("trending/movie/week?language=en-US"),
        request("movie/now_playing?language=en-US&page=1"),
        request("movie/top_rated?language=en-US&page=1"),
      ]);

      if (trendingData) setTrending(trendingData.results.slice(0, 5));
      if (newData) setNewReleases(newData.results.slice(0, 5));
      if (mustData) setMustWatch(mustData.results.slice(0, 5));
    };

    fetch();
  }, []);

  const normalize = (movie) => ({
    id: movie.id,
    img: `https://image.tmdb.org/t/p/w400${movie.poster_path}`,
    title: movie.title,
    duration: "2h 00min",
    rating: Math.round(movie.vote_average / 2),
    views: `${(movie.vote_count / 1000).toFixed(0)}K`,
  });

  return (
    <div className="movie-rows-wrapper">
      <div className="movie-row">
        <div className="movie-row__header">
          <h2 className="movie-row__title">Trending Now</h2>
          <RowControls />
        </div>
        <div className="movie-row__grid movie-row__grid--trending">
          {trending.map((m) => (
            <TrendingCard key={m.id} {...normalize(m)} />
          ))}
        </div>
      </div>

      <div className="movie-row">
        <div className="movie-row__header">
          <h2 className="movie-row__title">New Releases</h2>
          <RowControls />
        </div>
        <div className="movie-row__grid movie-row__grid--trending">
          {newReleases.map((m) => (
            <TrendingCard key={m.id} {...normalize(m)} />
          ))}
        </div>
      </div>

      <div className="movie-row">
        <div className="movie-row__header">
          <h2 className="movie-row__title">Must - Watch Movies</h2>
          <RowControls />
        </div>
        <div className="movie-row__grid movie-row__grid--mustwatch">
          {mustWatch.map((m) => (
            <MustWatchCard key={m.id} {...normalize(m)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
