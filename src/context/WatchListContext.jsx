import { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState(() => {
        const stored = localStorage.getItem("watchlist");
        return stored ? JSON.parse(stored) : [];
    });

    // persist
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie) => {
        setWatchlist((prev) => {
        const exists = prev.some((m) => m.id === movie.id);
        if (exists) return prev;
        return [...prev, movie];
        });
    };

    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((m) => m.id !== id));
    };

    const isInWatchlist = (id) => {
        return watchlist.some((m) => m.id === id);
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
