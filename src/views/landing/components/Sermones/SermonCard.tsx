import { IoCalendarSharp, IoPerson } from "react-icons/io5";
import { removeTransmitionText } from "@/utils/removeTransmitionText";
import { formatDate } from "@/utils/formatDate";
import TranslateUp from "@/animations/TranslateUp";

export interface Video {
  id: string;
  snippet: {
    publishedAt: Date;
    title: string;
    videoOwnerChannelTitle: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      maxres: {
        url: string;
      };
    };
  };
}

const SermonCard = ({ video }: { video: Video }) => {
  return (
    <a
      href={`https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
      target="_blank"
      className="w-full space-y-4 transition-all hover:scale-[1.02]"
      rel="noreferrer"
    >
      <TranslateUp>
        <div className="w-full">
          <img
            src={video.snippet.thumbnails.maxres?.url}
            alt={video.snippet.title}
          />
        </div>
        <div className="flex flex-col gap-2 pb-4 px-4">
          <h6 className="font-semibold text text-lg text-primary">
            {removeTransmitionText(video.snippet.title)}
          </h6>
          <div className="flex gap-2 items-center">
            <IoCalendarSharp className="text-xl" />
            <span>{formatDate(video.snippet.publishedAt)}</span>
          </div>
          <div className="flex gap-2 items-center">
            <IoPerson className="text-xl" />
            <span>{video.snippet.videoOwnerChannelTitle}</span>
          </div>
        </div>
      </TranslateUp>
    </a>
  );
};

export default SermonCard;
