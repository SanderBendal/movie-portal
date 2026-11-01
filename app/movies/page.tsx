import { getPopularMovies } from "@/lib/tmdb";
import Link from "next/link";
import link from "next/link";

export default async function MoviesPage() {
  const data = await getPopularMovies();

  return (
    <>
      <h1>Movies</h1>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
