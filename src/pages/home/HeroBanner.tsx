import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import { motion } from "framer-motion";

const HeroBanner = () => {
    return (
        <section className='relative h-screen' id='home'>
            {/* video */}
            <div className='w-full h-full'>
                <video
                    src='/video/banner.mp4'
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'
                />
            </div>
            {/* video */}

            {/* content */}
            <motion.div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-auto'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Container>
                    <motion.h1
                        className='md:text-[96px] text-4xl text-nowrap font-bold text-center text-text-0'
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5, // Giảm thời gian animation
                            ease: "easeOut",
                            delay: 0.1, // Giảm delay
                        }}>
                        Všechny chutě Asie
                    </motion.h1>

                    <div className='flex flex-col pt-5'>
                        <div>
                            <motion.p
                                className='text-gray-100 md:text-3xl text-lg font-medium'
                                initial={false}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5, // Giảm thời gian animation
                                    ease: "easeOut",
                                    delay: 0.2, // Giảm delay
                                }}>
                                Tradiční receptury
                            </motion.p>
                            <motion.p
                                className='pt-2 text-gray-100 md:text-xl'
                                initial={false}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5, // Giảm thời gian animation
                                    ease: "easeOut",
                                    delay: 0.2, // Giảm delay
                                }}>
                                Přijďte na naše tradiční jídla, které znáte z
                                Vietnamu, Číny, Japonska, Indie a Thajska.
                            </motion.p>
                        </div>
                        <div>
                            <motion.p
                                className='pt-5 text-gray-100 md:text-3xl text-lg font-medium'
                                initial={false}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5, // Giảm thời gian animation
                                    ease: "easeOut",
                                    delay: 0.2, // Giảm delay
                                }}>
                                Autentické požitky
                            </motion.p>
                            <motion.p
                                className='pt-2 text-gray-100 md:text-xl'
                                initial={false}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5, // Giảm thời gian animation
                                    ease: "easeOut",
                                    delay: 0.2, // Giảm delay
                                }}>
                                Všechny chutě a vůně vychází z koření a umění
                                našich šéfkuchařů.
                            </motion.p>
                        </div>
                    </div>

                    <motion.div
                        className='flex justify-center pt-5'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.6,
                        }}>
                        <Link to='/menu'>
                            <button className='bg-red-600 text-white px-10 py-3 font-medium md:text-xl'>
                                Menu
                            </button>
                        </Link>
                    </motion.div>
                </Container>
            </motion.div>
            {/* content */}
        </section>
    );
};

export default HeroBanner;
