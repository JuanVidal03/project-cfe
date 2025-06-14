import Reuniones from "./Reuniones";
import TranslateUp from "@/animations/TranslateUp";

const Index = () => {
  return (
    <div
      id="reuniones"
      className="bg-[#f2f2f2] w-full flex flex-col items-center"
    >
      <div className="px-4 py-12 sm:p-16">
        <div className="text-center flex flex-col gap-4 max-w-[1300px]">
          <TranslateUp>
            <h3 className="text-center text-primary-dark font-title text-5xl font-extrabold">
              Nuestras Reuniones
            </h3>
            <p className="mt-4 text-lg">
              En la Iglesia Panamericana Fe y Esperanza nos congregamos con la
              finalidad de adorar a Dios y ser edificados por su palabra.
              Además, es una forma de fortalecer nuestras relaciones con otros
              creyentes. La comunidad cristiana es una fuente de apoyo y ánimo
              en momentos de dificultad.{" "}
              <span className="italic font-semibold">
                En fin, vivan en armonía los unos con los otros; compartan penas
                y alegrías, practiquen el amor fraternal, sean compasivos y
                humildes. 1 Pedro 3:8
              </span>
            </p>
          </TranslateUp>
        </div>
      </div>
      <div className="w-full">
        <Reuniones />
      </div>
    </div>
  );
};

export default Index;
