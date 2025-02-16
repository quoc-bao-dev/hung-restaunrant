
const BannerSection = () => {
    return (
        <section className="relative md:h-[400px]  h-[200px] mt-[var(--header-height)]">
            <img src="/images/banner-1.avif" alt="" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  text-4xl md:text-7xl text-nowrap text-text-0 font-bold">HU’NG restaurace</div>
        </section>
    )
}

export default BannerSection