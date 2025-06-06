export default function Hero() {
    return (
        <>
            <div className="max-w-2xl md:max-w-4xl lg:max-w-7xl w-full m-auto mt-10 mb-[8%] h-3/4 relative text-center content-center">
                <div className="text-orange-100 text-5xl sm:text-6xl lg:text-7xl m-5 font-bold">Hi, I'm Dev</div>
                <div className="text-orange-100 text-sm sm:text-base lg:text-lg">A Website Developer from India.</div>
                <button className="mt-20 px-6 py-2 bg-orange-300 text-white text-base sm:text-lg lg:text-xl rounded-lg"><a href="#Contact">Contact Me</a></button>
            </div>
        </>
    )
}