import Container from "../../layout/Container"

const ContactSection = () => {
    return (
        <section className="py-10" id="contact">
            <Container>
                <div className="p-10 rounded-lg bg-gray-700">
                    <div className="grid grid-cols-12 gap-4">
                        {/* contact */}
                        <div className="col-span-12 md:col-span-3">
                            <h3 className="text-lg font-bold text-white text-center md:text-left"> Contact</h3>
                            <div className="pt-2">
                                <ul className=" flex flex-col gap-2 text-white">
                                    <li>
                                        <p><span className="font-medium">Address:</span> Trabantská 373, 190 15 Praha - Satalice</p>
                                        <p><span className="font-medium">Address:</span> Trabantská 373, 190 15 Praha - Satalice</p>
                                        <p><span className="font-medium">Address:</span> Trabantská 373, 190 15 Praha - Satalice</p>
                                        <p><span className="font-medium">Address:</span> Trabantská 373, 190 15 Praha - Satalice</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* contact */}

                        {/* Open */}
                        <div className="col-span-12 md:col-span-3">
                            <h3 className="text-lg font-bold text-white text-center md:text-left"> Open</h3>
                            <div className="pt-2">
                                <ul className=" flex flex-col gap-2 text-white">
                                    <li>
                                        <p><span className="font-medium">Open:</span> 9:00 - 21:00</p>
                                        <p><span className="font-medium">Open:</span> 9:00 - 21:00</p>
                                        <p><span className="font-medium">Open:</span> 9:00 - 21:00</p>
                                        <p><span className="font-medium">Open:</span> 9:00 - 21:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Open */}

                        {/* info */}
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="text-lg font-bold text-white text-center">Hung restaurant</h3>
                            <p className="pt-2 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolores. Quae, autem! Quos, dolores. Quae, autem! Quos, dolores. Quae, autem!
                            </p>
                        </div>
                        {/* info */}


                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactSection