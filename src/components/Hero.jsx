import React from 'react'
import heroImage from '../assets/images/hero-Image.jpg'

const Hero = () => {

    return (
        <div className='relative h-[55vh] md:h-[65vh] lg:h-[75vh] rounded-2xl mb-6 bg-center bg-cover flex items-center px-10 overflow-hidden'
        style={{
                backgroundImage: `url(${heroImage})`
        }}>

            {/* gradient */}
            <div className='absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent'/>

            <div className='absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0B1022] to-transparent'/>

            <div className='relative z-10 w-full'>
                <div className='app-container'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                    Featured Movie
                </h1>

                <p className='text-gray-300 mb-6 leading-relaxed text-base md-text-lg'>
                    An epic story that captures the imagination and keeps you hooked.                
                </p>

                <div className='flex items-center gap-4'>
                    <button className=' flex items-center gap-2
                        bg-white text-black
                        px-6 py-2.5 rounded-md
                        font-semibold
                        hover:bg-gray-200
                        active:scale-95
                        transition-all duration-200
                        cursor-pointer'>
                        Play
                    </button>

                    <button className=' bg-gray-700/80 text-white
                        px-6 py-2.5 rounded-md
                        hover:bg-gray-600/90
                        active:scale-95
                        transition-all duration-200
                        cursor-pointer'>
                        More Info
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
