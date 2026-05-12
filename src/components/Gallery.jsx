import React from 'react';
import { assets } from '../assets/assets'

const ProjectsGallery = () => {
  const projects = [
    {
      id: 1,
      title: "CEILING GRID",
      category: "Total Remodeling",
      description: "Elevate your space with a refined ceiling grid system",
      image: assets.sunriseGallery1
    },
    {
      id: 2,
      title: "RENOVATION",
      category: "Renewal",
      description: "Design with premium finishes",
      image: assets.sunriseGallery7
    },
    {
      id: 3,
      title: "CEILING GRID INSTALLATION",
      category: "Interior Redesign",
      description: "Family space with smart lighting",
      image: assets.sunriseGallery4
    },
    {
      id: 4,
      title: "DRYWALL INSTALLATION",
      category: "Interior",
      description: "Interior renovation with sustainable materials",
      image: assets.sunriseGallery2
    },
    {
      id: 5,
      title: "RESIDENTIAL SPACES",
      category: "Renewal",
      description: "Interior renovation of offices with drywall panels",
      image: assets.sunriseGallery5
    },
    {
      id: 6,
      title: "Custom Metal Structure",
      category: "Personalized Spaces",
      description: "Customized office extension with metal framing",
      image: assets.sunriseGallery6
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8" id='Gallery'>
      {/* Título y descripción */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"  style={{ color: "#1a3a6b" }}>
          From Vision to Reality
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A selection of projects showcasing how we transform every space with superior quality and attention to detail.
        </p>
      </div>

      {/* Galería de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Imagen del proyecto */}
            <div className="relative h-64 md:h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay de categoría */}
              {/* <div className="absolute top-4 left-4">
                <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div> */}
            </div>

            {/* Información del proyecto */}
            <div className="bg-white p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500">
                {project.title}
              </h3>
              <hr className="border-gray-300 mb-3" />
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              {/* <button className="text-green-600 font-semibold text-sm hover:text-green-700 flex items-center gap-1 group/btn">
                Ver más detalles
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button> */}
            </div>

            {/* Efecto hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ProjectsGallery;