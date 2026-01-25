import { useWatchlist } from "../context/WatchListContext"

const Watchlist = () => {
    const{watchlist, removeFromWatchlist} = useWatchlist()

    if(watchlist.length === 0 ){
        return(
            <div className="min-h-[70vh] flex flex-col justify-center text-center items-center text-gray-400 px-4">
                <h2 className="text-2xl font-semibold mb-2">
                    Your watchlist is empty
                </h2>

                <p className="max-w-md">
                    Start exploring movies and add your favourites to see them here.
                </p>
            </div>
        )
    }
    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-white mb-8">My Watchlist</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {watchlist.map((movie)=>(
                    <div
                        key={movie.id}
                        className="bg-[#0B1022] rounded-xl overflow-hidden shadow-lg transition transform hover:scale-[1.03] hover:shadow-xl"
                        >
                            <div className="overflow-hidden">
                                <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full aspect-2/3 object-cover hover:scale-110 duration-300 transition-transform"
                            />
                            </div>
                    
                    <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-sm font-medium line-clamp-2 text-white ">{movie.title}</h3>

                        <button onClick={()=>removeFromWatchlist(movie.id)}
                            className="mt-2 items-center gap-1 text-sm font-medium text-red-400 cursor-pointer px-3 py-1 rounded-full hover:bg-red-500/10 hover:text-red-300 active:scale-95 transition-all duration-200"
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
