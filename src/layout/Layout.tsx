import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import MobileSidebar from "./MobileSidebar"

const Layout = () => {
    return (
        <>
            <Header />
            <MobileSidebar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout