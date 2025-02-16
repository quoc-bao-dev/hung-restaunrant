import { Link } from "react-router-dom"

const BannerSection = () => {
    return (
        <section className="relative md:h-[400px]  h-[200px] mt-[var(--header-height)]">
            <img src="/images/banner-1.avif" alt="" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <p className="text-center  text-4xl md:text-7xl text-nowrap text-text-0 font-bold">HU’NG restaurace</p>
                <div className="flex gap-2 w-fit mx-auto mt-5">

                    <Link to={"/menu/main"}><button className="md:text-lg text-base font-medium text-white md:w-40 w-20 h-10 bg-[#F0A039] hover:bg-[#F0A039]/80 transition-all duration-300">Main</button></Link>
                    <Link to={"/menu/sushi"}><button className="md:text-lg text-base font-medium text-white md:w-40 w-20 h-10 bg-[#F0A039] hover:bg-[#F0A039]/80 transition-all duration-300">Sushi</button></Link>
                </div>
            </div>
        </section>
    )
}

export default BannerSection