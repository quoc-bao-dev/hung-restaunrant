import { Menu } from "../../interface";
import Container from "../../layout/Container";


type MenuSectionProps = {
  category: string;
  title: string;
  menu: Menu
};

const MenuSection = ({ category, menu }: MenuSectionProps) => {
  return (
    <section className="py-10 -mt-1" style={{ backgroundImage: "url('/images/bg-1.png')" }}>
      <Container>
        {/* Tiêu đề */}
        <div className="text-center">
          <p className="italic text-[#F0A039] md:text-4xl text-4xl font-bold"> {category}</p>
          {/* <h2 className="md:text-6xl text-4xl font-bold mt-2 text-white">{title}</h2> */}
        </div>

        {/* Khối menu */}
        <div className="pt-6 flex justify-center">
          <div className="bg-[#1e2326] md:px-12 md:pt-6 md:pb-10 p-6 w-full max-w-4xl">
            <div className="flex flex-col gap-5">
              {menu.map((item, index) => (
                <div key={index}>
                  <h3 className="md:text-2xl text-xl font-bold text-white">{item.category}</h3>
                  {item.description && <p className="md:text-lg text-base text-gray-300">{item.description}</p>}
                  <div className="pt-4 space-y-2">
                    {item.items.map((item, index) => (
                      <div className="flex items-end text-text-0" key={index}>
                        <p className="md:text-lg text-base font-bold">{item.foodName}</p>
                        <div className="w-full h-[1px] bg-gray-400 mx-2 flex-1 mb-1.5"></div>
                        <p className="md:text-lg text-base text-[#F0A039] font-medium ">{item.price}Kč</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MenuSection;