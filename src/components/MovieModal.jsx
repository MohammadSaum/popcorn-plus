import { useEffect, useState } from "react";
import { useWatchlist } from "../context/WatchListContext";

const MovieModal = ({ movie, onClose }) => {
    const [visible, setVisible] = useState(false);
    const [activeMovie, setActiveMovie] = useState(null);
    const [loading, setLoading] = useState(false)

    const { addToWatchlist, removeFromWatchlist, isInWatchlist } =
        useWatchlist();

    const inWatchlist = activeMovie && isInWatchlist(activeMovie.id);

    const handleWatchlistToggle = async () => {
        if(!activeMovie) return
        try {
            setLoading(true)

            if(inWatchlist){
                await removeFromWatchlist(activeMovie.id)
            } else {
                await addToWatchlist(activeMovie)
            }
        } catch (err) {
            console.warn(err.message)
        } finally {
            setLoading(false)
        }
    }

    /* ESC */
    useEffect(() => {
        if (!visible) return;

        const handleEsc = (e) => {
        if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [visible, onClose]);

    /* Scroll lock */
    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [visible]);

    /* Animation */
    useEffect(() => {
        if (movie) {
        setActiveMovie(movie);
        setVisible(true);
        } else {
        const timeout = setTimeout(() => {
            setVisible(false);
            setActiveMovie(null);
        }, 200);

        return () => clearTimeout(timeout);
        }
    }, [movie]);

    if (!activeMovie && !visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

        {/* Overlay */}
        <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={onClose}
        />

        {/* Modal */}
        <div
            className={`relative max-w-3xl w-full rounded-3xl overflow-hidden
            bg-linear-to-br from-app-bg via-[#0E1430] to-[#090D1A]
            shadow-[0_0_40px_rgba(0,0,0,0.6)]
            transition-all duration-300 ease-out
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-lg"
            >
            ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">

            {/* Poster */}
            <div className="w-full md:w-48 h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl bg-gray-800 shrink-0">
                <img
                src={activeMovie.poster}
                alt={activeMovie.title}
                className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col flex-1">

                <h2 className="text-3xl font-bold mb-2 tracking-tight">
                {activeMovie.title}
                </h2>

                <div className="flex items-center gap-3 text-xs text-app-muted mb-4">
                <span>{activeMovie.year || "2024"}</span>
                <span>•</span>
                <span>⭐ {activeMovie.rating || "8.5"}</span>
                </div>

                <p className="text-app-muted text-sm leading-relaxed mb-6 max-w-lg">
                {activeMovie.description ||
                    "An epic cinematic experience filled with drama, action and unforgettable moments."}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">

                {/* Play */}
                <button
                    className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl font-semibold
                    hover:bg-gray-200 active:scale-95 transition shadow-md"
                >
                    ▶ Play
                </button>

                {/* Watchlist */}
                <button
                    onClick={handleWatchlistToggle}
                    disanled = {loading}
                    className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 active:scale-95
                    ${
                        inWatchlist
                        ? "bg-green-600 hover:bg-green-500 text-white shadow-green-500/30 shadow-md"
                        : "border border-gray-500 hover:border-white hover:bg-white/10"
                    }`}
                >
                    {inWatchlist ? "✓ Added" : "+ Watchlist"}
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default MovieModal;
