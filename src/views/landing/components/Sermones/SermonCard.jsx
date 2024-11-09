/* eslint-disable react/prop-types */
import { IoCalendarSharp, IoPerson } from "react-icons/io5";
import { removeTransmitionText } from "../../../../utils/removeTransmitionText";
import { formatDate } from "../../../../utils/formatDate";

const SermonCard = ({ video }) => {
  return (
    <a href={`https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`} target="_blank" className="w-full space-y-4 transition-all hover:scale-[1.02]">
      <div className="w-full">
        <img src={video.snippet.thumbnails.maxres.url} alt={video.snippet.title}/>
        {/* <iframe
          key={video.id}
          title={video.snippet.title}
          className='w-full h-[300px]'
          src={`https://youtube.com/embed/${video.snippet.resourceId.videoId}`}
        ></iframe> */}
      </div>
      <div className="flex flex-col gap-2 pb-4 px-4">
        <h6 className="font-semibold text text-lg text-primary">{ removeTransmitionText(video.snippet.title)}</h6>
        <div className="flex gap-2 items-center">
          <IoCalendarSharp className="text-xl"/>
          <span>{formatDate(video.snippet.publishedAt)}</span>
        </div>
        <div className="flex gap-2 items-center">
          <IoPerson className="text-xl"/>
          <span>{video.snippet.videoOwnerChannelTitle}</span>
        </div>
      </div>
    </a>
  );
}

export default SermonCard;
