import { useRef, useEffect } from "react";
import logo from "../../../assets/logo.png";

const NavBar = () => {

  const menuItems = [
    { title: "Inicio", path: "inicio" },
    { title: "Nosotros", path: "nosotros" },
    { title: "Sermones", path: "sermones" },
    { title: "Reuniones", path: "reuniones" },
    { title: "Contacto", path: "contacto" },
  ];

  const header = useRef(null);
  // manage the bg color on scroll
  useEffect(() => {

    const handleScroll = () => {
      if (header.current) {
        if (window.scrollY > 5) {
          header.current.classList.add("backdrop-blur-2xl");
          header.current.classList.add("bg-gradient");
        } else {
          header.current.classList.remove("backdrop-blur-2xl");
          header.current.classList.remove("bg-gradient");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

  }, []);

  return (
    <header ref={header} className="transition-all fixed z-50 w-full py-4 flex justify-center items-center px-16">
      <div className="flex items-center gap-16 max-w-[1370px]">
        <figure className="w-[6.5%]">
          <img src={logo} alt="Logo de la Iglesia panamerica centro de fe y esperanza"/>
        </figure>
        <nav className="flex-none">
          <ul className="flex gap-8">
            {
              menuItems?.map(menuItem => (
                <li className="overflow-hidden" key={menuItem.title}>
                  <a
                    href={`#${menuItem.path}`}
                    className="text-white text-text relative transition-all after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:transition-all after:top-full after:left-[-100%] hover:after:left-0"
                  >
                      {menuItem.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
