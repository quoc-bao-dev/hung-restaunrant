import {
    appetizersMenu,
    chaoMenu,
    curryMenu,
    doXaoMenu,
    noodleRiceMenu,
    saladsMenu,
    soupsMenu,
    teriyakiMenu,
    udonMenu,
    upMenu,
    vietnameseNoodlesMenu,
} from "../../../data/menu";
import MenuSection from "../MenuSection";

const MainMenu = () => {
    return (
        <div className='flex flex-col '>
            <MenuSection
                category='Polévky'
                menu={soupsMenu}
                title='Menu of Polévky'
            />
            <MenuSection
                category='Předkrmy'
                menu={appetizersMenu}
                title='Menu of Předkrmy'
            />
            <MenuSection
                category='Saláty'
                menu={saladsMenu}
                title='Menu of Saláty'
            />
            <MenuSection
                category='Vietnamská jídla'
                menu={vietnameseNoodlesMenu}
                title='Menu of Vietnamská jídla'
            />
            <MenuSection
                category='Udon nudle'
                menu={udonMenu}
                title='Udon nudle'
            />
            <MenuSection
                category='Nudle & Rizoto'
                menu={noodleRiceMenu}
                title='Nudle & Rizoto'
            />
            <MenuSection
                category='Křupavé maso'
                menu={upMenu}
                title='Menu of Křupavé maso'
            />
            <MenuSection
                category='Hlavní jídla & rýží'
                menu={doXaoMenu}
                title='Menu of Hlavní jídla & rýží'
            />
            <MenuSection
                category='Na horké plotýnce'
                menu={chaoMenu}
                title='Menu of Na horké plotýnce'
            />
            <MenuSection
                category='Teriyaki'
                menu={teriyakiMenu}
                title='Menu of Teriyaki'
            />
            <MenuSection
                category='Na kari & rýží'
                menu={curryMenu}
                title='Menu of Na kari & rýží'
            />
        </div>
    );
};

export default MainMenu;
