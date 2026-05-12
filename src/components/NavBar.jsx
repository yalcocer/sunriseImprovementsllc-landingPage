import React, {useEffect, useState} from 'react'
import {assets} from '../assets/assets'
import WhatsAppButton from './WhatsAppButton';
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";



const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
useEffect(() => {
  if(showMobileMenu) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = 'auto'; 
  }
  return () => {
    document.body.style.overflow = 'auto';
  }
  },[showMobileMenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10 bg-white'>
      <div className='container mx-auto flex items-center justify-between py-3 px-4 sm:px-8 md:px-12 lg:px-32 bg-transparent'>
        <img src={assets.logoSunrise} alt="" className='w-24 h-auto' />
      <ul className='hidden lg:flex lg:justify-center text-black font-semibold px-10 py-4 text-lg gap-2'>
        <li className='inline-block mx-4'>
            <a href='#Header' className='rounded-md px-2 py-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900'>Home</a>    
        </li>
        <li className='inline-block mx-4'>
            <a href='#About' className='rounded-md px-2 py-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900'>About</a>    
        </li>
        <li className='inline-block mx-4'>
            <a href='#Services' className='rounded-md px-2 py-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900'>Services</a>    
        </li>
        <li className='inline-block mx-4'>
            <a href='#Gallery' className='rounded-md px-2 py-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900'>Projects</a>    
        </li>
        <li className='inline-block mx-4'>
            <a href='#GallerySection' className='rounded-md px-2 py-4 cursor-pointer hover:bg-gray-100 hover:text-gray-900'>Gallery</a>    
        </li>
      </ul>
      
       <div className="flex items-center justify-center">
        <WhatsAppButton />
      </div>
      {/* <a className='hidden lg:block bg-gray-600 text-white px-8 py-2 rounded-md cursor-pointer' href="#Contact">
        Contact Us
     </a> */}
     {/* <img onClick={() => setShowMobileMenu(true)} src={assets.menu_iconBlack} alt="" className='lg:hidden w-7 cursor-pointer' /> */}
     <RiMenu3Line onClick={() => setShowMobileMenu(true)} className='lg:hidden w-7 h-7 cursor-pointer' />
     </div>
     {/* Mobile menu */}
     <div className={`lg:hidden ${showMobileMenu ? 'fixed inset-0 w-full h-full' : 'h-0 w-0'} top-0 right-0 bottom-0 left-0 overflow-hidden bg-gray-900 text-white transition-all duration-300 z-50`}> 
      <div className='flex justify-end p-4 sm:p-6 cursor-pointer'>
        {/* <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6 ' /> */}
        <IoClose onClick={() => setShowMobileMenu(false)} className='w-10 h-10' />
      </div>
      <ul className='flex flex-col items-center justify-center gap-4 mt-5 px-4 text-lg font-medium w-full'>
        <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-6 py-3 inline-block w-full text-center hover:bg-white/10 transition'>Home</a>
        <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-6 py-3  inline-block w-full text-center hover:bg-white/10 transition'>About</a>
        <a onClick={() => setShowMobileMenu(false)} href="#Services" className='px-6 py-3 inline-block w-full text-center hover:bg-white/10 transition'>Services</a>
        <a onClick={() => setShowMobileMenu(false)} href="#Gallery" className='px-6 py-3 inline-block w-full text-center hover:bg-white/10 transition'>Projects</a>
        <a onClick={() => setShowMobileMenu(false)} href='#GallerySection' className='px-6 py-3 inline-block w-full text-center hover:bg-white/10 transition'>Gallery</a>    
      </ul>
     </div>
    </div>
  )
}

export default NavBar
