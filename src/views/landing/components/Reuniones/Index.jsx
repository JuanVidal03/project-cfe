import Reuniones from "./Reuniones";

const Index = () => {
  return (
    <div id="reuniones" className='bg-[#f2f2f2] w-full flex flex-col items-center'>
      <div className="p-16">
        <div className='text-center flex flex-col gap-4 max-w-[1100px]'>
          <h3 className='text-center text-primary-dark font-title text-5xl font-extrabold'>Nuestras Reuniones</h3>
          <p className='text-lg'>Vive la plenitud de la presencia de Dios en nuestros cultos dominicales, momentos de adoración, palabra transformadora y comunión que renuevan el espíritu y fortalecen la fe. Además, disfruta nuestras reuniones de jóvenes, un espacio lleno de propósito y energía. ¡Ven y sé parte de esta experiencia que transforma vidas!</p>
        </div>
      </div>
      <div className="w-full">
        <Reuniones/>
      </div>
    </div>
  );
};

export default Index;
