import { getPopularMovies, searchMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import SearchForm from "@/components/SearchForm";
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

      <SearchForm defaultValue={query} />

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
