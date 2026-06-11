import MoviesHero from "../../components/movies/MoviesHero";
import Card from "../../components/ui/Card";
import MoviesRow from "../../components/movies/MoviesRow";
const Movies = () => {
  return (
    <div>
      <MoviesHero />
      <Card />
      <Card />
      <MoviesRow />
      <Card />
      <Card />
      <MoviesRow />
    </div>
  );
};

export default Movies;
