import { Game } from "../hooks/useGames";
import apiClient from "./api-client";

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

class GameService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get<FetchGamesResponse>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

export default new GameService("/games");
