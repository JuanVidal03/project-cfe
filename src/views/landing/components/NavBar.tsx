import { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";

interface MenuItems {
  title: string;
  path: string;
}

const NavBar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState<boolean>(false);

  const handleActive = () => setIsmenuOpen(true);
  const handleInactive = () => setIsmenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const menuItems: MenuItems[] = [
    { title: "Inicio", path: "inicio" },
    { title: "Nosotros", path: "nosotros" },
    { title: "Sermones", path: "sermones" },
    { title: "Reuniones", path: "reuniones" },
    { title: "Contacto", path: "contacto" },
  ];

  return (
    <header className="transition-all absolute z-50 w-full py-4 flex justify-center items-center px-4 sm:px-16">
      <div className="flex justify-between sm:justify-start items-center gap-16 max-w-[1370px]">
        <figure className="w-[30%] sm:w-[6.5%]">
          <img
            src={logo}
            alt="Logo de la Iglesia panamerica centro de fe y esperanza"
          />
        </figure>
        {/* start burger menu */}
        <div className="relative sm:hidden">
          <button
            onClick={isMenuOpen ? handleInactive : handleActive}
            className="flex flex-col justify-center gap-2 w-16 h-16 p-3 bg-white rounded-full relative z-[70]"
          >
            <div
              className={`rounded-2xl h-1 w-1/2 bg-black duration-500 ${isMenuOpen && "rotate-[225deg] -translate-x-[12px] -translate-y-[1px]"} origin-right`}
            ></div>
            <div
              className={`rounded-2xl h-1 w-full bg-black duration-500 ${isMenuOpen && "-rotate-45"}`}
            ></div>
            <div
              className={`rounded-2xl h-1 w-1/2 bg-black duration-500 place-self-end ${isMenuOpen && "rotate-[225deg] translate-x-[12px] translate-y-[1px]"} origin-left`}
            ></div>
          </button>
          <div
            className={`fixed top-0 left-0 w-screen h-screen bg-primary-dark z-[60] ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-500`}
          >
            <ul className="p-6 w-full h-full space-y-4 text-white text-lg flex flex-col justify-center items-center">
              {menuItems?.map(menuItem => (
                <li
                  onClick={handleInactive}
                  className="overflow-hidden"
                  key={menuItem.title}
                >
                  <a
                    href={`#${menuItem.path}`}
                    className="text-white text-text relative transition-all after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:transition-all after:top-full after:left-[-100%] hover:after:left-0"
                  >
                    {menuItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* end burger menu */}
        <nav className="hidden sm:block sm:flex-none">
          <ul className="flex gap-8">
            {menuItems?.map(menuItem => (
              <li className="overflow-hidden" key={menuItem.title}>
                <a
                  href={`#${menuItem.path}`}
                  className="text-white text-text relative transition-all after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:transition-all after:top-full after:left-[-100%] hover:after:left-0"
                >
                  {menuItem.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
