export async function fetchMovies(category) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    console.error("API key is missing! Please check your .env file.");
    return [];
  }

  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
