import Container from "../../layout/Container"

const ContactSection = () => {
    return (
        <section className="py-10" id="contact">
            <Container>
                <div className="p-10 rounded-lg bg-gray-700">
                    <div className="grid grid-cols-12 gap-4">
                        {/* contact */}
                        <div className="col-span-12 md:col-span-3">
                            <h3 className="text-lg font-bold text-white text-center md:text-left"> Kontakt</h3>
                            <div className="pt-2">
                                <ul className=" flex flex-col gap-2 text-white">
                                    <li>
                                        <p><span className="font-medium text-sm">Tel:</span> 776 509 577</p>
                                        <p><span className="font-medium text-sm"> Adresa:</span> Trabantská 373, 190 15 Praha - Satalice</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* contact */}

                        {/* Open */}
                        <div className="col-span-12 md:col-span-3">
                            <h3 className="text-lg font-bold text-white text-center md:text-left"> Rezervace</h3>
                            <div className="pt-2">
                                <ul className=" flex flex-col gap-2 text-white text-sm">
                                    <li>
                                        <p>Pro rezervaci prosím volejte na tel: 776 509 577</p>
                                        <p>Trabantská 373, 190 15 Praha - Satalice
                                            Po - Ne 9:00 - 21:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Open */}

                        {/* info */}
                        <div className="col-span-12 md:col-span-6">
                            <h3 className="text-lg font-bold text-white text-center">Hung Restaurace – Chuť Asie v srdci Česka</h3>
                            <p className="pt-2 text-white text-sm">
                                Objevte tradiční vietnamskou, thajskou a japonskou kuchyni připravovanou s láskou a čerstvými surovinami. Jsme rodinná restaurace s přátelskou atmosférou, kde každý pokrm vypráví příběh naší vášně. Přijďte ochutnat a užít si nezapomenutelný gastronomický zážitek!
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