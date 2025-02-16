import { Link } from "react-router-dom";
import Container from "../../layout/Container"
import { motion } from "framer-motion";

const HeroBanner = () => {
    return (
        <section className="relative h-screen">
            {/* video */}
            <div className="w-full h-full">
                <video
                    src="https://video.wixstatic.com/video/11062b_6655a7138a5b4da488c950c2eecefff9/1080p/mp4/file.mp4"
                    autoPlay loop muted
                    className="w-full h-full object-cover"
                />
            </div>
            {/* video */}

            {/* content */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Container>
                    <motion.h1
                        className="md:text-[96px] text-4xl text-nowrap font-bold text-center text-text-0"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        HU’NG restaurace
                    </motion.h1>

                    <motion.p
                        className="pt-5 text-gray-100 md:text-2xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti tenetur, fugit sequi veniam libero ullam temporibus quibusdam. Nam quos delectus ad corrupti consequatur mollitia voluptas quasi, hic suscipit ullam?
                    </motion.p>

                    <motion.div
                        className="flex justify-center pt-5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                    >
                        <Link to="/menu"><button className="bg-red-500 text-white px-10 py-3 font-medium md:text-xl">Menu</button></Link>
                    </motion.div>
                </Container>
            </motion.div>
            {/* content */}
        </section>
    );
};

export default HeroBanner