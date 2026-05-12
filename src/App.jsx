import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'


import { ToastContainer} from 'react-toastify';


import Gallery from './components/Gallery.jsx';
import Alccommunity from './components/Alccommunity.jsx';

import ServicesBanner from './components/ServicesBanner';
import ServicesSection from './components/ServicesSection';
import ServiceContact from './components/Contact.tsx';
import ServiceFooter from './components/Footer.tsx'
import SectionGallery from './components/SectionGallery.tsx';



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <ServicesBanner />
      <Gallery />
      <About />
      <ServicesSection />
      <SectionGallery />
      <ServiceContact />
      <ServiceFooter />
      <Alccommunity />
    </div>
  )
}

export default App
