import { useEffect, useState } from "react";
import { Play, Info } from "lucide-react";

const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  14: "Fantasy",
  27: "Horror",
  878: "Sci-Fi",
  53: "Thriller",
  10749: "Romance",
};

const Hero = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!movie) return;

    setIsLoaded(false);
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [movie]);

  // Skeleton loader while movie is loading
  if (!movie) {
    return (
      <div className="h-[85vh] w-full bg-[#040714] animate-pulse" />
    );
  }

  const year = movie.releaseDate?.split("-")[0] || "";
  const rating = movie.rating ? movie.rating.toFixed(1) : "";
  const genres =
    movie.genreIds
      ?.slice(0, 3)
      .map((id) => GENRE_MAP[id])
      .filter(Boolean) || [];

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all ease-out
        ${
          isLoaded
            ? "scale-105 opacity-100 duration-[15000ms]"
            : "scale-100 opacity-0 duration-700"
        }`}
        style={{
          backgroundImage: `url(${movie.backdrop})`,
        }}
      />

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040714] via-[#040714]/60 to-transparent w-[85%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-[20%] left-0 w-full px-6 md:px-12 z-10">
        <div
          className={`max-w-3xl transition-all duration-1000 ease-out transform
          ${
            isLoaded
              ? "translate-y-0 opacity-100 delay-300"
              : "translate-y-12 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-tight">
            {movie.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-300 mb-4 flex-wrap">
            {rating && (
              <span className="flex items-center gap-1">
                ⭐ {rating}
              </span>
            )}

            {year && <span>{year}</span>}

            {genres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-white/10 rounded-full text-xs backdrop-blur-sm"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="text-gray-200 text-lg md:text-xl mb-8 line-clamp-3 font-medium leading-relaxed drop-shadow-md">
            {movie.overview}
          </p>

          <div className="flex gap-4">
            {/* Play Button */}
            <button className="flex items-center justify-center gap-2 bg-white text-black px-6 md:px-8 py-3 md:py-3.5 rounded-md font-bold text-lg hover:bg-white/80 transition-colors duration-300">
              <Play className="fill-black" size={24} />
              Play
            </button>

            {/* More Info Button */}
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