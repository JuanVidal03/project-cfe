import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Button from "../Button";
import { reuniones } from "./Reuniones";

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
              className="w-full border border-gray-300 p-5 rounded-2xl flex flex-col justify-evenly bg-linear-to-br/hsl from-primary-dark to-blue-800"
              key={reunion.id}
            >
              <div>
                <h6 className="font-semibold text-lg mb-2 text-white">
                  {reunion.title}
                </h6>
                <p className="mb-4 text-white">{reunion.text}</p>
              </div>
              <Button
                text={reunion.buttonText}
                bg="bg-white"
                bgHover=""
                hoverColor="transparent"
                color="text-primary-dark"
              />
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
