import Container from "../../layout/Container";
import { motion } from "framer-motion";

type MenuSectionProps = {
    title: string;
    image: string;
    section: {
        foodName: string;
        description?: string;
        menu: { description?: string, foodName: string; price: number }[];
    }[]
    imagePosition?: "left" | "right"; // Thêm prop mới
};

const MenuSection = ({ section, image, title, imagePosition = "right" }: MenuSectionProps) => {
    return (
        <motion.section
            className="py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="signature"
        >
            <Container>
                <h2 className="md:text-4xl text-2xl text-center font-bold text-neutral-800">{title}</h2>
                <div className="pt-10">
                    <div className="grid grid-cols-12 gap-5">
                        {imagePosition === "left" && (
                            <motion.div
                                className="h-full col-span-4 hidden md:block  max-w-full"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <img src={image} alt={title} className="md:h-full w-full object-cover rounded-lg" />
                            </motion.div>
                        )}

                        {/* Menu */}
                        <motion.div
                            className="col-span-12 md:col-span-8"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                            <div className="bg-bg-0 md:px-16 md:pt-8 md:pb-20 p-6 pb-8 text-text-0 rounded-lg">
                                {section.map((item, index) => <div className={`${index > 0 && 'pt-5'}`} key={item.foodName}>
                                    <motion.h3
                                        className="text-2xl font-medium text-center"
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    >
                                        {item.foodName}
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-500 text-sm mt-1"
                                        initial={{ opacity: 0, y: -5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                                    >
                                        {item.description}
                                    </motion.p>
                                    <div className="pt-1">
                                        <div className="flex flex-col gap-4">
                                            {item.menu.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex gap-2 items-end"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                                >
                                                    <h4 className="md:text-lg text-base font-medium">{item.foodName}</h4>
                                                    <div className="w-full h-[1px] bg-gray-400 flex-1 mb-1.5"></div>
                                                    <p className="md:text-lg text-base text-text-1 font-medium ">${item.price}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </motion.div>

                        {imagePosition === "right" && (
                            <motion.div
                                className="col-span-4 hidden md:block  max-w-full h-full "
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <img src={image} alt={title} className="md:h-full w-full object-cover rounded-lg" />
                            </motion.div>
                        )}
                    </div>
                </div>
            </Container>
        </motion.section>
    );
};

export default MenuSection;
