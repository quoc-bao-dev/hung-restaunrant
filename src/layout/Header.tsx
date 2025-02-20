import { Link } from "react-router-dom"
import HamburgerButton from "../components/common/HamburgerButton"
import Logo from "../components/common/Logo"
import FoodoraIcon from "../components/icon/FoodoraIcon"
import WoltIcon from "../components/icon/WoltIcon"
import { useSidebarContext } from "../context/SidebarProvider;"
import { scrollToSection } from "../utils/scroll"
import Container from "./Container"
import Bolt from "../components/icon/Bolt"

const Header = () => {
    const { setIsShowSideBar, isShowSideBar } = useSidebarContext()

    return (
        <header className="fixed top-0 z-50 w-screen">
            <div className="h-[var(--header-height)] bg-bg-0 text-text-0">
                <Container >
                    <div className="relative flex justify-between h-full  items-center">
                        {/* left */}
                        <div className="hidden md:flex gap-6 items-center ">
                            <Link to="/" onClick={() => scrollToSection('home')}><p className="font-medium text-lg hover:text-text-1 transition-all duration-300">Domů</p></Link>
                            <Link to="/#about" onClick={() => scrollToSection('about')}><p className="font-medium text-lg hover:text-text-1 transition-all duration-300">O nás</p></Link>
                            <Link to="/#signature" onClick={() => scrollToSection('signature')}><p className="font-medium text-lg hover:text-text-1 transition-all duration-300">Podpis</p></Link>
                            <Link to="/#address" onClick={() => scrollToSection('address')}><p className="font-medium text-lg hover:text-text-1 transition-all duration-300">Adresa</p></Link>
                            <Link to="/#contact" onClick={() => scrollToSection('contact')}><p className="font-medium text-lg hover:text-text-1 transition-all duration-300">Kontakt</p></Link>
                        </div>
                        {/* left */}

                        {/* Logo */}
                        <div className="md:absolute md:left-1/2 md:-translate-x-1/2"><Link to={"/"}><Logo /></Link></div>
                        {/* Logo */}

                        {/* right */}
                        <div className="hidden md:flex gap-5 items-center">
                            <Link to="/menu"><p className="font-medium text-lg hover:text-text-1 transition-all duration-300">Menu</p></Link>
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
                        {/* right */}


                        {/* mobile */}
                        <span className="md:hidden" onClick={() => setIsShowSideBar(!isShowSideBar)}>
                            <HamburgerButton />
                        </span>
                        {/* mobile */}
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header