import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genreService from "../services/genre-service";

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genreService.getAll();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return { genres, error, isLoading };
};

export default useGenre;
