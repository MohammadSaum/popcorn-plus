import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import {trendingMovies, popularMovies, newReleases} from '../data/Movies'

const Home = ({onLogout}) => {
    return (
        <div className='bg-[#0B1022] min-h-screen text-white px-6 py-4'>
            <Hero/>

            <MovieRow title='Trending' movies={trendingMovies}/>
            <MovieRow title='Popular' movies={popularMovies}/>
            <MovieRow title='New Releases' movies={newReleases}/>
        </div>
    )
}

export default Home
