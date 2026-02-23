import { useEffect, useState } from "react";
import { Play, Info } from "lucide-react";

const Hero = ({ movie }) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    // Reset animation state when movie changes
    setLoaded(false);
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, [movie]);

  // Optional: Add a sleek skeleton loader if the movie hasn't fetched yet
  if (!movie) {
    return <div className="h-[85vh] w-full bg-[#040714] animate-pulse" />;
  }

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      
      {/* Background Image with Slow Ken Burns Zoom */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all ease-out
          ${isLoaded ? "scale-105 opacity-100 duration-[15000ms]" : "scale-100 opacity-0 duration-700"}`}
        style={{
          backgroundImage: `url(${movie.backdrop})`,
        }}
      />

      {/* Netflix-Style Gradients 
        1. Left-to-right to keep text readable.
        2. Bottom-to-top to blend perfectly into the movie rows below.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040714] via-[#040714]/60 to-transparent w-[85%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/30 to-transparent" />

      {/* Content Container */}
      <div className="absolute bottom-[20%] left-0 w-full px-6 md:px-12 z-10">
        
        {/* Slide-up and Fade-in Animation for Text */}
        <div 
          className={`max-w-3xl transition-all duration-1000 ease-out transform
            ${isLoaded ? "translate-y-0 opacity-100 delay-300" : "translate-y-12 opacity-0"}`}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-tight line-clamp">
            {movie.title}
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-8 line-clamp-3 font-medium leading-relaxed drop-shadow-md">
            {movie.overview}
          </p>

          <div className="flex gap-4">
            {/* Play Button - Solid White, standard Netflix style */}
            <button className="flex items-center justify-center gap-2 bg-white text-black px-6 md:px-8 py-3 md:py-3.5 rounded-md font-bold text-lg hover:bg-white/80 transition-colors duration-300">
              <Play className="fill-black" size={24} />
              Play
            </button>

            {/* More Info Button - Translucent Glassmorphism style */}
            <button className="flex items-center justify-center gap-2 bg-gray-500/40 hover:bg-gray-500/60 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-md font-bold text-lg backdrop-blur-sm transition-colors duration-300">
              <Info size={24} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;