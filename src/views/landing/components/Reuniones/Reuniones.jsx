import { useState } from "react";
import Button from "../Button";

const Reuniones = () => {

  const reuniones = [
    {
      id: 1,
      img: "",
      title: "Cultos dominicales",
      text: "lorem aasdkljahsldkjaslkdaskldasklhdklasdklaskldk sakjdhakljsgd ",
      buttonText: "Ver ubicacion",
      path: "/aka",
    },
    {
      id: 2,
      img: "",
      title: "Jovenes",
      text: "lorem aasdkljahsldkjaslkdaskldasklhdklasdklaskldk sakjdhakljsgd ",
      buttonText: "Ver ubicacion",
      path: "/aka",
    },
    {
      id: 3,
      img: "",
      title: "Oracion",
      text: "lorem aasdkljahsldkjaslkdaskldasklhdklasdklaskldk sakjdhakljsgd ",
      buttonText: "Ver ubicacion",
      path: "/aka",
    },
    {
      id: 4,
      img: "",
      title: "Discipulados",
      text: "lorem aasdkljahsldkjaslkdaskldasklhdklasdklaskldk sakjdhakljsgd ",
      buttonText: "Ver ubicacion",
      path: "/aka",
    },
  ];

  const [isActive, setIsActive] = useState(1);

  return (
    <div
      className={`
        grid overflow-hidden duration-700 transition-all bg-center bg-cover grid-cols-4 h-[90vh] w-full
        ${isActive === 1 ? "bg-cultoDominical" : isActive === 2 ? "bg-jovenes" : isActive === 3 ? "bg-oracion" : "bg-discipulado" }
        relative after:absolute after:bg-gradient after:w-full after:h-full
      `}>
      {
        reuniones.map(reunion => (
          <div
            onMouseEnter={ () => setIsActive(reunion.id) }
            key={reunion.id}
            className="h-full border-r border-white p-8 flex items-end relative z-40 group"
          >
            <div className="space-y-4">
              <h5 className="text-4xl duration-700 transition-all absolute group-hover:bottom-48 bottom-10 font-title font-extrabold text-white">{ reunion.title }</h5>
              <div className="space-y-2 absolute group-hover:bottom-10 bottom-[-20%] group-hover:transition-all transition-all duration-700 group-hover:duration-700 opacity-0 group-hover:opacity-100">
                <p className="text-white">{reunion.text}</p>
                <Button text="Reuniones en linea" color="text-white" bg="bg-transparent" hoverColor="hover:text-black" bgHover="hover:bg-white"/>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Reuniones;
