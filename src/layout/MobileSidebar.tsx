import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import Logo from "../components/common/Logo"
import { useSidebarContext } from "../context/SidebarProvider;"
import { scrollToSection } from "../utils/scroll"
import FoodoraIcon from "../components/icon/FoodoraIcon"
import WoltIcon from "../components/icon/WoltIcon"
import Bolt from "../components/icon/Bolt"

const MobileSidebar = () => {
    const { isShowSideBar, setIsShowSideBar } = useSidebarContext()
    const handleClose = () => setIsShowSideBar(false)
    const handleClick = (id: string) => () => {
        setIsShowSideBar(false)
        scrollToSection(id)
    }
    return (
        <AnimatePresence>
            {isShowSideBar && (
                <motion.div
                    className="fixed top-[var(--header-height)] left-0 bg-gray-900 z-40 w-full"
                    initial={{ opacity: 0, y: "-100%" }} // Bắt đầu từ trên
                    animate={{ opacity: 1, y: 0, height: "calc(100vh - var(--header-height))" }} // Xuống vị trí mong muốn
                    exit={{ opacity: 0, y: "-100%" }} // Thoát ra trên
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Hiệu ứng mượt mà
                    id="mobile-sidebar"
                >
                    <div className=" h-full flex items-center justify-center">
                        <div className="text-text-0 flex flex-col items-center gap-4">
                            <Logo />
                            <Link to={"/menu"} onClick={handleClose}><p>Menu</p></Link>
                            <Link to={"/#about"} onClick={handleClick('about')}><p>O nás</p></Link>
                            <Link to={"/#address"} onClick={handleClick('address')}><p>Adresa</p></Link>
                            <Link to={"/#contact"} onClick={handleClick('contact')}><p>Kontakt</p></Link>
                            <div className="flex flex-col items-center">
                                <a href="https://wolt.com/cs/cze/prague/restaurant/hung-restaurace?srsltid=AfmBOorB6eFN-145n_Ep5r0PXqqQky0ZD5_GGALGjAhVcjhvPO4xWL-E&fbclid=IwZXh0bgNhZW0CMTAAAR3n6oHneAT3tr3Ar-YKzCFa4KrWtnZ9ruIANp_-ZazZIBo47xrKJq1sURY_aem_xX9xYVg9HysFUcXCMSwAJw"
                                    target="_blank"
                                > <WoltIcon /></a>
                                <a href="https://www.foodora.cz/restaurant/ushe/hung-restaurace?fbclid=IwZXh0bgNhZW0CMTAAAR1ObIKe3lCOeDAh_XZw6pRl-Y0twOA-rpsWL2ickkU2Yncb4Y8rHh5OIQo_aem_KbgqLvFLXXYhuKWpBT9n1Q"
                                    target="_blank">
                                    <FoodoraIcon />
                                </a>
                                <a href="https://food.bolt.eu/en-US/271-prague/p/130956-hu'ng-restaurace" target="_blank">
                                    <Bolt />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileSidebar