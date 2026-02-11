const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint) => {
    const res = await fetch(
        `${BASE_URL}${endpoint}?api_key=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    return data.results;
};
