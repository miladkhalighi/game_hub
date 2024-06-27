import { useQuery } from "@tanstack/react-query";
import { hoursToMilliseconds } from "../utils/hoursToMilliseconds";
import APIClient from "../services/api-client";

interface ScreenShot {
  id: number;
  image: string;
  width: number;
  height: number;
}

// interface FetchScreenShotsRes {
//   count: number;
//   results: ScreenShot[];
// }

const useScreenShots = (gameId: number) => {
    const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`)
//   const apiClient = ApiClient.get<FetchScreenShotsRes>(
//     `/games/${gameId}/screenshots`
//   ).then(res => res.data.results);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime : hoursToMilliseconds(24) 
  });
};

export default useScreenShots;
