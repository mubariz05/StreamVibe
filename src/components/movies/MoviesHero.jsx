import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/MoviesHero.css";
import request from "../../api/Api";

const MoviesHero = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await request("movie/popular?language=en-US&page=1");
      if (data) {
        setSlides(data.results.slice(0, 5));
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="movies-hero">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="movies-hero__swiper"
      >
        {slides.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movies-hero__slide">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="movies-hero__img"
              />
              <div className="movies-hero__overlay" />
              <div className="movies-hero__content">
                <h2 className="movies-hero__title">{movie.title}</h2>
                <p className="movies-hero__desc">{movie.overview}</p>
                <div className="movies-hero__actions">
                  <button className="hero__btn">
                    <span className="hero__btn-icon">
                      <img src="/icons/play.svg" alt="media" />
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesHero;
