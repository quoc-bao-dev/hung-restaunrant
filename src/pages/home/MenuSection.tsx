import Container from "../../layout/Container";

type MenuSectionProps = {
    title: string;
    image: string;
    foodName: string;
    menu: { foodName: string; price: number }[];
    imagePosition?: "left" | "right"; // Thêm prop mới
};

const MenuSection = ({ foodName, image, menu, title, imagePosition = "right" }: MenuSectionProps) => {
    return (
        <section className="py-10">
            <Container>
                <h2 className="md:text-4xl text-2xl text-center font-bold text-neutral-800">{title}</h2>
                <div className="pt-10">
                    <div className="grid grid-cols-12 gap-5">
                        {/* Nếu imagePosition là "left", thì hình ảnh nằm bên trái */}
                        {imagePosition === "left" && (
                            <div className="col-span-4 hidden md:block">
                                <img src={image} alt={foodName} className="md:h-full w-full object-cover  rounded-lg" />
                            </div>
                        )}

                        {/* Menu */}
                        <div className="col-span-12 md:col-span-8 ">
                            <div className="bg-bg-0 md:px-16 md:pt-8 md:pb-20 p-6 pb-8 text-text-0 rounded-lg">
                                <h3 className="text-2xl font-bold text-center ">{foodName}</h3>
                                <div className="pt-10">
                                    <div className="flex flex-col gap-4">
                                        {/* Render danh sách món ăn */}
                                        {menu.map((item, index) => (
                                            <div className="flex gap-2 items-end" key={index}>
                                                <h4 className="md:text-lg text-base font-bold">{item.foodName}</h4>
                                                <div className="w-full h-[1px] bg-gray-300 flex-1 mb-1.5"></div>
                                                <p className="md:text-lg text-base text-text-1 font-medium ">${item.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Nếu imagePosition là "right", thì hình ảnh nằm bên phải */}
                        {imagePosition === "right" && (
                            <div className="col-span-4 hidden md:block">
                                <img src={image} alt={foodName} className="md:h-full w-full object-cover  rounded-lg" />
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MenuSection;
