import { getPopularMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function MoviesPage() {
  const data = await getPopularMovies();

  return (
    <>
      <h1>Movies</h1>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
}
