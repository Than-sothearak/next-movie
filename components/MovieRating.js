import { FaStar, FaRegStar } from "react-icons/fa";

export const MovieRating = ({  MovieRate, rating, maxStars = 5 }) => {
    let stars = [];

    for (let i = 0; i < maxStars; i++) {
      stars.push(i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />);
    }
  
    return <div className="flex justify-center items-center gap-1 text-yellow-400">{stars} <p className="text-slate-100 pl-2">Rating {Math.floor(MovieRate)}/10</p></div>;
  ;
};