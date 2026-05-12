import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-20 w-full overflow-hidden' id='About'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-12 xl:gap-20 w-full'>
        {/* Imagen - Mejorada para responsividad */}
        <div className='w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center self-center'>
          <img 
            src={assets.sunriseAbout} 
            alt="Carpintero especializado" 
            className='w-full max-w-md md:max-w-lg lg:max-w-none rounded-lg shadow-lg object-cover'
          />
        </div>
        
        {/* Contenido - Mejorado para responsividad */}
        <div className='flex flex-col w-full lg:w-1/2 mt-4 lg:mt-0 items-center lg:items-start gap-4 lg:gap-6'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left font-bold'>
            Sunrise Improvements, Your Commercial Interior Experts
          </h1>
          
          <p className='text-gray-600 text-sm sm:text-base md:text-lg text-center lg:text-left mb-4 lg:mb-8'>
            Our specialized crews provide seamless installation for Drywall, Ceiling Grid, Millwork, and all specialized interior finishes.
          </p>
          
          {/* Lista de características - Mejorada para responsividad */}
          <div className='w-full'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 lg:mb-8'>
              <li className='flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors duration-200'>
                <img src={assets.check} alt="Check" className='w-5 h-5 bg-green-600 rounded-full p-1' />
                <span className='font-semibold text-sm sm:text-base'>Drywall & Framing</span>
              </li>
              <li className='flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors duration-200'>
                <img src={assets.check} alt="Check" className='w-5 h-5 bg-green-600 rounded-full p-1' />
                <span className='font-semibold text-sm sm:text-base'>Wood & Metal Stud</span>
              </li>
              <li className='flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors duration-200'>
                <img src={assets.check} alt="Check" className='w-5 h-5 bg-green-600 rounded-full p-1' />
                <span className='font-semibold text-sm sm:text-base'>Ceiling Grid & Interior Systems</span>
              </li>
              <li className='flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors duration-200'>
                <img src={assets.check} alt="Check" className='w-5 h-5 bg-green-600 rounded-full p-1' />
                <span className='font-semibold text-sm sm:text-base'>Acoustical & Specialty Tiles</span>
              </li>
              <li className='flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors duration-200 sm:col-span-2 lg:col-span-1'>
                <img src={assets.check} alt="Check" className='w-5 h-5 bg-green-600 rounded-full p-1' />
                <span className='font-semibold text-sm sm:text-base'>Specialized Stucco & Millwork</span>
              </li>
              <li className='flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors duration-200 sm:col-span-2 lg:col-span-1'>
                <img src={assets.check} alt="Check" className='w-5 h-5 bg-green-600 rounded-full p-1' />
                <span className='font-semibold text-sm sm:text-base'>Millwork Installation</span>
              </li>
            </ul>
          </div>
          
          {/* Botones - Mejorados para responsividad */}
          <div className='flex flex-col sm:flex-row gap-4 w-full mt-2 lg:mt-6'>
            <a 
              href="#Contact" 
              className='bg-green-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-white font-medium text-center hover:bg-amber-300 hover:text-gray-800 transition-colors duration-200 text-sm sm:text-base'
            >
              Get Started Now
            </a>
            <a 
              href="#Services" 
              className='border border-gray-300 px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-gray-800 font-medium text-center hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors duration-200 text-sm sm:text-base'
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About