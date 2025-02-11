import { fetchMovies } from '@/utils/fetchMovies';
import MovieCard from '../components/MovieCard';

export default async function Home() {
  
  const popularMovies = await fetchMovies('popular');
  const upcomingMovies = await fetchMovies('upcoming');
  const topRatedMovies = await fetchMovies('top_rated');
  const nowPlayingMovies = await fetchMovies('now_playing');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Popular Movies</h1>
      <MovieCard movies={popularMovies} />

      <h1 className="text-4xl font-bold mt-12 mb-8">Upcoming Movies</h1>
      <MovieCard movies={upcomingMovies} />

      <h1 className="text-4xl font-bold mt-12 mb-8">Top Rated Movies</h1>
      <MovieCard movies={topRatedMovies} />

      <h1 className="text-4xl font-bold mt-12 mb-8">Now Playing Movies</h1>
      <MovieCard movies={nowPlayingMovies} />
    </div>
  );
}