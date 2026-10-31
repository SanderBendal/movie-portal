import type { MovieListResponse } from "@/types/movie";

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
