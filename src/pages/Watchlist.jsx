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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
                {watchlist.map((movie)=>(
                    <div
                        key={movie.movieId}
                        className="group transition-all duration-300"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                                <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full aspect-2/3 object-cover group-hover:scale-105 duration-500 transition-transform"
                            />

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                            <button onClick={()=>removeFromWatchlist(movie.movieId)}
                                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-sm font-medium active:scale-95 transition cursor-pointer"
                                >Remove
                            </button>
                    </div>
                </div>  
                    <p className="mt-3 text-sm font-medium line-clamp-2">
                        {movie.title}
                    </p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Watchlist
