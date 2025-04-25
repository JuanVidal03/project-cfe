import { HelmetProvider, Helmet } from "react-helmet-async";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Sermones from "./components/Sermones/Sermones";
import Reuniones from "./components/Reuniones/Index";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Iglesia Panamericana Centro de Fe y Esperanza Popayán</title>
        <meta name="description" content="Únete a la Iglesia Cristiana Panamericana Fe y Esperanza en Popayán. Ven y experimenta el amor de Dios, enseñanzas bíblicas y una comunidad que transforma vidas." />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="es" />
        <meta property="og:title" content="Iglesia Cristiana Fe y Esperanza - Popayán" />
        <meta property="og:description" content="Te invitamos a la Iglesia Cristiana Panamericana Fe y Esperanza en Popayán: un lugar de fe, esperanza y amor en comunidad. ¡Ven y forma parte de nuestra familia espiritual!" />
        <meta property="og:image" content="https://www.cfepopayan.org/assets/imagen1.jpg" />
        <meta property="og:url" content="https://wwww.cfepopayan.org" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <link rel="canonical" href="https://www.cfepopayan.org" />
      </Helmet>
      <div className="font-body">
        <NavBar/>
        <main className="overflow-x-hidden">
          <Hero/>
          <About/>
          <Sermones/>
          <Reuniones/>
          <Footer/>
        </main> 
      </div>
    </HelmetProvider>

  );
};

export default Index;
