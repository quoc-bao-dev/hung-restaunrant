import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import BannerSection from "./BannerSection";
import ContactSection from "../home/ContactSection";

const Menu = () => {
    return (
        <main>
            <Helmet>
                <title>Menu | HU'NG Restaurant</title>
                <meta name="description" content="Menu of HU'NG Restaurant" />
                <meta property="og:title" content="Menu | HU'NG Restaurant" />
                <meta property="og:description" content="Menu of HU'NG Restaurant with delicious food" />
            </Helmet>
            <BannerSection />
            <Outlet />
            <div className="bg-[#1e2326]">
                <ContactSection />
            </div>
        </main>
    )
}

export default Menu