import React from 'react'
import { HiDownload } from "react-icons/hi"

export const Hero = () => {
  return (
    <section className='bg-gradient-to-tr from-black to-gray-900 text-white'>
      <div className="container mx-auto max-w-4xl p-3 py-12 flex flex-col md:flex-row">
          <div className="basis-1/2">
          <h1 className='mb-4 text-center md:text-left'>
            <span className='block text-3xl text-center md:text-left'>Olá, sou o</span> 
            <span className='text-5xl font-semibold'>Luís </span>
            <span className='text-5xl font-light    text-blue-400'>Felipe</span>
          </h1>
        <h2 className='font-semibold flex items-center gap-2 text-center md:text-left'>
          <div className="h-1 w-12 rounded-full bg-blue-800"></div>
          Desenvolvedor React.js Front-End</h2>
          <p className='text-gray-400 my-4 text-center md:text-left'>
           Sou um desenvolvimento Front-End React.js que Transforma Ideias em Interfaces Cativantes. 
          </p>

          <div className='flex items-center md:justify-start justify-center gap-2'>
            <a href="#" className='underline font-bold text-white hover:text-gray-300'> Entre em Contato </a>
            <span className='italic text-gray-500'>ou</span>
            <a href="#" className='button text-gray-600 hover:text-gray-900 flex items-center gap-2'> <HiDownload /> Baixe meu CV </a>
          </div>
          </div>
          <div className="basis-1/2">
          </div>
      </div>
    </section>
  )
}
