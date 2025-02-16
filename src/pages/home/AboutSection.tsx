import Container from '../../layout/Container'
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className='py-20 pb-5 md:pb-20'>
            <Container>
                <div className="grid grid-cols-12 gap-5">
                    {/* image */}
                    <motion.div
                        className="col-span-12 md:col-span-5"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                            className='md:h-[460px] h-[200px] w-full object-cover rounded-lg'
                        />
                    </motion.div>
                    {/* image */}

                    {/* text */}
                    <motion.div
                        className="col-span-12 md:col-span-7"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <h2 className="md:text-4xl text-2xl font-bold text-neutral-800">
                            | About Us
                        </h2>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolores. Quae, autem! Quos, dolores. Quae, autem! Quos, dolores. Quae, autem!
                        </p>
                    </motion.div>
                    {/* text */}
                </div>
            </Container>
        </section>
    );
}

export default AboutSection