import { grilledRollsMenu, makiMenu, nigiri5ksMenu, nigiriMenu, specialRollsMenu, sushiSetsMenu, tempuraRollMenu } from "../../../data/menu"
import MenuSection from "../MenuSection"

const SushiMenu = () => {
    return (
        <div className="flex flex-col ">
            <MenuSection category="MAKI" lsMenu={makiMenu} title="Menu of MAKI" />
            <MenuSection category="MANIGIRI 2KS" lsMenu={nigiriMenu} title="Menu of MANIGIRI" />
            <MenuSection category="SASHIMI 5KS" lsMenu={nigiri5ksMenu} title="Menu of SASHIMI" />
            <MenuSection category="SMAŽENÉ SUSHI 8KS" lsMenu={tempuraRollMenu} title="Menu of SMAŽENÉ SUSHI" />
            <MenuSection category="SUSHI ROLL 8KS" lsMenu={specialRollsMenu} title="Menu of SUSHI ROLL" />
            <MenuSection category="GRILOVANÝ SUSHI" lsMenu={grilledRollsMenu} title="Menu of GRILOVANÝ SUSHI" />
            <MenuSection category="SUSHI SET" lsMenu={sushiSetsMenu} title="Menu of SUSHI SET" />
        </div>
    )
}

export default SushiMenu