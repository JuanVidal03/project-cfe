import { useEffect, useState } from 'react';
import SermonCard from './SermonCard';
import { MdArrowForwardIos } from "react-icons/md";

const Sermones = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    const channelId = import.meta.env.VITE_YOUTUBE_CHANEL;
    const youTubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

    const fetchData = async() => {
      try {
        const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${youTubeApiKey}`);
        const channelData = await channelResponse.json();

        const videosUploaded = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        const videosResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${videosUploaded}&maxResults=6&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
        const videosDate = await videosResponse.json();
        console.log(videosDate.items[0]);
        setVideos(videosDate.items);

      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
    
  }, []);


  return (
    <div className='p-16 w-full flex flex-col items-center'>
      <div className='text-center mb-12 flex flex-col gap-4 max-w-[1100px]'>
        <h3 className='text-center text-primary-dark font-title text-5xl font-extrabold'>Ultimos Sermones</h3>
        <p className='text-lg'>Explora las últimas predicaciones de nuestra iglesia, mensajes llenos de esperanza, fe y enseñanza bíblica para fortalecer tu vida espiritual. Aquí encontrarás sermones recientes que te guiarán en tu caminar con Dios y te inspirarán en cada momento.</p>
      </div>
      <div className='grid grid-cols-3 flex-wrap gap-8 w-full'>
        {
          videos?.map(video => (
            <SermonCard
              key={video.id}
              video={video}
            />
          ))
        }
      </div>
      <a
        href="https://www.youtube.com/c/CentrodeFeyEsperanzaPopay%C3%A1n"
        target='_blank'
        className='mt-12 flex items-center gap-2 text-primary'
      >
        <span className='text-lg font-bold'>Ver todos los sermones</span>
        <MdArrowForwardIos className='text-lg'/>
      </a>
    </div>
  );
}

export default Sermones;
