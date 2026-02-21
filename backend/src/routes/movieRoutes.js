import express from "express";

const router = express.Router();
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

const fetchFromTMDB = async (endpoint) => {
  const separator = endpoint.includes("?") ? "&" : "?";

  const response = await fetch(
    `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  return await response.json();
};


/* ========== STANDARD MOVIE LISTS ========== */

router.get("/trending", async (req, res) => {
  const data = await fetchFromTMDB("/trending/movie/week");
  res.json(data.results);
});

router.get("/popular", async (req, res) => {
  const data = await fetchFromTMDB("/movie/popular");
  res.json(data.results);
});

router.get("/top-rated", async (req, res) => {
  const data = await fetchFromTMDB("/movie/top_rated");
  res.json(data.results);
});

router.get("/action", async (req, res) => {
  const data = await fetchFromTMDB("/discover/movie?with_genres=28");
  res.json(data.results);
});


router.get("/comedy", async (req, res) => {
  const data = await fetchFromTMDB("/discover/movie?with_genres=35");
  res.json(data.results);
});

router.get("/horror", async (req, res) => {
  const data = await fetchFromTMDB("/discover/movie?with_genres=27");
  res.json(data.results);
});

router.get("/upcoming", async (req, res) => {
  const data = await fetchFromTMDB("/movie/upcoming");
  res.json(data.results);
});



export default router;
