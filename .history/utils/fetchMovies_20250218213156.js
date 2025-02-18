export async function fetchMovies(category) {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`;
  
    const res = await fetch(url);
    const data = await res.json();
  
    return data.results;
  }
  