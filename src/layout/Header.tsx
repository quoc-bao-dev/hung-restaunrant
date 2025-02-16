import { Link } from "react-router-dom"
import HamburgerButton from "../components/common/HamburgerButton"
import Logo from "../components/common/Logo"
import InstagramIcon from "../components/icon/InstagramIcon"
import TwitterIcon from "../components/icon/TwitterIcon"
import { useSidebarContext } from "../context/SidebarProvider;"
import Container from "./Container"

const Header = () => {
    const { setIsShowSideBar, isShowSideBar } = useSidebarContext()
    return (
        <header className="fixed top-0 z-50 w-screen">
            <div className="h-[var(--header-height)] bg-bg-0 text-text-0">
                <Container >
                    <div className="relative flex justify-between h-full  items-center">
                        {/* left */}
                        <div className="hidden md:flex gap-10 items-center ">
                            <Link to="/">About</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/#address">Address</Link>
                        </div>
                        {/* left */}

                        {/* Logo */}
                        <div className="md:absolute md:left-1/2 md:-translate-x-1/2"><Link to={"/"}><Logo /></Link></div>
                        {/* Logo */}

                        {/* right */}
                        <div className="hidden md:flex gap-5 items-center">
                            <Link to="/#address">Contact</Link>
                            <Link to="/"><InstagramIcon /></Link>
                            <Link to="/"><TwitterIcon /></Link>
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