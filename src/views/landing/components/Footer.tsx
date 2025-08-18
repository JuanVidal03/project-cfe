import logo from "@assets/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-dark p-4 sm:px-16 sm:pt-16">
      <div className="sm:grid sm:grid-cols-4 gap-12 pb-11">
        <div className="flex flex-col gap-4">
          <div className="flex items-center text-center sm:text-start gap-4">
            <figure className="w-[30%] sm:w-[60%]">
              <img src={logo} alt="logo de la iglesia" />
            </figure>
            <h5 className="text-white font-title text-3xl uppercase leading-7">
              Iglesia fe y<br /> esperanza Popayán
            </h5>
          </div>
          <p className="text-white text-center sm:text-start">
            Sé parte de una familia donde el amor de Dios transforma vidas. En
            nuestra iglesia encontrarás un lugar para crecer, servir y cumplir
            tu propósito. ¡Te esperamos con los brazos abiertos!
          </p>
          <div className="flex justify-center sm:justify-start gap-3">
            <a
              href="https://facebook.com/cfe.popayan"
              target="_blank"
              className="border border-white p-3 rounded-full transition-all hover:bg-white group"
              rel="noreferrer"
            >
              <FaFacebookF className="text-white text-lg transition-all group-hover:text-primary" />
            </a>
            <a
              href="https://instagram.com/iglesia_centrodefeyesperanza"
              target="_blank"
              className="border border-white p-3 rounded-full transition-all hover:bg-white group"
              rel="noreferrer"
            >
              <FaInstagram className="text-white text-lg transition-all group-hover:text-primary" />
            </a>
            <a
              href="https://wa.me/573113158506"
              target="_blank"
              className="border border-white p-3 rounded-full transition-all hover:bg-white group"
              rel="noreferrer"
            >
              <FaWhatsapp className="text-white text-lg transition-all group-hover:text-primary" />
            </a>
          </div>
        </div>

        <div className="text-white border-t sm:border-t-0 mt-4 sm:mt-0 pt-4 sm:pt-0">
          <h5 className="font-title text-3xl mb-4">Contáctanos</h5>
          <div className="flex flex-col gap-1">
            <a href="#">+57 (311) 315 8506</a>
            <a href="#">info@cfepopayan.org</a>
          </div>
        </div>

        <div className="col-span-2">
          <h5 className="font-title text-3xl mb-4 text-white">Dirección</h5>
          <iframe
            className="w-full h-60"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.13749424677457!2d-76.61161366666128!3d2.440354556115929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30031a3c71f5ef%3A0xd869cbc13e5f5e63!2sIglesia%20Cristiana%20Centro%20de%20Fe%20y%20Esperanza!5e0!3m2!1ses!2sco!4v1730571192452!5m2!1ses!2sco"
          ></iframe>
        </div>
      </div>

      <div className="text-gray-500 border-t w-full py-4 text-center">
        <span>
          Created by {""}
          <a
            className="font-bold text-gray-400"
            href="https://www.linkedin.com/in/juan-manuel-vidal-1ab885216"
            target="_blank"
            rel="noreferrer"
          >
            Juan Vidal
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
