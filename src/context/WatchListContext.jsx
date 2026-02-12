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
        if(!movie.id) {
            console.error("Movie ID missing:",movie)
            return
        }
        try {
            const updated = await apiRequest("/watchlist", {
            method: "POST",
            body: JSON.stringify({
                movieId: movie.id.toString(),
                title: movie.title,
                poster: movie.poster
            }),
        });
        
        setWatchlist(updated);
        } catch (error) {
            console.warn(error.message)
        }
    };

    const removeFromWatchlist = async (movieId) => {
        const updated = await apiRequest(`/watchlist/${movieId}`, {
            method: "DELETE",
        });
        setWatchlist(updated);
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
