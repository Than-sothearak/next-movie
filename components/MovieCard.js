"use client";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef } from "react";

export default function MovieCard({ movies }) {
  const sliderRef = useRef(null); // Create a reference for the slider

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <GrPrevious
        onClick={slideLeft}
        size={60}
        className="cursor-pointer hover:scale-150 ease-in-out duration-300"
      />
      <div
        ref={sliderRef} // Assign ref to the slider
        id="slider" // Add an ID to target the scrollable div
        className="flex p-4 gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="inline-block hover:scale-105 ease-in-out duration-300 flex-none w-40 sm:w-48 md:w-56 lg:w-64 cursor-pointer"
          >
            <div className="bg-gray-800 rounded-lg shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1 truncate">
                  {movie.title}
                </h2>
                <p className="text-gray-400 text-sm">{movie.release_date}</p>
                <p className="text-yellow-400 text-sm">
                  {movie.vote_average}/10
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <GrNext
        onClick={slideRight}
        size={60}
        className="cursor-pointer hover:scale-150 ease-in-out duration-300"
      />
      <style jsx>{`
        /* Custom Scrollbar */
        #slider::-webkit-scrollbar {
          width: 8px;
          height: 10px;
        }

        #slider::-webkit-scrollbar-track {
          background: #333;
          border-radius: 10px;
        }

        #slider::-webkit-scrollbar-thumb {
          background-color: #555;
          border-radius: 10px;
          border: 2px solid #333;
        }

        #slider::-webkit-scrollbar-thumb:hover {
          background-color: #888;
        }

        #slider::-webkit-scrollbar-button {
          display: none;
        }
      `}</style>
    </div>
  );
}
