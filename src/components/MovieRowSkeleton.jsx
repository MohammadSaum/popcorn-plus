import MovieSkeleton from "./MovieSkeleton"

const MovieRowSkeleton = () => {
    return (
        /* Matches <div className="mt-8 mb-10 relative px-6 md:px-12 group/row"> */
        <div className="mt-8 mb-10 px-6 md:px-12">

            {/* Title Placeholder: Matches the text size and bottom margin */}
            <div className="h-6 w-48 bg-gray-800 rounded-md mb-3 animate-pulse" />

            {/* Matches the Movie List Container's padding and gaps */}
            <div className="flex gap-3 md:gap-4 overflow-hidden pb-8 pt-4 px-2">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                        key={i} 
                        /* Matches exact widths from MovieRow: w-[120px] md:w-[160px] lg:w-[190px] */
                        className="flex-none w-[120px] md:w-[160px] lg:w-[190px]"
                    >
                        {/* The Poster Placeholder */}
                        <div className="aspect-[2/3] w-full rounded-lg bg-gray-800 animate-pulse border-2 border-transparent" />
                        
                        {/* The Title Placeholder */}
                        <div className="h-3 w-3/4 bg-gray-800 rounded mt-2 mx-auto animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieRowSkeleton