import axios from "axios";
import type { Movie } from "../types/movie";

const token = import.meta.env.VITE_TMDB_TOKEN as string;

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

export default async function fetchMovies(
  query: string,
  page: number,
): Promise<FetchMoviesResponse> {
  const response = await axios.get<FetchMoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}
