import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { signature, signature2, signature3 } from "../../data/homeMenu";
import { scrollToSection } from "../../utils/scroll";
import AboutSection from "./AboutSection";
import AddressSection from "./AddressSection";
import ContactSection from "./ContactSection";
import HeroBanner from "./HeroBanner";
import MenuSection from "./MenuSection";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            scrollToSection(hash.slice(1));
        }
    }, []);

    return (
        <main>
            <Helmet>
                <title>Domů | HU'NG Restaurace</title>
                <meta name='description' content="Domov HU'NG Restaurace" />
                <meta property='og:title' content="Domů | HU'NG Restaurace" />
                <meta
                    property='og:description'
                    content="Domů HU'NG Restaurace s lahodným jídlem"
                />
            </Helmet>
            <HeroBanner />
            <AboutSection />
            <MenuSection
                image='/images/banner-1.jpg'
                title='Signature'
                section={signature}
            />
            <MenuSection
                image='/images/banner-2.jpg'
                title='Hlavní chody'
                section={signature2}
                imagePosition='left'
            />
            <MenuSection
                image='/images/banner-3.jpg'
                title='Sushi'
                section={signature3}
            />
            <AddressSection />
            <ContactSection />
        </main>
    );
};

export default Home;
