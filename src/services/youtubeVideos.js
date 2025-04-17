import axios from "axios";

export const fetchYouTubeVideos = async () => {
  const channelId = import.meta.env.VITE_YOUTUBE_CHANEL;
  const youTubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  try {
    const channelData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${youTubeApiKey}`);
    const videosUploaded = channelData.data.items[0].contentDetails.relatedPlaylists.uploads;
    
    const videos = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${videosUploaded}&maxResults=6&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);

    if (videos.status !== 200) {
      throw new Error(`Error ${videos.status}`);
    }

    return videos.data.items;
  } catch (error) {
    throw new Error(error);
  }
};
