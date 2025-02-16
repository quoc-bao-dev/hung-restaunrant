import AboutSection from "./AboutSection"
import AddressSection from "./AddressSection"
import ContactSection from "./ContactSection"
import HeroBanner from "./HeroBanner"
import MenuSection from "./MenuSection"

const menu = [
    { foodName: "Hot Pho", price: 24 },
    { foodName: "Hot Pho", price: 24 },
    { foodName: "Hot Pho Hot Pho", price: 24 },
    { foodName: "Hot Pho", price: 24 },
    { foodName: "Sushi", price: 15 },
    { foodName: "Ramen", price: 12 }
]
const Home = () => {
    return (
        <main >
            <HeroBanner />
            <AboutSection />
            <MenuSection image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="Signature" menu={menu} foodName="Pho" />
            <MenuSection image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="Sushi" menu={menu} foodName="Pho" imagePosition="left" />
            <AddressSection />
            <ContactSection />
        </main>
    )
}

export default Home