import { notFound } from "next/navigation";
import { getMovie } from "@/lib/tmdb";

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

  return (
    <article>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Released: {movie.release_date}</p>
      <p>Rating: {movie.vote_average.toFixed(1)}</p>
    </article>
  );
}