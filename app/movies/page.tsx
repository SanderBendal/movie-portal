import { getPopularMovies, searchMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import styles from "./page.module.css";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const data = query ? await searchMovies(query) : await getPopularMovies();

  return (
    <>
      <h1>Movies</h1>

      <form action="/movies">
        <label htmlFor="search">Search by title</label>
        <input id="search" name="q" type="search" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      <p>
        {query
          ? `Showing ${data.results.length} of ${data.total_results} results for "${query}"`
          : "Showing 20 popular movies right now. Search to find any film."}
      </p>

      {data.results.length === 0 ? (
        <p>{`No movies found for "${query}". Try another title.`}</p>
      ) : (
        <ul className={styles.grid}>
          {data.results.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
