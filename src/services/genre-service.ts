import { Genre } from "../hooks/useGenres";
import apiClient from "./api-client";

export interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

class GenreService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get<FetchGenreResponse>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default new GenreService("/genres");
