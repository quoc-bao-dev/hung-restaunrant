import Container from '../../layout/Container'
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className='py-20 pb-5 md:pb-20' id="about">
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
                            src="/images/banner-1.avif"
                            alt=""
                            className='md:h-[460px] h-[200px] w-full object-cover rounded-lg'
                        />
                    </motion.div>
                    {/* image */}

                    {/* text */}
                    <motion.div
                        className="col-span-12 md:col-span-7 md:text-xl"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <h2 className="md:text-4xl text-2xl font-bold text-neutral-800">
                            | O nás
                        </h2>
                        <p className="mt-5">
                            V Hung restauraci najdete širokou nabídku vietnamských, thajských a japonských pokrmů, které vám přiblíží tradiční asijskou kuchyni. Čerstvé suroviny a bohaté porce vás přesvědčí, že Hung restaurace je to pravé. Rodinná restaurace s přátelskou atmosférou klade důraz na vaši spokojenost a příjemný zážitek. Ochutnáte tradiční chutě i originální recepty.
                        </p>
                        <p className="mt-3">
                            Naše rodina přijela před rokem 1999 do Česka. Stesk po domácí kuchyni byl obrovský a časem jsme se naučili připravovat jídla, a stalo se to naší vášni. V roce 2024 jsme se rozhodli otevřít si první vietnamskou restauraci.
                        </p>
                        <p className="mt-3">
                            Od té doby předáváme radost dál skrze vynikající jídla, která připravujeme s láskou a máme obrovskou radost, když vám chutná. Propadněte s námi kouzlu asijské kuchyně a rezervujte si stůl ještě dnes.
                        </p>
                    </motion.div>
                    {/* text */}
                </div>
            </Container>
        </section>
    );
}

export default AboutSection