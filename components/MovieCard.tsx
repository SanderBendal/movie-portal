import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/types/movie";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "Unknown year";

  return (
    <Link href={`/movies/${movie.id}`} className={styles.card}>
      <article>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
            width={342}
            height={513}
          />
        ) : (
          <div className={styles.placeholder}>No poster available</div>
        )}
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.year}>{year}</p>
      </article>
    </Link>
  );
}