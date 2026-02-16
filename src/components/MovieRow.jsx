const MovieRow = ({title, movies, onMovieClick}) => {
    const moviesWithId = movies.map((movie) =>({
        ...movie,
        id: movie.id || `${movie.title}-${index}`
        
    }))

    return (
        <div className='mt-10 mb-12'>
            <h2 className='text-xl font-semibold mb-4 tracking-wide'>
                {title}
            </h2>

            <div className='relative group'>
                <div className="absolute left-0 top-0 h-full w-12 bg-linear-to-r from-app-bg to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100  transition-opacity duration-300"/>

                <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-app-bg to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100  transition-opacity duration-300"/>

                <div className='flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2'>
                {moviesWithId.map((movie) => {
                    return (
                        <div 
                            key={movie.id}
                            className='min-w-37.5 snap-start cursor-pointer transition-all duration-300 hover:translate-y-2 hover:scale[1.03]'
                            onClick={()=>{onMovieClick(movie)
                            }}
                            >
                                <div className='w-40 h-60 rounded-xl overflow-hidden bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300'>
                                    <img 
                                        src={movie.poster} 
                                        alt={movie.title}
                                        className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'/>
                                </div>

                                <p className='text-sm text-center mt-3 text-app-muted line-clamp-2'>{movie.title}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default MovieRow
