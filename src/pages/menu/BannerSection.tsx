
const BannerSection = () => {
    return (
        <section className="relative md:h-[400px]  h-[200px] mt-[var(--header-height)]">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  text-2xl md:text-7xl text-nowrap text-text-0 font-bold">Hung restaurant</div>
        </section>
    )
}

export default BannerSection