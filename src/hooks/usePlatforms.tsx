import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { hoursToMilliseconds } from "../utils/hoursToMilliseconds";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>('/platforms/lists/parents')
const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: hoursToMilliseconds(24), // 24h,
    initialData : platforms
  });
};

export default usePlatforms;
