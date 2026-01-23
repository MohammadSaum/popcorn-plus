import React from 'react'
import heroImage from '../assets/images/hero-Image.jpg'

const Hero = () => {

    return (
        <div className='relative h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-xl mb-10 bg-center bg-cover flex items-center px-10'
        style={{
                backgroundImage: `url(${heroImage})`
        }}>

            {/* gradient */}
            <div className='absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent rounded-xl'/>

            <div className='relative z-10 px-10 max-w-xl'>
                <h1 className='text-4xl font-bold mb-4'>
                    Featured Movie
                </h1>

                <p className='text-gray-300 mb-6'>
                    An epic story that captures the imagination and keeps you hooked.                
                </p>

                <div className='flex gap-4'>
                    <button className='bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer active:scale-95'>
                        Play
                    </button>

                    <button className='bg-gray-700/70 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition cursor-pointer active:scale-95'>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
