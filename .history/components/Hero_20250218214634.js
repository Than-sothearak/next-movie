"use client";
import { categories } from "@/constants";
import { Button } from "./Button";
import { FaPlayCircle } from "react-icons/fa";
import { MovieRating } from "./MovieRating";
import { useEffect, useState, useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

export const Hero = ({ movies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(movies[currentMovieIndex]);
  const sliderRef = useRef(null); // Create a reference for the slider
  const [slideAmount, setSlideAmount] = useState(300); // Default slideAmount

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSlideAmount(window.innerWidth > 768 ? 1000 : 300);
    }
  }, []);
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= slideAmount;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += slideAmount;
    }
  };
  const handleMovieClick = (index) => {
    setSelectedMovie(movies[index]);
    setCurrentMovieIndex(index); // Optionally keep the current movie index synced
  };

  return (
    <section
      className="w-full 2xl:h-screen p-10 m-auto max-2xl:px-2 flex flex-col justify-center gap-10 relative bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      <div className="2xl:absolute top-6 max-sm:top-0 px-10 2xl:w-3/4 flex flex-col justify-start items-start w-full pt-28 gap-5 text-white z-10">
        <div className="flex flex-col gap-5 max-w-5xl text-shadow-lg">
          <h1 className="text-8xl max-lg:text-[48px] max-sm:leading-[42px] font-bold">
            {selectedMovie.original_title}
          </h1>
          <p className="w-full text-lg max-sm:text-base max-sm:leading-[1.6]">
            {selectedMovie.overview}
          </p>
        </div>

        <div className="flex gap-4 flex-wrap mt-4">
          {categories.map((item) => (
            <p
              key={item.label}
              className="py-2 px-4 bg-slate-100 text-black rounded-full text-sm"
            >
              {item.label}
            </p>
          ))}
        </div>

        <MovieRating
          rating={Math.round(parseFloat(selectedMovie.vote_average)) / 2}
          MovieRate={selectedMovie.vote_average}
        />
        <Button label="Play Now" Icon={FaPlayCircle} className="px-4 py-2 text-sm sm:text-base md:text-lg" />

      </div>

{/* 
      Cardmovie */}


      <div className="lg:mx-8 max-sm:w-38 flex 2xl:absolute bottom-0 left-0 right-0 justify-center items-center gap-4 z-20">
        <GrPrevious
          onClick={slideLeft}
          size={60}
          className="text-slate-50 cursor-pointer hover:scale-150 ease-in-out duration-300"
        />
        <div
          id="slider"
          ref={sliderRef}
          className="flex p-4 gap-4 overflow-x-auto whitespace-nowrap"
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(index)}
              className={`inline-block hover:scale-105 ease-in-out duration-300 flex-none 
              w-full sm:w-40 md:w-48 lg:w-56 cursor-pointer border-2 rounded-xl transition-all ${
                currentMovieIndex === index
                  ? "scale-105 border-4 shadow-lg inset-shadow-indigo-500"
                  : "hover:scale-105 border-2 border-transparent"
              }`}
            >
              <div className="bg-gray-800 rounded-lg shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-white text-xl font-semibold mb-1 truncate">
                    {movie.title}
                  </h2>
                  <p className="text-gray-400 text-sm">{movie.release_date}</p>
                  <p className="text-yellow-400 text-sm">
                    Rating {movie.vote_average}/10
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <GrNext
          onClick={slideRight}
          size={60}
          className="text-slate-50 cursor-pointer hover:scale-150 ease-in-out duration-300"
        />
      </div>
    </section>
  );
};
