import { useState } from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import {trendingMovies, popularMovies, newReleases} from '../data/Movies'
import MovieModal from '../components/MovieModal'

const Home = () => {
    const [selectedMovie, setSelectedMovie] = useState(null)
    return (
        <>
        <MovieModal movie={selectedMovie} onClose={()=>setSelectedMovie(null)}/>
        
        <div className='bg-[#0B1022] min-h-screen text-white px-6 py-4'>
            <Hero/>

            <MovieRow title='Trending' movies={trendingMovies} onMovieClick={setSelectedMovie}/>
            <MovieRow title='Popular' movies={popularMovies} onMovieClick={setSelectedMovie}/>
            <MovieRow title='New Releases' movies={newReleases} onMovieClick={setSelectedMovie}/>
        </div>
        </>
    )
}

export default Home
