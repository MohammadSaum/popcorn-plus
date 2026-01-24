    import { useEffect, useState } from "react";
    import { useWatchlist } from "../context/WatchListContext";

    const MovieModal = ({ movie, onClose }) => {
    const [visible, setVisible] = useState(false);
    const [activeMovie, setActiveMovie] = useState(null);
    const {addToWatchlist, removeFromWatchlist, isInWatchlist} = useWatchlist()
    const inWatchlist = activeMovie && isInWatchlist(activeMovie.id)

    /* ---------------- ESC KEY ---------------- */
    useEffect(() => {
        if (!visible) return;

        const handleEsc = (e) => {
        if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [visible, onClose]);

    /* ---------------- SCROLL LOCK ---------------- */
    useEffect(() => {
        if (visible) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "auto";
        }

        return () => {
        document.body.style.overflow = "auto";
        };
    }, [visible]);

    /* ---------------- VISIBILITY + DATA SNAPSHOT ---------------- */
    useEffect(() => {
        if (movie) {
        setActiveMovie(movie);     // keep data for exit animation
        setVisible(true);
        } else {
        const timeout = setTimeout(() => {
            setVisible(false);
            setActiveMovie(null);
        }, 200);

        return () => clearTimeout(timeout);
        }
    }, [movie]);

    /* ---------------- UNMOUNT SAFETY ---------------- */
    if (!activeMovie && !visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* ---------- OVERLAY ---------- */}
        <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm
            transition-opacity duration-200
            ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={onClose}
        />

        {/* ---------- MODAL ---------- */}
        <div
            className={`relative text-white rounded-2xl max-w-2xl w-full mx-4 p-6 z-10
            shadow-2xl
            bg-linear-to-br from-[#0B1022] via-[#0E1430] to-[#090D1A]
            transition-all duration-200 ease-out
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
            {/* Close button */}
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
            ✕
            </button>

            <div className="flex gap-6">
            {/* Poster */}
            <div className="w-38 h-57 shrink-0 rounded-xl overflow-hidden shadow-lg bg-gray-800">
                <img
                src={activeMovie.poster}
                alt={activeMovie.title}
                className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-1">
                {activeMovie.title}
                </h2>

                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span>{activeMovie.year}</span>
                <span>•</span>
                <span>⭐ {activeMovie.rating}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {activeMovie.description || "No description available."}
                </p>

                {/* Actions */}
                <div className="flex gap-4 mt-auto pt-4">
                <button className="bg-white text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-200 active:scale-95 transition cursor-pointer">
                    ▶ Play
                </button>

                <button 
                    onClick={() => inWatchlist ? removeFromWatchlist(activeMovie.id) : addToWatchlist(activeMovie)}
                    className="border border-gray-500 px-6 py-2.5 rounded-lg text-white hover:border-white hover:bg-white/10 active:scale-95 transition cursor-pointer">
                    {inWatchlist ? "✓ In Watchlist" : "+ Watchlist"}
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MovieModal;
