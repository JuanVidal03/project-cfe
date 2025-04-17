import { useEffect } from "react";
import SermonCard from "./SermonCard";
import { MdArrowForwardIos } from "react-icons/md";
import { useGetYouTubeVideos } from "../../../../hooks/useFetchYouTubeVideos";
import SermonCardSkeleton from "./SermonCardSkeleton";
import { toast } from "react-toastify";

const Sermones = () => {
  const { isError, error, data: videos, isLoading } = useGetYouTubeVideos();

  useEffect(() => {
    if (isError) {
      toast.error("Hubo un error al obtener los videos.");
    }
    return () => {
      toast.clearWaitingQueue();
    };
  }, [isError, error]);

  return (
    <section id="sermones" className='p-16 w-full flex flex-col items-center'>
      <div className='text-center mb-12 flex flex-col gap-4 max-w-[1100px]'>
        <h3 className='text-center text-primary-dark font-title text-5xl font-extrabold'>Ultimos Sermones</h3>
        <p className='text-lg'>Explora las últimas predicaciones de nuestra iglesia, mensajes llenos de esperanza, fe y enseñanza bíblica para fortalecer tu vida espiritual. Aquí encontrarás sermones recientes que te guiarán en tu caminar con Dios y te inspirarán en cada momento.</p>
      </div>
      { error && <div>{error.message}</div> }
      { isLoading && <SermonCardSkeleton/> }
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
        <MdArrowForwardIos className='text-lg' />
      </a>
    </section>
  );
};

export default Sermones;
