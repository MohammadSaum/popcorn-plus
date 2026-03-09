import { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../utils/api";
import toast from "react-hot-toast";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // persist
    useEffect(() => {
            
    const fetchWatchlist = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await apiRequest("/api/watchlist");
            setWatchlist(data.watchlist || data); 
        } catch (err) {
            console.warn("Failed to load watchlist:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchWatchlist();
}, []);

    const addToWatchlist = async (movie) => {
    const optimisticMovie = {
        movieId: String(movie.id),
        title: movie.title,
        poster: movie.poster
    };

    // 1. Update UI immediately
    setWatchlist(prev => [...prev, optimisticMovie]);

    // 2. Use toast.promise to track the API request
    toast.promise(
        apiRequest("/api/watchlist", {
            method: "POST",
            body: JSON.stringify(optimisticMovie)
        }),
        {
            loading: 'Adding to watchlist...',
            success: 'Added to Watchlist!',
            error: (err) => {
                // 3. Rollback UI on failure
                setWatchlist(prev => prev.filter(m => m.movieId !== optimisticMovie.movieId));
                return "Failed to add to Watchlist";
            },
        }
    );
};


    const removeFromWatchlist = async (movieId) => {
    setWatchlist(prev =>
        prev.filter(m => m.movieId !== String(movieId))
    );

    toast("Removed from Watchlist");

    try {
        await apiRequest(`/api/watchlist/${movieId}`, {
        method: "DELETE"
        });
    } catch (error) {
        toast.error("Failed to remove movie");
    }
};



    const isInWatchlist = (id) => {
        return watchlist.some((m) => String(m.movieId) === String(id));
    };

    return (
        <WatchlistContext.Provider
            value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist, loading, error }}
        >
            {children}
        </WatchlistContext.Provider>
    );
};

export const useWatchlist = () => useContext(WatchlistContext);
