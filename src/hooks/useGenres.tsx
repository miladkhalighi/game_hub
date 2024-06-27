import { useQuery } from "@tanstack/react-query";
import { hoursToMilliseconds } from "../utils/hoursToMilliseconds";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: hoursToMilliseconds(24), // 24h
    // initialData: genres,
  });
};

export default useGenres;
