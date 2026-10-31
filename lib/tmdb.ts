import type { Movie, MovieListResponse } from "@/types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(): Promise<MovieListResponse> {
  const res = await fetch(`${BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return res.json();
}

export async function getMovie(id: string): Promise<Movie | null> {
  const res = await fetch(`${BASE_URL}/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
}
