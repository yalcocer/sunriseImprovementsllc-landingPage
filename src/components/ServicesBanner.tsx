import { FaHouseChimney } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { RiPaintFill } from "react-icons/ri";


const services = [
  {
    title: "Full Home Remodeling  ",
    description: "Complete transformation of residential spaces.",
    icon: (
      <FaHouseChimney className="w-full h-full" />
    ),
  },
  {
    title: "Commercial Renovation Services ",
    description: "Upgrades and improvements for businesses.",
    icon: (
      <FaTools className="w-full h-full" />
    ),
  },
  {
    title: "Custom Design & Finishes",
    description: "Professional finishes and personalized details.",
    icon: (
      <RiPaintFill className="w-full h-full" />
    ),
  },
];

export default function ServicesBanner() {
  return (
    /* -mt-10 pulls the banner up to overlap the Header section */
    <div className="relative z-20 mt-10 lg:-mt-10 px-4 sm:px-8 md:px-12 lg:px-20 pb-6">
      <div
        className="
          max-w-5xl mx-auto
          bg-white/95 backdrop-blur-sm
          rounded-2xl shadow-2xl
          divide-y sm:divide-y-0 sm:divide-x divide-gray-200
          flex flex-col sm:flex-row
          overflow-hidden
          
        "
      >
        {services.map((s, i) => (
          <div
            key={i}
            className="
              flex items-center gap-4
              px-6 py-5 sm:py-6
              flex-1
              group cursor-pointer
              hover:bg-gray-100
              transition-colors duration-200
            "
          >
            {/* Icon */}
            <div className="w-14 h-14 flex-shrink-0 drop-shadow-sm">
              {s.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-orange-500 transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-snug">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
