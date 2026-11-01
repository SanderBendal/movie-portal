import { notFound } from "next/navigation";
import { getMovie } from "@/lib/tmdb";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);

  if (!movie) {
    notFound();
  }

  const year = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "Unknown year";

  return (
    <article className={styles.detail}>
      <div className={styles.poster}>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
            width={500}
            height={750}
          />
        ) : (
          <div className={styles.placeholder}>No poster available</div>
        )}
      </div>

      <div className={styles.info}>
        <h1>
          {movie.title} <span className={styles.year}>({year})</span>
        </h1>
        <p className={styles.rating}>
          Rating: {movie.vote_average.toFixed(1)} / 10
        </p>
        <p>Released: {movie.release_date || "Unknown"}</p>

        <h2>Plot</h2>
        <p>{movie.overview || "No summary available."}</p>

        <Link href="/movies">Back to movies</Link>
      </div>
    </article>
  );
}
