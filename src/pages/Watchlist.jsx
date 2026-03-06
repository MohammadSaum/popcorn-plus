import { useWatchlist } from "../context/WatchListContext"

const Watchlist = () => {
    const{watchlist, removeFromWatchlist} = useWatchlist()

    if(watchlist.length === 0 ){
        return(
            <div className="min-h-[70vh] flex flex-col justify-center text-center items-center text-app-muted px-6 animate-fadeIn pt-16">

                <div className="mb-6 text-5xl opacity-40">🎬</div>
                <h2 className="text-2xl font-semibold mb-3">
                    Your watchlist is empty
                </h2>

                <p className="max-w-md text-app-muted leading-relaxed">
                    Start exploring movies and add your favourites to see them here.
                </p>
            </div>
        )
    }
    return (
        <div className="px-6 md:px-12 py-10 animate-fadeIn pt-16">
            <div className="flex items-center justify-between mb-10">

                <h1 className="text-3xl font-bold tracking-tight">My Watchlist</h1>

                <span className="text-sm text-app-muted">
                    {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
                </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-7">
            {watchlist.map((movie) => (
                <div key={movie.movieId} className="group relative flex flex-col">
                
                <div className="relative aspect-2/3 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-app-card">
                    
                    <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    
                    <button 
                        onClick={() => removeFromWatchlist(movie.movieId)}
                        className="absolute top-2 right-2 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-red-500 active:scale-90 transition-transform shadow-lg"
                        aria-label="Remove from watchlist"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-3 md:hidden">
                        <p className="text-white text-xs font-bold leading-tight line-clamp-2">
                        {movie.title}
                        </p>
                    </div>
                    </div>
                </div>

                <p className="mt-3 hidden md:block text-sm font-semibold text-app-foreground line-clamp-1">
                    {movie.title}
                </p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Watchlist
