const SermonCardSkeleton = () => {
  return (
    <div className="grid grid-cols-3 flex-wrap gap-8 w-full">
      <div className="w-full space-y-4 transition-all hover:scale-[1.02]">
        <div className="skeleton w-full h-52"></div>
        <div className="flex flex-col gap-2 pb-4 px-4">
          <h6 className="skeleton w-full h-4"></h6>
          <div className="flex gap-2 items-center">
            <span className="skeleton w-6 h-6 rounded-full"></span>
            <span className="w-[80%] h-4 skeleton"></span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="skeleton w-5 h-5 rounded-full"></span>
            <span className="w-[70%] h-4 skeleton"></span>
          </div>
        </div>
      </div>
      <div className="w-full space-y-4 transition-all hover:scale-[1.02]">
        <div className="skeleton w-full h-52"></div>
        <div className="flex flex-col gap-2 pb-4 px-4">
          <h6 className="skeleton w-full h-4"></h6>
          <div className="flex gap-2 items-center">
            <span className="skeleton w-6 h-6 rounded-full"></span>
            <span className="w-[80%] h-4 skeleton"></span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="skeleton w-5 h-5 rounded-full"></span>
            <span className="w-[70%] h-4 skeleton"></span>
          </div>
        </div>
      </div>
      <div className="w-full space-y-4 transition-all hover:scale-[1.02]">
        <div className="skeleton w-full h-52"></div>
        <div className="flex flex-col gap-2 pb-4 px-4">
          <h6 className="skeleton w-full h-4"></h6>
          <div className="flex gap-2 items-center">
            <span className="skeleton w-6 h-6 rounded-full"></span>
            <span className="w-[80%] h-4 skeleton"></span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="skeleton w-5 h-5 rounded-full"></span>
            <span className="w-[70%] h-4 skeleton"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonCardSkeleton;
