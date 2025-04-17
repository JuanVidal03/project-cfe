import { useQuery } from "@tanstack/react-query";
import { fetchYouTubeVideos } from "../services/youtubeVideos";

export const useGetYouTubeVideos = () => {
  return useQuery({
    queryKey: ["getYouTubeVideos"],
    queryFn: fetchYouTubeVideos,
  });
};
