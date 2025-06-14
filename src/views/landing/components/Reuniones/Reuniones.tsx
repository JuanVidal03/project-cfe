import { useState } from "react";
import Button from "../Button";

interface Reuniones {
  id: number;
  title: string;
  text: string;
  buttonText: string;
}

const Reuniones = () => {
  const reuniones: Reuniones[] = [
    {
      id: 1,
      title: "Cultos dominicales",
      text: "En la Iglesia Panamericana Fe y Esperanza nos congregamos con la finalidad de adorar a Dios, y ser edificados por su palabra;  además es una forma de fortalecer nuestras relaciones con otros creyentes. La comunidad cristiana es una fuente de apoyo y ánimo en momentos de dificultad",
      buttonText: "Ver ubicacion",
    },
    {
      id: 2,
      title: "Jovenes",
      text: "Cada sábado, los jóvenes tienen una cita a las 6:30 p.m. En un ambiente ameno, son edificados para vivir de manera diferente en un mundo absorbente. Los preadolescentes (12 a 15 años) también tienen un espacio pensado para ellos: sábados a las 4:00 p.m.",
      buttonText: "Ver ubicacion",
    },
    {
      id: 3,
      title: "Oración",
      text: "En Fe y Esperanza creemos en el poder de la oración. Llevamos nuestras peticiones al trono de la gracia; allí recibiremos su misericordia y encontraremos la gracia que nos ayudará cuando más la necesitemos.",
      buttonText: "Dejanos tu petición",
    },
    {
      id: 4,
      title: "Casas de paz",
      text: "Son espacios en casas donde se establecen vínculos saludables con la Iglesia a partir de la fe en el Señor Jesús y su palabra, constituyéndose así como discípulos suyos.",
      buttonText: "Quiero ser parte",
    },
  ];

  const [isActive, setIsActive] = useState<number>(1);

  return (
    <div
      className={`
        grid overflow-hidden duration-700 transition-all bg-center bg-cover grid-cols-4 h-[90vh] w-full
        ${
          isActive === 1
            ? "bg-cultoDominical"
            : isActive === 2
              ? "bg-jovenes"
              : isActive === 3
                ? "bg-oracion"
                : "bg-discipulado"
        }
        relative after:absolute after:bg-gradient after:w-full after:h-full
      `}
    >
      {reuniones.map(reunion => (
        <div
          onMouseEnter={() => setIsActive(reunion.id)}
          key={reunion.id}
          className="h-full border-r-[0.01rem] border-white p-8 flex items-end z-40 group"
        >
          <div className="space-y-4">
            <h5 className="text-4xl duration-700 transition-all font-title font-extrabold text-white">
              {reunion.title}
            </h5>
            <div className="space-y-2 overflow-hidden transition-all duration-700 max-h-0 opacity-0 group-hover:max-h-72 group-hover:opacity-100">
              <p className="text-white mb-3">{reunion.text}</p>
              <Button
                text={reunion.buttonText}
                color="text-white"
                bg="bg-transparent"
                hoverColor="hover:text-black"
                bgHover="hover:bg-white"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reuniones;
