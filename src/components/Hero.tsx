import { HiDownload } from "react-icons/hi"

export const Hero = () => {
  return (
    <section className='rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]'>
      <div className="container mx-auto max-w-4xl p-3 py-12 flex flex-col md:flex-row">
          <div className="basis-1/2">
          <h1 className='mb-4 text-center md:text-left'>
            <span className='block text-3xl text-center md:text-left'>Olá, sou o</span> 
            <span className='text-5xl font-semibold'>Luís </span>
            <span className='text-5xl font-light    text-blue-400'>Felipe</span>
          </h1>
        <h2 className='font-semibold flex items-center gap-2 text-center md:text-left'>
          <div className="h-1 w-12 rounded-full bg-blue-800"></div>
          Desenvolvedor Full-stack .Net & React</h2>
          <p className='text-gray-400 my-4 text-center md:text-left'>
           Sou um desenvolvedor Full-stack .Net + React.js que Transforma Ideias em Realidade. 
          </p>

          <div className='flex items-center md:justify-start justify-center gap-2'>
            <a href="https://wa.me/5511985585267" className='underline font-bold text-white hover:text-gray-300' target="_blank"> Entre em Contato </a>
            <span className='italic text-gray-500'>ou</span>
            <a href="LuisFelipe.pdf" target="_blank" className='button text-gray-600 hover:text-gray-900 flex items-center gap-2'> <HiDownload /> Baixe meu CV </a>
          </div>
          </div>
          <div className="basis-1/2">
          </div>
      </div>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </section>
    
  )
}
