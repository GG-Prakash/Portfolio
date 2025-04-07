// Preloader.jsx
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (loaded) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-[160px] h-[160px]">
        <GentleGG />
      </div>
      <Clouds />
    </div>
  );
}

function GentleGG() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#cce6ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Full Circle Background */}
      <circle cx="100" cy="100" r="100" fill="#0f172a" />
      <circle cx="100" cy="100" r="100" fill="url(#glow)" />

      {/* GG gentle fade-in */}
      <text
        x="100"
        y="115"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="95"
        fill="#ffffff"
        fontFamily="'Poppins', sans-serif"
        fontWeight="600"
        className="gg-fade"
      >
        GG
      </text>

      {/* Enhanced Border Loader Animation with Variations */}
      {[...Array(3)].map((_, i) => (
        <circle
          key={i}
          cx="100"
          cy="100"
          r={92 + i * 2}
          fill="none"
          stroke="#38bdf8"
          strokeWidth={1.8 + i * 0.8}
          strokeDasharray={`${100 + i * 40}, ${50 + i * 20}`}
          strokeDashoffset="0"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to={`${i % 2 === 0 ? '' : '-'}360 100 100`}
            dur={`${2 + i}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Particle Background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 200}
          cy={Math.random() * 200}
          r={Math.random() * 1.2 + 0.5}
          fill="#94a3b8"
          opacity="0.05"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -3; 0 0"
            dur={`${2 + Math.random() * 2}s`}
            repeatCount="indefinite"
            additive="sum"
          />
        </circle>
      ))}

      <style jsx>{`
        .gg-fade {
          opacity: 0;
          animation: fadeIn 0.2s ease-out 0.5s forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </svg>
  );
}

function Clouds() {
  return (
    <div className="absolute bottom-0 w-full h-40 overflow-hidden">
      <div className="absolute w-[200%] h-full animate-clouds z-[-1]">
        <div className="absolute left-0 top-0 w-full h-full bg-repeat-x bg-[url('/clouds.svg')] opacity-30" />
      </div>
      <style jsx>{`
        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 60s linear infinite;
        }
      `}</style>
    </div>
  );
}