import { fetchMovies } from "@/utils/fetchMovies";
import MovieCard from "../components/MovieCard";
import Nav from "@/components/Nav";
import { Hero } from "@/components/Hero";

export default async function Home() {
  const popularMovies = await fetchMovies("popular");
  const upcomingMovies = await fetchMovies("upcoming");
  const topRatedMovies = await fetchMovies("top_rated");
  const nowPlayingMovies = await fetchMovies("now_playing");

  return (
    <main className="relative min-h-screen ">
      <Nav />
      <section>
       <Hero movies={popularMovies}/>
      </section>
      <section className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mt-12 mb-8">Upcoming Movies</h1>
        <MovieCard movies={upcomingMovies} />

        <h1 className="text-4xl font-bold mt-12 mb-8">Top Rated Movies</h1>
        <MovieCard movies={topRatedMovies} />

        <h1 className="text-4xl font-bold mt-12 mb-8">Now Playing Movies</h1>
        <MovieCard movies={nowPlayingMovies} />
      </section>
    </main>
  );
}
