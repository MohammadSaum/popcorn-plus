import React from 'react'
import heroImage from '../assets/images/hero-Image.jpg'

const Hero = () => {

    return (
        <div className='relative h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-3xl mb-8 bg-center bg-cover flex items-center overflow-hidden hover:scale-[1.0] transition-transform duration-200 pt-16'
        style={{
                backgroundImage: `url(${heroImage})`
        }}>

            {/* gradient */}
            <div className='absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-transparent'/>

            <div className='absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-app-bg/80 to-transparent'/>

            <div className='relative z-10 w-full px-6 md:px-12'>
                <div className='max-w-2xl'>
                    <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight'>
                    Featured Movie
                </h1>

                <p className='text-app-muted mb-8 leading-relaxed text-base md-text-lg max-w-lg'>
                    An epic story that captures the imagination and keeps you hooked.                
                </p>

                <div className='flex items-center gap-4'>
                    <button className=' flex items-center gap-2
                        bg-white text-black
                        px-7 py-3 rounded-xl
                        font-semibold
                        hover:bg-gray-200
                        active:scale-95
                        transition-all duration-200
                        shadow-lg
                        cursor-pointer'>
                        ▶ Play
                    </button>

                    <button className=' bg-white/10 backdrop-blur-md border border-white/10 text-white
                        px-7 py-3 rounded-xl
                        hover:bg-white/2/0
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
