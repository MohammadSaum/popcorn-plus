import { useWatchlist } from "../context/WatchListContext"

const Watchlist = () => {
    const{watchlist, removeFromWatchlist} = useWatchlist()

    if(watchlist.length === 0 ){
        return(
            <div className="min-h-[70vh] flex flex-col justify-center text-center item-center text-gray-400">
                <h2 className="text-xl mb-2">
                    Your watchlist is empty
                </h2>

                <p>
                    Add movies from the home page to see them here.
                </p>
            </div>
        )
    }
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold text-white mb-6">My Watchlist</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {watchlist.map((movie)=>(
                    <div
                        key={movie.id}
                        className="bg-[#0B1022] rounded-lg overflow-hidden shadow"
                        >
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full aspect-2/3 object-cover"
                            />
                    
                    <div className="p-3">
                        <h3 className="text-sm text-white mb-2">{movie.title}</h3>

                        <button onClick={()=>removeFromWatchlist(movie.id)}
                            className="text-sm text-red-400 hover:text-red-300 transition"
                            >Remove
                        </button>

                    </div>
                </div>  
                ))}
            </div>
        </div>
    )
}

export default Watchlist
