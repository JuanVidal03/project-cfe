import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const Index = () => {

  document.title = "Iglesia Panamericana Centro de Fe y Esperanza Popayán";

  return (
    <div className="font-body">
      <NavBar/>
      <main className="overflow-x-hidden">
        <Hero/>
        <About/>
        <Footer/>
      </main> 
    </div>
  );
}

export default Index;
