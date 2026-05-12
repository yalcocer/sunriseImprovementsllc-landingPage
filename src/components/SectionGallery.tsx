import { useState } from 'react';
import { assets } from '../assets/assets'

interface GalleryImage {
  url: string;
  alt: string;
  photographer: string;
}

interface GalleryProps {
  images?: GalleryImage[];
  title?: string;
  description?: string;
}

export default function Gallery({
  images = defaultImages,
  title = "Our Gallery",
  description = "Explore our collection of stunning modern interior designs"
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => prev !== null ? (prev - 1 + images.length) % images.length : null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => prev !== null ? (prev + 1) % images.length : null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;

    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    } else if (e.key === 'ArrowRight') {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  useState(() => {
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8" id="GallerySection">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: "#1a3a6b" }}>{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">Photo by {image.photographer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl leading-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-4xl px-4 leading-none"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="max-w-7xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded">
              <p className="text-sm">Photo by {images[selectedImage].photographer}</p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-4xl px-4 leading-none"
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

const defaultImages: GalleryImage[] = [
  {
    url: assets.sunriseCeiling,
    alt: "a living room filled with furniture and a large window",
    photographer: "Sunrise Improvements Llc"
  },
  {
    url: assets.sunriseGallery7,
    alt: "a living room with a couch, coffee table and television",
    photographer: "Sunrise Improvements Llc"
  },
  {
    url: assets.sunriseGallery4,
    alt: "a living room with a couch a table and a television",
    photographer: "Sunrise Improvements Llc"
  },
  {
    url: assets.bgSunrise,
    alt: "a black and white photo of a ceiling",
    photographer: "Sunrise Improvements Llc"
  },
  {
    url: assets.sunriseFinished2,
    alt: "a living room with a couch and a table",
    photographer: "Sunrise Improvements Llc"
  },
  {
    url: assets.sunriseMillwork2,
    alt: "a living room with a couch and a coffee table",
    photographer: "Sunrise Improvements Llc"
  }
];
