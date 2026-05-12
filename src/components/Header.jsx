import React from 'react'
import NavBar from './NavBar'
import { assets } from '../assets/assets'
import StatsSection from "./StatsSection";

const Header = () => {
  return (
    <div 
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.25) 45%, #000000 90%), url('/header_img.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="header"
    >
      <NavBar />

      <div className="container mx-auto px-6 md:px-20 lg:px-32 text-white flex flex-col lg:flex-row items-center gap-12 mt-10 py-30">

        {/* TEXT SECTION */}
        <div className="text-left">
         <h2 className="
            font-semibold 
            leading-tight
            text-4xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            mb-6
          ">
            Precise Construction, Perfect Finishes, <span className="text-amber-400">Results That Impress.</span> 
           {/* Perfect <span className="text-amber-400">Drywall </span> 
           Precise <span>Framing </span>
           Premium <span >Finishes</span> */}
          </h2>


          <p className="text-base md:text-lg opacity-90 max-w-xl">
            Passionate and committed to providing a personalized and high-quality service in each of our projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8">
            <a
              href="#Contact"
              className="bg-blue-900 hover:bg-gray-200 hover:text-blue-950 text-white font-semibold px-8 py-3 rounded transition-colors duration-200 shadow-lg text-center"
            >
              Get Start Now
            </a>
            <a
              href="#Services"
              className="border border-white px-8 py-3 rounded text-center"
            >
              View All Services
            </a>
          </div>
            <StatsSection />
          
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center items-center w-full relative ">
          <img
            src={assets.houseSunrise}
            alt="Framing"
            className="
              w-full
              h-auto
              object-contain
              rounded-3xl
              mask-radial-[100%_80%] mask-radial-from-35% mask-radial-at-left
            "
          />
          {/* Flotando encima de la imagen */}
          
           <video class="max-w-[15rem] mx-auto rounded-lg absolute top-[3rem] right-[-1rem] md:right-[-2rem] border-2 border-solid border-amber-500" controls muted autoPlay loop>
              <source
                  src={assets.trabajosSunrise}
                  type="video/mp4"
              />
              Your browser does not support the video tag.
          </video>

        </div>


      </div>
    </div>
  )
}

export default Header
