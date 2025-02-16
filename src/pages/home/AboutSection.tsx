import Container from '../../layout/Container'

const AboutSection = () => {
    return (
        <section className='py-20'>
            <Container >
                <div className="grid grid-cols-12 gap-5">
                    {/* image */}
                    <div className="col-span-12 md:col-span-5">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='md:h-[460px] h-[200px] w-full object-cover  rounded-lg' />
                    </div>
                    {/* image */}

                    {/* text */}
                    <div className="col-span-12 md:col-span-7">
                        <h2 className="md:text-4xl text-2xl font-bold text-neutral-800">
                            | About Us
                        </h2>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolores. Quae, autem! Quos, dolores. Quae, autem! Quos, dolores. Quae, autem!
                        </p>
                    </div>
                    {/* text */}
                </div>
            </Container>
        </section>
    )
}

export default AboutSection