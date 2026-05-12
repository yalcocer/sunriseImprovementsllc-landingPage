import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "98", suffix: "%", label: "SATISFIED CLIENTS" },
  { value: "42", suffix: "+", label: "COMPLETED PROJECTS" },
  { value: "10", suffix: "+", label: "REAL EXPERIENCE" },
];

function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({
  stat,
  index,
  animate,
}: {
  stat: StatItem;
  index: number;
  animate: boolean;
}) {
  const numericTarget = parseInt(stat.value, 10);
  const count = useCountUp(numericTarget, 1400, animate);
  const lines = stat.label.split("\n");

  return (
    <div
      className="flex flex-col items-center text-center p-2 border-2 border-gray-500 border-dotted rounded-md 
      
      "
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div className="flex items-baseline justify-center">
        <span
          className="font-bold leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color:
              index === 0
              // ? "#1CC809" // dorado suave
              ? "#ffffff" // dorado suave
              : index === 1
                // ? "#F59E0B" // naranja cálido
                ? "#ffffff" // naranja cálido
                // : "#277DF5", // azul técnico
                : "#ffffff", // azul técnico
          }}
        >
          {count.toLocaleString()}
        </span>
        {stat.suffix && (
          <span
            className="font-bold leading-none"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color:
                index === 0
                  // ? "#8FFAB8"
                  ? "#ffffff"
                  : index === 1
                  // ? "#FAD48F"
                  ? "#ffffff"
                  // : "#8FBBFA"
                  : "#ffffff"
                ,
            }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      <div className="mt-1.5">
        {lines.map((line, i) => (
          <p
            key={i}
            className="leading-snug tracking-wide"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.15em",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-10 pt-8 border-t border-white/20 grid grid-cols-3 gap-2 sm:gap-10 w-full max-w-xl"
    >
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} animate={animate} />
      ))}
    </div>
  );
}
