import logo from "../../../assets/logo.png";

const NavBar = () => {

  const menuItems = [
    { title: "Inicio", path: "inicio" },
    { title: "Nosotros", path: "nosotros" },
    { title: "Sermones", path: "sermones" },
    { title: "Reuniones", path: "reuniones" },
    { title: "Contacto", path: "contacto" },
  ];

  return (
    <header className="transition-all absolute z-50 w-full py-4 flex justify-center items-center px-16">
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
