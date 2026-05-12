import React, {useEffect, useState} from 'react'
import { assets, serviceDataConstraction } from '../assets/assets'

const Projects = () => {
    const  [currentIndex, setCurrentIndex] = useState(0);
    const [cardToShow, setCardToShow] = useState(1);

    useEffect(() => {
        const updateCardToShow = () => {
            if(window.innerWidth >= 1024) {
                // setCardToShow(serviceDataConstraction.length);
                setCardToShow(3);// Muestra 3 en pantallas grandes
            } else if(window.innerWidth >= 768) {
                setCardToShow(2); // Muestra 2 en tablets
            } else {
                setCardToShow(1); // Muestra 1 en móviles
            }
        };
            updateCardToShow();
            window.addEventListener('resize', updateCardToShow);
            return () => window.removeEventListener('resize', updateCardToShow);
        
    }, []);    
const nextProject = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= serviceDataConstraction.length - cardToShow) {
                return 0; // Vuelve al inicio si llega al final
            }
            return prevIndex + 1;
        });
    }
    
    const prevProject = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return serviceDataConstraction.length - cardToShow; // Va al final
            }
            return prevIndex - 1;
        });
    }

    // Asegúrate de que currentIndex no sea mayor de lo permitido
    useEffect(() => {
        if (serviceDataConstraction.length > 0 && cardToShow > 0) {
            const maxIndex = Math.max(0, serviceDataConstraction.length - cardToShow);
            if (currentIndex > maxIndex) {
                setCurrentIndex(maxIndex);
            }
        }
    }
    , []);
    // , [cardToShow, serviceDataConstraction.length, currentIndex]);
    // const nextProject = () => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceDataConstraction.length)
    // }
    // const prevProject = () => {
    //         setCurrentIndex((prevIndex) => prevIndex === 0 ? serviceDataConstraction.length - 1 : prevIndex -1) 
    // } 

  return (
    <div className='container mx-auto w-full py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 overflow-hidden bg-[#1a3a6b]' id='Services'>
        <div className='flex flex-col lg:flex-row justify-between container'>
            <h1 className='text-4xl text-[#e8edf5] text-center sm:text-5xl lg:text-7xl font-bold mb-2 '>
                Experts in Every Stage of Your Project{""} 
            </h1>
        </div>
        {/* Divider */}
        <hr className='w-full h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-blue-950' />

    
    {/* Porjects slider container */}
    <div className='overflow-hiddenp-2'>
        <div className='flex p-4 gap-4 md:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out '
        style={{ 
            transform: `translateX(-${(currentIndex * 100) / cardToShow }%)`,
            // width: `${(serviceDataConstraction.length / cardToShow)*100}%`
            }}>
            {serviceDataConstraction.map((project, index) =>(
                <div key={index} className='flex-shrink-0 w-full sm:w-1/4 text-center'  style={{ width: `${95 / cardToShow}%` }} >
                    <img src={project.image} alt={project.title} className='w-full h-auto rounded-tl-2xl rounded-tr-2xl' />
                    <div className=' w-full flex justify-center text-left'>
                        <div className='inline-block bg-white  w-full px-4 pb-8 pt-6 shadow-md rounded-bl-2xl rounded-br-2xl'>
                            <h2 className='text-xl font-semibold text-[#1a3a6b]'>{project.title}</h2>
                            <p className='pt-3 pb-6'>{project.description}</p>
                            <a href="#Contact" className='py-3 bg-[#1a3a6b] text-white px-8 rounded cursor-pointer hover:bg-white hover:text-black hover:border ' aria-label='Next Projects'>Contact Us</a>
                             {/* <button onClick="window.location.href='#Contact'" className='py-3 bg-red-900 text-white px-8 rounded cursor-pointer hover:bg-white hover:text-black hover:border ' aria-label='Next Projects'>
                                Contact Us</button> */}
                        </div>
                    </div>
                </div>
                ))}
        </div>
    </div>
    {/* slider buttons */}
    <div className='flex justify-end mb-8'>
        <button onClick={prevProject} className='p-3 bg-orange-500 rounded mr-2 cursor-pointer' aria-label='Previous Projects'>
            <img src={assets.arrow_back} alt="Previous" className='w-5 h-5' />
        </button>
        <button onClick={nextProject} className='p-3 bg-orange-500 rounded mr-2 cursor-pointer' aria-label='Next Projects'>
            <img src={assets.arrow_forward} alt="Next" className='w-5 h-5' />
        </button>
    </div>
    </div>
  )
}

export default Projects
