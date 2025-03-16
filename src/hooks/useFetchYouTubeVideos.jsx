import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchYouTubeVideos } from "../services/youtubeVideos";

export const useGetYouTubeVideos = () => {
  return useQuery({
    queryKey: ["getYouTubeVideos"],
    queryFn: fetchYouTubeVideos,
  });
};

export const useFetchYouTubeVideos = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const getData = async () => {
      setLoading(true);

      try {
        const result = await fetchYouTubeVideos();
        setLoading(false);
        setData(result);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getData();

  }, []);

  return { data, loading, error };

};
