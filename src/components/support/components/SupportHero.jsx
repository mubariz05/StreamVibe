import { useEffect, useState } from "react";
import { PosterCollage } from "./PosterCollage";
import request from "../../../api/Api";

export const SupportHero = () => {
  const [posterImages, setPosterImages] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      const data = await request("movie/popular?language=en-US&page=1");
      if (!data) return;
      const images = data.results
        .slice(0, 16)
        .map((m) => `https://image.tmdb.org/t/p/w300${m.poster_path}`);
      setPosterImages(images);
    };
    fetchPosters();
  }, []);

  return (
    <div className="support-left">
      <div className="support-left__overlay" />
      <PosterCollage posterImages={posterImages} />
      <div className="support-left__content">
        <h1 className="support-left__title">
          Welcome to our
          <br />
          support page!
        </h1>
        <p className="support-left__desc">
          We're here to help you with any problems you may be having with our
          product.
        </p>
      </div>
    </div>
  );
};
