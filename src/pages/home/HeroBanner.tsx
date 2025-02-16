
const HeroBanner = () => {
    return (
        <section className="relative h-screen">
            {/* video */}
            <div className="w-full h-full">
                <video src="https://video.wixstatic.com/video/11062b_6655a7138a5b4da488c950c2eecefff9/1080p/mp4/file.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
            </div>
            {/* video */}

            {/* content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="md:text-[96px] text-4xl text-nowrap font-bold text-center text-text-0">Hung restaurant</h1>
                <p className="pt-5 text-gray-100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti tenetur, fugit sequi veniam libero ullam temporibus quibusdam. Nam quos delectus ad corrupti consequatur mollitia voluptas quasi, hic suscipit ullam?</p>
                <div className="flex justify-center pt-5">
                    <button className="bg-red-500 text-white px-5 py-3">Menu</button>
                </div>
            </div>
            {/* content */}
        </section>
    )
}

export default HeroBanner