const MovieRow = ({title, movies, onMovieClick}) => {
    const moviesWithId = movies.map((movie) =>({
        ...movie,
        id: `${movie.title}-${movie.year}`,
        
    }))

    return (
        <div className='mt-8 mb-10'>
            <h2 className='text-xl font-semibold mb-3'>
                {title}
            </h2>

            <div className='relative'>
                <div className='flex gap-4 overflow-x-auto scrollbar-hide pr-10'>
                {moviesWithId.map((movie) => {
                    return (
                        <div 
                            key={movie.id}
                            className='min-w-37.5 cursor-pointer'
                            onClick={()=>{onMovieClick(movie)
                            }}
                            >
                                <div className='w-40 h-60 rounded-lg overflow-hidden bg-gray-800'>
                                    <img 
                                        src={movie.poster} 
                                        alt={movie.title}
                                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'/>
                                </div>

                                <p className='text-sm text-center mt-2 text-app-muted'>{movie.title}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default MovieRow
