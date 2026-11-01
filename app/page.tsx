import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { getPopularMovies } from "@/lib/tmdb";
import styles from "./page.module.css";

export default async function Home() { 
  const data = await getPopularMovies();
  const featured = data.results.slice(0, 5);

  return (
    <>
    <section className={styles.hero}>
      <h1>Movie Portal</h1>
      
      <p>
        Can’t decide what to watch tonight? Browse the films everyone is
        talking about right now, or search for any movie by its title.
      </p>
      <p>
        Every movie has its own page with the poster, release year, rating
        and a short summary of the plot, so you can quickly decide whether
        it’s worth your evening.
      </p>
      
      <Link href="/movies" className={styles.button}>
        Browse all popular movies
      </Link>
    </section>

    <section className={styles.popular}>
      <h2>Featured Movies</h2>
      <ul className={styles.grid}>
        {featured.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
    </>
  );
}