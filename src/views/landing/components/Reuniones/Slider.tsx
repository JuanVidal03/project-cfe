import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { reuniones } from "./Reuniones";
// images
import image1 from "@assets/imagen1.jpg";

const ReunionesSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // count reuniones section
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col w-full items-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-[75%]"
      >
        <CarouselContent className="flex gap-2.5">
          {reuniones?.map(reunion => (
            <CarouselItem
              className="w-full border border-gray-300 p-4 rounded-2xl bg-cover text-white"
              style={{ backgroundImage: `url(${image1})` }}
              key={reunion.id}
            >
              <h6 className="font-semibold text-lg mb-2">{reunion.title}</h6>
              <p>{reunion.text}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        {current} de {count}
      </div>
    </div>
  );
};

export default ReunionesSlider;
