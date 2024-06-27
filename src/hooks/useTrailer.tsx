
import { useQuery } from "@tanstack/react-query";
import { hoursToMilliseconds } from "../utils/hoursToMilliseconds";
import APIClient from "../services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { '480': string; max: string };
}

// interface FetchTrailerRes {
//   count: number;
//   results: Trailer[];
// }

const useTrailer = (gameId?: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
//    const apiReq = ApiClient.get<FetchTrailerRes>(`/games/${gameId}/movies`)  
   return useQuery({
    queryKey : ['trailer', gameId],
    queryFn : apiClient.getAll,
    staleTime : hoursToMilliseconds(24) 
   }) 
};

export default useTrailer;
