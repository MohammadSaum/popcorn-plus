import express from "express";

const router = express.Router();
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

const fetchFromTMDB = async (endpoint) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  return await response.json();
};

router.get("/trending", async (req, res) => {
  try {
    console.log("Fetching trending from TMDB...");
    const data = await fetchFromTMDB("/trending/movie/week");
    console.log("TMDB response received");
    res.json(data.results);
  } catch (error) {
    console.log("TMDB ERROR:", error);
    res.status(500).json({ message: "Failed to fetch trending movies" });
  }
});


router.get("/popular", async (req, res) => {
    try {
        const data = await fetchFromTMDB("/movie/popular");
        res.json(data.results);
    } catch {
        res.status(500).json({ message: "Failed to fetch popular movies" });
    }
});

router.get("/upcoming", async (req, res) => {
    try {
        const data = await fetchFromTMDB("/movie/upcoming");
        res.json(data.results);
    } catch {
        res.status(500).json({ message: "Failed to fetch upcoming movies" });
    }
});

export default router;

