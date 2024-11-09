import Button from "./Button";

const Hero = () => {
  return (
    <section id="inicio" className="w-screen bg-[url('./assets/imagen1.jpg')] bg-cover bg-center p-16 h-screen flex justify-center items-end relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[#00000070]">
      <div className="w-full max-w-[1400px] relative z-20">
        <h1 className="text-8xl font-title font-bold leading-[5rem] uppercase text-white">En la tierra como<br />en el cielo</h1>
        <p className="w-full text-text max-w-[900px] mt-2 text-white">&quot;Por tanto, no tengan miedo, pues yo soy su Dios y estoy con ustedes. Mi mano victoriosa les dará fuerza y ayuda; mi mano victoriosa siempre les dará su apoyo.&quot; - Isaías 41:10</p>
        <div className="flex gap-4 mt-8">
          <Button text="Reuniones en linea" color="text-white" bg="bg-transparent" hoverColor="hover:text-black" bgHover="hover:bg-white"/>
          <Button text="Sermones" color="text-dark" bg="bg-white" hoverColor="hover:text-white" bgHover="hover:bg-transparent"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
