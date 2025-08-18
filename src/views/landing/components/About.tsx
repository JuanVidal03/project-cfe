import aboutImg from "@assets/bienvenida-jovenes.jpeg";
import misionImg from "@assets/nosotros.jpg";
import visionImg from "@assets/imagen2.jpg";
import TranslateUp from "@/animations/TranslateUp";

const About = () => {
  return (
    <section id="nosotros">
      <div className="flex flex-col justify-center items-center">
        <div className="flex px-4 py-8 sm:p-16 justify-center items-center max-w-[1300px]">
          <TranslateUp>
            <p className="text-center text-lg">
              El amor infinito de Dios busca derramar bendiciones sobre
              nosotros, ¡incluso más de las que imaginamos! Anhela que
              disfrutemos de una vida plena y abundante, y la llave para
              alcanzarla se encuentra en una relación profunda y creciente con
              Él. La vida cristiana es un viaje de descubrimiento, donde nuestro
              propósito, sentido y destino se encuentran en la dependencia de
              Dios. No se trata de logros personales o esfuerzos humanos, sino
              de permitir que su <strong>espíritu santo</strong> obre en
              nuestras vidas.
            </p>
          </TranslateUp>
        </div>
      </div>

      <div className="sm:rounded-tl-[20rem] sm:h-screen overflow-hidden sm:flex">
        <figure className="w-full sm:w-[50%]">
          <img
            className="w-full rounded-tl-[10rem] sm:rounded-tl-none h-full object-cover"
            src={aboutImg}
            alt="imagen de nosotros"
          />
        </figure>
        <div className="sm:grid sm:grid-cols-2 w-full sm:w-[50%]">
          <div className="p-8 flex flex-col justify-center items-center sm:order-2 order-1">
            <h6 className="font-title font-extrabold text-primary-dark text-5xl">
              Misión
            </h6>
            <p className="text-center text-lg">
              Ser una iglesia que establezca el reino de Dios, a través de
              procesos que cambian vida integralmente para el cumplimiento de su
              propósito.
            </p>
          </div>
          <figure className="w-full h-full sm:order-1 order-2">
            <img
              className="h-full w-full object-cover"
              src={misionImg}
              alt="mision imagen"
            />
          </figure>
          <div className="p-8 flex flex-col justify-center items-center sm:order-3 order-4">
            <h6 className="font-title font-extrabold text-primary-dark text-5xl">
              Visión
            </h6>
            <p className="text-center text-lg">
              Hacer discípulos que establezcan el reino de Dios.
            </p>
          </div>
          <figure className="w-full h-full sm:order-4 order-3">
            <img
              className="h-full w-full object-cover"
              src={visionImg}
              alt="mision imagen"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
