import { useRef, useState, useEffect } from "react";
import { assets, serviceDataConstraction } from '../assets/assets'


interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Drywall Installation",
    description: "We deliver excellence with fine finishes and great durability.",
    image: assets.sunrisedrywall,
  },
  {
    title: "Finishing Drywall",
    description: "We create smooth surfaces with professional sanding skills.",
    image: assets.sunrisefinished,
  },
  {
    title: "Framing Metal",
    description: "We build solid foundations with very strong metal framing.",
    image: assets.sunriseframing,
  },
  {
    title: "Ceiling Grid",
    description: "Modern ceiling systems with precise and clean design.",
    image: assets.sunriseCeiling,
  },
  {
    title: "Millwork",
    description: "Fine architectural woodwork adding elegance to every room.", 
    image: assets.sunriseMillwork,
  },
  {
    title: "Service Stucco",
    description: "Superior exterior coatings for a durable and classy look.",  
    image: assets.sunrisestuco
  },
  
  {
    title: "Stone and Tile",
    description: "Expert tile and stone layouts for elegant kitchen floors.",  
    image: assets.sunrisetile,
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.clientWidth ?? 300;
    el.scrollBy({ left: dir === "right" ? cardWidth + 20 : -(cardWidth + 20), behavior: "smooth" });
  }

  return (
    <section
      id="Services"
      className="w-full py-14 md:py-20"
      style={{ backgroundColor: "#e8edf5" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="mb-8 md:mb-10">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: "#f97316" }}
          >
            What We Do
          </p>
          <div className="flex items-end justify-between gap-4">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl"
              style={{ color: "#1a3a6b" }}
            >
              Experts in Every Stage
              <br className="hidden sm:block" />
              of Your Project
            </h2>

            {/* Arrow buttons — desktop */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0 pb-1">
              <button
                onClick={() => scroll("left")}
                disabled={!canLeft}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: canLeft ? "#1a3a6b" : "#c5cfe0",
                  backgroundColor: canLeft ? "#1a3a6b" : "transparent",
                  color: canLeft ? "#fff" : "#c5cfe0",
                  cursor: canLeft ? "pointer" : "not-allowed",
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canRight}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: canRight ? "#1a3a6b" : "#c5cfe0",
                  backgroundColor: canRight ? "#1a3a6b" : "transparent",
                  color: canRight ? "#fff" : "#c5cfe0",
                  cursor: canRight ? "pointer" : "not-allowed",
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mt-6 h-px w-full"
            style={{ backgroundColor: "#c2cfe0" }}
          />
        </div>

        {/* ── Cards carousel ──────────────────────────────────────── */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col rounded-2xl overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
              style={{
                width: "clamp(240px, 28vw, 310px)",
                scrollSnapAlign: "start",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 24px rgba(26,58,107,0.10)",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "210px" }}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Navy overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: "#1a3a6b" }}
                />
                {/* Orange accent corner */}
                <div
                  className="absolute bottom-0 left-0 w-10 h-10"
                  style={{
                    background: "#f97316",
                    clipPath: "polygon(0 100%, 100% 100%, 0 0)",
                  }}
                />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3
                  className="font-bold text-base leading-snug"
                  style={{ color: "#1a3a6b" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 flex-1">
                  {s.description}
                </p>
                <a
                  href="#Contact"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 mt-1"
                  style={{ backgroundColor: "#1a3a6b", color: "#ffffff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f97316")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1a3a6b")
                  }
                >
                  Contact Us
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Arrow buttons — mobile ───────────────────────────────── */}
        <div className="flex sm:hidden items-center justify-end gap-2 mt-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 cursor-pointer"
            style={{
              borderColor: canLeft ? "#1a3a6b" : "#c5cfe0",
              backgroundColor: canLeft ? "#1a3a6b" : "transparent",
              color: canLeft ? "#fff" : "#c5cfe0",
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 cursor-pointer"
            style={{
              borderColor: canRight ? "#1a3a6b" : "#c5cfe0",
              backgroundColor: canRight ? "#1a3a6b" : "transparent",
              color: canRight ? "#fff" : "#c5cfe0",
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
