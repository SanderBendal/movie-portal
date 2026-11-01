import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "Unknown year";

  return (
    <Link href={`/movies/${movie.id}`}>
      <article>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
            width={342}
            height={513}
          />
        ) : (
          <div>No poster available</div>
        )}
        <h2>{movie.title}</h2>
        <p>{year}</p>
      </article>
    </Link>
  );
}