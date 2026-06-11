import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/MoviesHero.css";

const slides = [
  {
    img: "/img/movie-hero.png",
    title: "Avengers : Endgame",
    desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face… Avenge the fallen.",
  },
  {
    img: "/img/movie-hero2.png", // {data.img}
    title: "Avengers : Endgame", //  {data.title}
    desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face… Avenge the fallen.", // {data.desc}
  },
  {
    img: "/img/movie-hero3.png",
    title: "Avengers : Endgame", //  {data.title}
    desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face… Avenge the fallen.", // {data.desc}
  },
];

const MoviesHero = () => {
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
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="movies-hero__slide">
              <img
                src={slide.img}
                alt={slide.title}
                className="movies-hero__img"
              />
              <div className="movies-hero__overlay" />
              <div className="movies-hero__content">
                <h2 className="movies-hero__title">{slide.title}</h2>
                <p className="movies-hero__desc">{slide.desc}</p>
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
