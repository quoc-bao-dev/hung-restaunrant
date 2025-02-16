import Container from "../../layout/Container"

const AddressSection = () => {
    return (
        <section className="py-10" id="address">
            <Container>
                <h2 className="font-bold text-center md:text-4xl text-2xl text-neutral-800">Address</h2>
                <div className="grid grid-cols-12 gap-5 mt-10">
                    <div className="md:col-start-2 md:col-span-10 col-span-12">
                        <iframe
                            className="w-full md:h-[450px] h-[250px] rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6028871933293!2d106.68808447584166!3d10.76636725940309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c5b0b567b%3A0xc1a8f2db8eecbb60!2zQmVuIFRow6BuaCwgVMOibiBIb8OgIE3hu5lpLCBIb8OgIE3hu5lpLCBIw7JhIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <p className="mt-5 font-semibold text-center">Trabantská 373, 190 15 Praha - Satalice</p>
            </Container>
        </section>
    )
}

export default AddressSection