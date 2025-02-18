import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import { menu } from "../../data/menu"
import { scrollToSection } from "../../utils/scroll"
import AboutSection from "./AboutSection"
import AddressSection from "./AddressSection"
import ContactSection from "./ContactSection"
import HeroBanner from "./HeroBanner"
import MenuSection from "./MenuSection"


const Home = () => {

    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            scrollToSection(hash.slice(1))
        }
    }, [])

    return (
        <main>
            <Helmet>
                <title>Home | HU'NG Restaurant</title>
                <meta name="description" content="Home of HU'NG Restaurant" />
                <meta property="og:title" content="Home | HU'NG Restaurant" />
                <meta property="og:description" content="Home of HU'NG Restaurant with delicious food" />
            </Helmet>
            <HeroBanner />
            <AboutSection />
            <MenuSection image="/images/banner-1.avif" title="Podpis" menu={menu} foodName="Pho" />
            <MenuSection image="/images/banner-1.avif" title="Sushi" menu={menu} foodName="Pho" imagePosition="left" />
            <AddressSection />
            <ContactSection />
        </main>
    )
}

export default Home