import { menu } from "../../data/menu"
import BannerSection from "./BannerSection"
import MenuSection from "./MenuSection"

const Menu = () => {
    return (
        <main>
            <BannerSection />
            <div className="flex flex-col ">
                <MenuSection category="Signature" country="Vietnamese" menu={menu} title="Signature" />
                <MenuSection category="Signature" country="Vietnamese" menu={menu} title="Signature" />
                <MenuSection category="Signature" country="Vietnamese" menu={menu} title="Signature" />
                <MenuSection category="Signature" country="Vietnamese" menu={menu} title="Signature" />
                <MenuSection category="Signature" country="Vietnamese" menu={menu} title="Signature" />
            </div>
        </main>
    )
}

export default Menu