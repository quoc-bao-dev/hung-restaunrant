import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import Logo from "../components/common/Logo"
import { useSidebarContext } from "../context/SidebarProvider;"
import { scrollToSection } from "../utils/scroll"

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
                            <Link to={"/#about"} onClick={handleClick('about')}><p>About</p></Link>
                            <Link to={"/#address"} onClick={handleClick('address')}><p>Address</p></Link>
                            <Link to={"/#contact"} onClick={handleClick('contact')}><p>Contact</p></Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileSidebar