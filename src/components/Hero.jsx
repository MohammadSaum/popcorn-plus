import React from 'react'

const Hero = () => {
    return (
        <div className='relative h-[60vh] rounded-xl mb-10 bg-linear-to-r from-black via-black/70 to-transparent flex items-center px-10'>
            <div className='max-w-xl'>
                <h1 className='text-4xl font-bold mb-4'>
                    Featured Movie
                </h1>

                <p className='text-gray-300 mb-6'>
                    This is a short description of the featured movie or show.
                </p>

                <div className='flex gap-4'>
                    <button className='bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition'>
                        Play
                    </button>

                    <button className='bg-gray-700/70 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition'>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
