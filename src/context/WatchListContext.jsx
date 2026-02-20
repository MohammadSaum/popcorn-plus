import { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../utils/api";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState(() => {
        const stored = localStorage.getItem("watchlist");
        return stored ? JSON.parse(stored) : [];
    });

    // persist
    useEffect(() => {
        apiRequest("/watchlist")
            .then(setWatchlist)
            .catch((err) => { console.warn("Failed to load watchlist:", err.message)})
    }, []);

    const addToWatchlist = async (movie) => {
    const optimisticMovie = {
        movieId: String(movie.id),
        title: movie.title,
        poster: movie.poster
    };

    // 1️⃣ Update UI instantly
    setWatchlist(prev => [...prev, optimisticMovie]);

    try {
        // 2️⃣ Sync backend
        await apiRequest("/watchlist", {
            method: "POST",
            body: JSON.stringify(optimisticMovie)
        });
    } catch (error) {
        console.warn(error.message);

        // 3️⃣ Rollback if failed
        setWatchlist(prev =>
            prev.filter(m => m.movieId !== optimisticMovie.movieId)
        );
    }
};


    const removeFromWatchlist = async (movieId) => {

    // Optimistic remove
    setWatchlist(prev =>
        prev.filter(m => m.movieId !== String(movieId))
    );

    try {
        await apiRequest(`/watchlist/${movieId}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.warn(error.message);
    }
};



    const isInWatchlist = (id) => {
        return watchlist.some((m) => String(m.movieId) === String(id));
    };

    return (
        <WatchlistContext.Provider
            value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
        >
            {children}
        </WatchlistContext.Provider>
    );
};

export const useWatchlist = () => useContext(WatchlistContext);
