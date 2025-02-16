import { appetizersMenu, chaoMenu, curryMenu, doXaoMenu, noodleRiceMenu, saladsMenu, soupsMenu, teriyakiMenu, udonMenu, upMenu, vietnameseNoodlesMenu } from "../../../data/menu"
import MenuSection from "../MenuSection"

const MainMenu = () => {
    return (
        <div className="flex flex-col ">
            <MenuSection category="Polévky" lsMenu={soupsMenu} title="Menu of Polévky" />
            <MenuSection category="Předkrmy" lsMenu={appetizersMenu} title="Menu of Předkrmy" />
            <MenuSection category="Saláty" lsMenu={saladsMenu} title="Menu of Saláty" />
            <MenuSection category="Vietnamská jídla" lsMenu={vietnameseNoodlesMenu} title="Menu of Vietnamská jídla" />
            <MenuSection category="Udon nudle" lsMenu={udonMenu} title="Udon nudle" />
            <MenuSection category="Nudle & Rizoto" lsMenu={noodleRiceMenu} title="Nudle & Rizoto" />
            <MenuSection category="Křupavé maso" lsMenu={upMenu} title="Menu of Křupavé maso" />
            <MenuSection category="Hlavní jídla & rýží" lsMenu={doXaoMenu} title="Menu of Hlavní jídla & rýží" />
            <MenuSection category="Na horké plotýnce" lsMenu={chaoMenu} title="Menu of Na horké plotýnce" />
            <MenuSection category="Teriyaki" lsMenu={teriyakiMenu} title="Menu of Teriyaki" />
            <MenuSection category="Na kari & rýží" lsMenu={curryMenu} title="Menu of Na kari & rýží" />
        </div>
    )
}

export default MainMenu