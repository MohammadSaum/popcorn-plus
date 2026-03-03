import { useEffect, useState } from "react"
import Hero from "../components/Hero"
import MovieRow from "../components/MovieRow"
import MovieModal from "../components/MovieModal"
import { apiRequest } from "../utils/api"
import {Facebook, Instagram, Youtube} from 'lucide-react'

const Home = () => {
    const [selectedMovie, setSelectedMovie] = useState(null)

    const [trending, setTrending] = useState([])
    const [popular, setPopular] = useState([])
    const [newReleases, setNewReleases] = useState([])
    const [topRated, setTopRated] = useState([])
    const [action, setAction] = useState([])
    const [comedy, setComedy] = useState([])
    const [horror, setHorror] = useState([])


  const [loading, setLoading] = useState(true)

  const removeDuplicatesAcrossRows = (rows) => {
  const seen = new Set();

  return rows.map((row) =>
    row.filter((movie) => {
      if (seen.has(movie.id)) return false;
      seen.add(movie.id);
      return true;
    })
  );
};

  useEffect(() => {
  const fetchMovies = async () => {
    try {
      setLoading(true)

      const [
        trendingData,
        popularData,
        upcomingData,
        topRatedData,
        actionData,
        comedyData,
        horrorData
      ] = await Promise.all([
        apiRequest("/movies/trending"),
        apiRequest("/movies/popular"),
        apiRequest("/movies/upcoming"),
        apiRequest("/movies/top-rated"),
        apiRequest("/movies/action"),
        apiRequest("/movies/comedy"),
        apiRequest("/movies/horror"),
      ])

      const formatMovies = (movies) =>
        movies.map((movie) => ({
            id: movie.id,
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
            overview: movie.overview,
            rating: movie.vote_average,
            releaseDate: movie.release_date,
            genreIds: movie.genre_ids,
        }))

      // Format first
      const formattedTrending = formatMovies(trendingData)
      const formattedPopular = formatMovies(popularData)
      const formattedUpcoming = formatMovies(upcomingData)
      const formattedTopRated = formatMovies(topRatedData)
      const formattedAction = formatMovies(actionData)
      const formattedComedy = formatMovies(comedyData)
      const formattedHorror = formatMovies(horrorData)

      // Remove duplicates across ALL rows
      const [
        uniqueTrending,
        uniquePopular,
        uniqueUpcoming,
        uniqueTopRated,
        uniqueAction,
        uniqueComedy,
        uniqueHorror
      ] = removeDuplicatesAcrossRows([
        formattedTrending,
        formattedPopular,
        formattedUpcoming,
        formattedTopRated,
        formattedAction,
        formattedComedy,
        formattedHorror,
      ])

      // Set cleaned rows
      setTrending(uniqueTrending)
      setPopular(uniquePopular)
      setNewReleases(uniqueUpcoming)
      setTopRated(uniqueTopRated)
      setAction(uniqueAction)
      setComedy(uniqueComedy)
      setHorror(uniqueHorror)

    } catch (err) {
      console.error("Failed to load movies:", err.message)
    } finally {
      setLoading(false)
    }
  }

  fetchMovies()
}, [])

const heroMovie = trending.length
  ? trending[Math.floor(Math.random() * trending.length)]
  : null

  return (
    <>
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <div className="bg-app-bg min-h-screen text-app-text px-6 py-4 animate-fadeIn">
        <Hero movie={heroMovie} />


        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <MovieRow title="Trending" movies={trending} onMovieClick={setSelectedMovie} />
            <MovieRow title="Popular" movies={popular} onMovieClick={setSelectedMovie} />
            <MovieRow title="New Releases" movies={newReleases} onMovieClick={setSelectedMovie} />
            <MovieRow title="Top Rated" movies={topRated} onMovieClick={setSelectedMovie} />
            <MovieRow title="Action Movies" movies={action} onMovieClick={setSelectedMovie} />
            <MovieRow title="Comedy Movies" movies={comedy} onMovieClick={setSelectedMovie} />
            <MovieRow title="Horror Movies" movies={horror} onMovieClick={setSelectedMovie} />

            </>
        )}
    </div>

    <footer className="mt-5 py-16 bg-[#040714] border-t border-white/5 text-gray-400 text-sm font-sans">
    <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-12">
            <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-white transition-colors duration-300">Audio and Subtitles</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Media Center</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
            </div>

            <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-white transition-colors duration-300">Audio Description</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Investor Relations</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Legal Notices</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Cookie Preferences</a>
            </div>

            <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-white transition-colors duration-300">Help Center</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Jobs</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Corporate Information</a>
            </div>

            <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-white transition-colors duration-300">Account</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Redeem Gift Cards</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Ways to Watch</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Only on Popcorn+</a>
            </div>
        </div>

        {/* Bottom Section: Branding & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
            
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-2xl font-extrabold text-white tracking-tight">Popcorn+</span>
                <p className="text-xs text-gray-500">© 2026 Popcorn+. All rights reserved.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                    <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                    <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                    <Youtube size={20} strokeWidth={1.5} />
                </a>
            </div>
        </div>

    </div>
</footer>
    </>
    )
}

export default Home
