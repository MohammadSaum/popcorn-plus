import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieRow = ({ title, movies = [], onMovieClick }) => {
  const rowRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const scroll = (direction) => {
    const { current } = rowRef;
    if (!current) return;

    // Scroll by about 75% of the screen width for a better user experience
    const scrollAmount = direction === "left" ? -(current.clientWidth * 0.75) : (current.clientWidth * 0.75);
    
    current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (rowRef.current) {
      // Hide left arrow only if we are at the absolute start (0 pixels scrolled)
      setIsScrolled(rowRef.current.scrollLeft > 0);
    }
  };

  return (
    <div className="mt-8 mb-10 relative px-6 md:px-12 group/row">
      {/* Row Title */}
      <h2 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide drop-shadow-md pl-1">
        {title}
      </h2>

      <div className="relative">
        {/* Left Scroll Button */}
        <div 
            className={`absolute top-0 bottom-0 left-0 z-20 flex items-center justify-start pl-2 w-16 bg-gradient-to-r from-[#040714]/80 via-[#040714]/40 to-transparent cursor-pointer transition-all duration-300 ${isScrolled ? 'opacity-0 group-hover/row:opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => scroll("left")}
        >
          <ChevronLeft size={36} className="text-white hover:scale-125 transition-transform duration-200 drop-shadow-lg" />
        </div>

        {/* Right Scroll Button */}
        <div 
            className="absolute top-0 bottom-0 right-0 z-20 flex items-center justify-end pr-2 w-16 bg-gradient-to-l from-[#040714]/80 via-[#040714]/40 to-transparent cursor-pointer opacity-0 group-hover/row:opacity-100 transition-all duration-300"
            onClick={() => scroll("right")}
        >
          <ChevronRight size={36} className="text-white hover:scale-125 transition-transform duration-200 drop-shadow-lg" />
        </div>

        {/* Movie List Container */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          // Tightened gaps slightly (gap-3 md:gap-4)
          className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth pb-8 pt-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id || index}
              // REDUCED SIZES: Smaller widths across breakpoints
              className="relative flex-none w-[120px] md:w-[160px] lg:w-[190px] cursor-pointer group/card"
              onClick={() => onMovieClick(movie)}
            >
              {/* Poster Card: Thinner Border (border-2), tighter scale on hover (scale-[1.03]) */}
              <div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-gray-800 transition-all duration-300 ease-out border-2 border-transparent group-hover/card:border-white/70 group-hover/card:scale-[1.03] group-hover/card:-translate-y-1 group-hover/card:shadow-[0_10px_25px_-5px_rgba(0,99,229,0.4)] group-hover/card:z-10">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  loading="lazy"
                  // Slower internal zoom for a more subtle effect
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
              </div>

              {/* Title - Slightly smaller text */}
              <p className="text-xs md:text-sm font-medium text-center mt-2 text-gray-400 group-hover/card:text-white line-clamp-1 transition-colors duration-300">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;