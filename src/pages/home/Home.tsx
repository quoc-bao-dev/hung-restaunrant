import { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { signature, signature2, signature3 } from "../../data/homeMenu";
import { scrollToSection } from "../../utils/scroll";
import React from "react";
import Loading from "../../components/common/Loading";
const AboutSection = React.lazy(() => import("./AboutSection"));
const AddressSection = React.lazy(() => import("./AddressSection"));
const ContactSection = React.lazy(() => import("./ContactSection"));
const HeroBanner = React.lazy(() => import("./HeroBanner"));
const MenuSection = React.lazy(() => import("./MenuSection"));

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
            <Suspense fallback={<Loading />}>
                <HeroBanner />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <AboutSection />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <MenuSection
                    image='/images/banner-1.jpg'
                    title='Signature'
                    section={signature}
                />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <MenuSection
                    image='/images/banner-2.jpg'
                    title='Hlavní chody'
                    section={signature2}
                    imagePosition='left'
                />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <MenuSection
                    image='/images/banner-3.jpg'
                    title='Sushi'
                    section={signature3}
                />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <AddressSection />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <ContactSection />
            </Suspense>
        </main>
    );
};

export default Home;
