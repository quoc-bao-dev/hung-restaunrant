import Container from "../../layout/Container"

const AddressSection = () => {
    return (
        <section className="py-10" id="address">
            <Container>
                <h2 className="font-bold text-center md:text-4xl text-2xl text-neutral-800">Adresa</h2>
                <div className="grid grid-cols-12 gap-5 mt-10">
                    <div className="md:col-start-2 md:col-span-10 col-span-12">
                        <iframe className="w-full md:h-[450px] h-[250px] rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1278.9541261955046!2d14.569241702556603!3d50.12543876084093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bed72862e0019%3A0xa05539db91392d85!2sTrabantsk%C3%A1%20373%2C%20190%2015%20Praha-Satalice%2C%20S%C3%A9c!5e0!3m2!1svi!2s!4v1739979916588!5m2!1svi!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <p className="mt-5 font-semibold text-center">Trabantská 373, 190 15 Praha - Satalice</p>
            </Container>
        </section>
    )
}

export default AddressSection