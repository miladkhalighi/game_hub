import { useParams } from "react-router-dom";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { useQuery } from "@tanstack/react-query";
import { hoursToMilliseconds } from "../utils/hoursToMilliseconds";
import APIClient from "../services/api-client";

export interface Details {
  id: number;
  name: string;
  description_raw: string;
  description: string;
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
}

interface Publisher {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGameDetails = () => {
  const { slug } = useParams();
  const apiClient = new APIClient<Details>(`/games`)
//   const apiReq = ApiClient.get<Details>(`/games/${slug}`).then(
//     (res) => res.data
//   );

  return useQuery({
    queryKey: ["gameDetails", slug],
    queryFn: () => apiClient.get(slug!),
    staleTime : hoursToMilliseconds(24) 
  });
};

export default useGameDetails;
