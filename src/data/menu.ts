import { Menu } from "../interface";

export const soupsMenu: Menu = [
    {
        category: "Pekingská polévka",
        items: [
            { foodName: "Kyselo-pikantní pekingská polévka", price: 49 },
        ]
    },
    {
        category: "Kuřecí polévka",
        items: [
            { foodName: "Kuřecí polévka se zeleninou", price: 55 },
        ]
    },
    {
        category: "Thajská polévka",
        description: "Thajská polévka s masem, kokosovým mlékem, a zeleninou",
        items: [
            { foodName: "Kuřecí", price: 59 },
            { foodName: "Hovězí", price: 65 },
            { foodName: "Krevety", price: 69 },
            { foodName: "Tofu", price: 59 },
            { foodName: "Losos", price: 75 },
        ]
    },
    {
        category: "Tom-yum",
        description: "Tradiční thajská polévka",
        items: [
            { foodName: "Tofu", price: 49 },
            { foodName: "Losos", price: 65 },
        ]
    },
    {
        category: "Miso polévka",
        description: "Tradiční thajská polévka",
        items: [
            { foodName: "Tofu", price: 59 },
            { foodName: "Losos", price: 75 },
        ]
    }
];

export const appetizersMenu = [
    {
        category: "Nem ran 3ks",
        items: [
            { foodName: "Smažené jarní závitky s vepřovým masem, skleněnými nudlemi a zeleninou", quantity: "3ks", price: 99 },
        ]
    },
    {
        category: "Nem cuon 3ks",
        items: [
            { foodName: "Čerstvé letní závitky s krevetami, rýžovými nudlemi a zeleninou", quantity: "3ks", price: 119 },
        ]
    },
    {
        category: "Nem chay 6ks",
        items: [
            { foodName: "Smažené vegetariánské mini závitky", quantity: "6ks", price: 55 },
        ]
    },
    {
        category: "Tom chien 5ks",
        items: [
            { foodName: "Obalované krevety v tempuře", quantity: "5ks", price: 120 },
        ]
    },
    {
        category: "Gyoza 5ks",
        description: "Smažené taštičky, plněné masem, podávané s omáčkou",
        items: [
            { foodName: "Kuřecí", quantity: "5ks", price: 99 },
            { foodName: "Hovězí", quantity: "5ks", price: 115 },
        ]
    }
];

export const saladsMenu = [
    {
        category: "Salát Xoai",
        description: "Mangový salá",
        items: [
            { foodName: "Zelenina", price: 119 },
            { foodName: "Krevety", price: 129 },
        ]
    },
    {
        category: "Wakame salát",
        items: [
            { foodName: "Japonský salát z mořských řas", price: 89 },
        ]
    }
];

export const vietnameseNoodlesMenu = [
    {
        category: "Pho",
        description: "Tradiční vietnamská polévka s plochými rýžovými nudlemi, masem a bylinkami",
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Hovězí", price: 169 },
            { foodName: "Bo ga (Mix hovězí a kuřecí)", price: 159 },
            { foodName: "Bo tai lan (restované hovězí)", price: 179 },
        ]
    },
    {
        category: "Bun bo Hue",
        items: [
            { foodName: "Vietnamská nudlová polévka na \"Hue\" způsob, s hovězím masem, masovými kuličkami a bylinkami", price: 169 },
        ]
    },
    {
        category: "Bun bo Nam Bo",
        description: "Rýžové nudle, salát, mrkev, sójové výhonky, arašídy, smažená cibule a zálivka",
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Hovězí", price: 169 },
            { foodName: "Tofu", price: 155 },
        ]
    },
    {
        category: "Bun nem",
        items: [
            { foodName: "Smažené závitky s rýžovými nudlemi, salátem a sladkokyselou omáčkou", price: 169 },
        ]
    },
    {
        category: "Bun cha",
        items: [
            { foodName: "Grilované vepřové maso s rýžovými nudlemi, salátem a sladkokyselou omáčkou", price: 179 },
        ]
    }
];

export const udonMenu = [
    {
        category: "Restované udon nudle",
        items: [
            { foodName: "Kuřecí", price: 149 },
            { foodName: "Vepřové", price: 159 },
            { foodName: "Hovězí", price: 169 },
            { foodName: "Krevety", price: 179 },
            { foodName: "Tofu", price: 139 },
            { foodName: "Zelenina", price: 129 },
        ]
    },
    {
        category: "Udon Up",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 169 },
            { foodName: "Křupavé kuřecí stehno", price: 179 },
            { foodName: "Křupavá kachna", price: 199 },
        ]
    },
    {
        category: "Udon kari",
        description: "Udon nudle v kari polévce",
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Vepřové", price: 169 },
            { foodName: "Hovězí", price: 179 },
            { foodName: "Krevety", price: 189 },
            { foodName: "Tofu", price: 149 },
            { foodName: "Zelenina", price: 139 },
        ]
    }
];

export const noodleRiceMenu = [
    {
        category: "Pad Thai - Thajské restované nudle",
        items: [
            { foodName: "Kuřecí", price: 149 },
            { foodName: "Vepřové", price: 159 },
            { foodName: "Hovězí", price: 169 },
            { foodName: "Krevety", price: 179 },
            { foodName: "Tofu", price: 149 },
        ]
    },
    {
        category: "Com rang - Restovaná rýže",
        items: [
            { foodName: "Kuřecí", price: 129 },
            { foodName: "Vepřové", price: 139 },
            { foodName: "Hovězí", price: 149 },
            { foodName: "Krevety", price: 159 },
            { foodName: "Tofu", price: 129 },
            { foodName: "Zelenina", price: 105 },
        ]
    },
    {
        category: "Bun xao - Restované rýžové nudle",
        items: [
            { foodName: "Kuřecí", price: 129 },
            { foodName: "Vepřové", price: 139 },
            { foodName: "Hovězí", price: 149 },
            { foodName: "Krevety", price: 159 },
            { foodName: "Tofu", price: 129 },
            { foodName: "Zelenina", price: 105 },
        ]
    },
    {
        category: "My xao - Restované nudle",
        items: [
            { foodName: "Kuřecí", price: 129 },
            { foodName: "Vepřové", price: 139 },
            { foodName: "Hovězí", price: 149 },
            { foodName: "Krevety", price: 159 },
            { foodName: "Tofu", price: 129 },
            { foodName: "Zelenina", price: 105 },
        ]
    },
    {
        category: "Mien xao - Restované skleněné nudle",
        items: [
            { foodName: "Kuřecí", price: 139 },
            { foodName: "Vepřové", price: 149 },
            { foodName: "Hovězí", price: 159 },
            { foodName: "Krevety", price: 169 },
            { foodName: "Tofu", price: 139 },
            { foodName: "Zelenina", price: 115 },
        ]
    },
];

export const upMenu = [
    {
        category: "Com rang Up - Restovaná rýže s omáčkou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 159 },
            { foodName: "Křupavé kuřecí stehno", price: 169 },
            { foodName: "Křupavá kachna", price: 189 },
        ]
    },
    {
        category: "Com Up - Bílá rýže s omáčkou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 159 },
            { foodName: "Křupavé kuřecí stehno", price: 169 },
            { foodName: "Křupavá kachna", price: 189 },
        ]
    },
    {
        category: "Bun Up - Restované rýžové nudle s omáčkou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 159 },
            { foodName: "Křupavé kuřecí stehno", price: 169 },
            { foodName: "Křupavá kachna", price: 189 },
        ]
    },
    {
        category: "My Up - Restované nudle s omáčkou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 159 },
            { foodName: "Křupavé kuřecí stehno", price: 169 },
            { foodName: "Křupavá kachna", price: 189 },
        ]
    }
];

export const doXaoMenu = [
    {
        category: "Do xao",
        description: "Restované kousky masa s arašídy a rýží",
        items: [
            { foodName: "Kuřecí", price: 149 },
            { foodName: "Vepřové", price: 159 },
            { foodName: "Hovězí", price: 169 }
        ]
    },
    {
        category: "Kung Pao",
        description: "Restované kousky masa s arašídy a rýží",
        items: [
            { foodName: "Kuřecí", price: 139 },
            { foodName: "Vepřové", price: 149 },
            { foodName: "Hovězí", price: 159 },
            { foodName: "Krevety", price: 169 },
            { foodName: "Tofu", price: 139 }
        ]
    },
    { category: "Kuře Peking", items: [{ foodName: "Kuřecí maso v pekingské omáčce s rýží", price: 149 }] },
    { category: "Kuřecí po Sečuánsku", items: [{ foodName: "Pikantní a pálivé kuřecí maso se zeleninou s rýží", price: 149 }] },
    {
        category: "Pěti chutí",
        description: "Restované maso se zeleninou a rýží",
        items: [
            { foodName: "Kuřecí", price: 149 },
            { foodName: "Hovězí", price: 159 }
        ]
    },
    {
        category: "Xao thap cam",
        description: "Restované maso se zeleninou s rýží",
        items: [
            { foodName: "Kuřecí", price: 149 },
            { foodName: "Vepřové", price: 159 },
            { foodName: "Hovězí", price: 169 },
            { foodName: "Krevety", price: 179 },
            { foodName: "Tofu", price: 149 }
        ]
    },
    {
        category: "Xao sa ot",
        description: "Restované maso s citronovou trávou s rýží",
        items: [
            { foodName: "Kuřecí", price: 149 },
            { foodName: "Vepřové", price: 159 },
            { foodName: "Hovězí", price: 169 },
            { foodName: "Krevety", price: 179 },
            { foodName: "Tofu", price: 149 }
        ]
    },
    {
        category: "Osm pokladů",
        description: "",
        items: [{ foodName: "Směs hovězí, kuřecí, vepřové se zeleninou s rýží", price: 169 }]
    },
    {
        category: "Sladkokyselá",
        description: "Křupavé maso se sladkokyselou omáčkou s rýží",
        items: [
            { foodName: "Křupavá prsíčka", price: 179 },
            { foodName: "Křupavé kuřecí stehno", price: 189 },
            { foodName: "Křupavá kachna", price: 199 }
        ]
    },
    { category: "Kachna na medu", items: [{ foodName: "Křupavá kachna s medovou omáčkou s rýží", price: 209 }] },
    {
        category: "Sot Lac",
        description: "Restované maso s arašídovou omáčkou",
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Vepřové", price: 169 },
            { foodName: "Hovězí", price: 179 },
            { foodName: "Krevety", price: 189 },
            { foodName: "Tofu", price: 159 }
        ]
    },
    {
        category: "Sot Lac Up",
        description: "Křupavé maso s arašídovou omáčkou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 179 },
            { foodName: "Křupavé kuřecí stehno", price: 189 },
            { foodName: "Křupavá kachna", price: 199 }
        ]
    },
    {
        category: "Sot Xoai",
        description: "Restované maso s mangovou omáčkou",
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Vepřové", price: 169 },
            { foodName: "Hovězí", price: 179 },
            { foodName: "Krevety", price: 189 },
            { foodName: "Tofu", price: 159 }
        ]
    },
    {
        category: "Sot Xoai Up",
        description: "Křupavé maso s mangovou omáčkou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 179 },
            { foodName: "Křupavé kuřecí stehno", price: 189 },
            { foodName: "Křupavá kachna", price: 199 }
        ]
    }
];

export const chaoMenu = [
    {
        category: "Chao Nong Xao Rau Up",
        description: 'Křupavé maso s restovanou zeleninou na horké plotýnce a rýží',
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 189 },
            { foodName: "Křupavé kuřecí stehno", price: 199 },
            { foodName: "Křupavá kachna", price: 209 }
        ]
    },
    {
        category: "Chao Nong Up Xa Ot",
        description: 'Křupavé maso s citrónovou trávou na horké plotýnce s rýží',
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 189 },
            { foodName: "Křupavé kuřecí stehno", price: 199 },
            { foodName: "Křupavá kachna", price: 209 }
        ]
    },
    {
        category: "Chao Nong Xa Ot",
        description: 'Restované maso s citrónovou trávou na horké plotýnce s rýží',
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Vepřové", price: 169 },
            { foodName: "Hovězí", price: 179 },
            { foodName: "Krevety", price: 189 },
            { foodName: "Tofu", price: 159 }
        ]
    },
    {
        category: "Chao Nong Xao Rau",
        description: 'Restovaná zelenina s masem na horké plotýnce s rýží',
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Vepřové", price: 169 },
            { foodName: "Hovězí", price: 179 },
            { foodName: "Krevety", price: 189 },
            { foodName: "Tofu", price: 159 }
        ]
    }
];

export const teriyakiMenu = [
    { category: "Kuře Teriyaki", items: [{ foodName: "Křupavé kuřecí stehno s teriyaki omáčkou a rýží", price: 169 }] },
];

export const curryMenu = [
    {
        category: "Červené Kari",
        description: "Vybrané maso na červeném kari se zeleninou",
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Vepřové", price: 169 },
            { foodName: "Hovězí", price: 179 },
            { foodName: "Krevety", price: 189 },
            { foodName: "Tofu", price: 139 }
        ]
    },
    {
        category: "Žluté Kari",
        description: "Vybrané maso na žlutém kari se zeleninou",
        items: [
            { foodName: "Kuřecí", price: 159 },
            { foodName: "Vepřové", price: 169 },
            { foodName: "Hovězí", price: 179 },
            { foodName: "Krevety", price: 189 },
            { foodName: "Tofu", price: 139 }
        ]
    },
    {
        category: "Červené Kari Up",
        description: "Vybrané maso na červeném kari se zeleninou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 189 },
            { foodName: "Křupavé kuřecí stehno", price: 199 },
            { foodName: "Křupavá kachna", price: 209 }
        ]
    },
    {
        category: "Žluté Kari Up",
        description: "Vybrané maso na žlutém kari se zeleninou",
        items: [
            { foodName: "Křupavá kuřecí prsa", price: 189 },
            { foodName: "Křupavé kuřecí stehno", price: 199 },
            { foodName: "Křupavá kachna", price: 209 }
        ]
    }
];

export const makiMenu = [
    {
        category: "Maki Sake",
        description: "Maki losos",
        items: [
            { foodName: "8ks", price: 99 },
            { foodName: "16ks", price: 178 }
        ]
    },
    {
        category: "Maki Maguro",
        description: "Maki tuňák",
        items: [
            { foodName: "8ks", price: 109 },
            { foodName: "16ks", price: 189 }
        ]
    },
    {
        category: "Maki Kani",
        description: "Maki krabí",
        items: [
            { foodName: "8ks", price: 89 },
            { foodName: "16ks", price: 158 }
        ]
    },
    {
        category: "Maki Ebi",
        description: "Maki smažené krevety",
        items: [
            { foodName: "8ks", price: 99 },
            { foodName: "16ks", price: 178 }
        ]
    },
    {
        category: "Maki Kappa",
        description: "Maki okurka",
        items: [
            { foodName: "8ks", price: 79 },
            { foodName: "16ks", price: 148 }
        ]
    },
    {
        category: "Maki Avocado",
        description: "Maki avokádo",
        items: [
            { foodName: "8ks", price: 89 },
            { foodName: "16ks", price: 158 }
        ]
    },
    {
        category: "Maki Oshinko",
        description: "Maki ředkev",
        items: [
            { foodName: "8ks", price: 79 },
            { foodName: "16ks", price: 148 }
        ]
    },
    {
        category: "Sake-avo",
        description: "Losos - avokádo",
        items: [
            { foodName: "8ks", price: 105 },
            { foodName: "16ks", price: 199 }
        ]
    },
    {
        category: "Tuna-avo",
        description: "Tuňák - avokádo",
        items: [
            { foodName: "8ks", price: 115 },
            { foodName: "16ks", price: 215 }
        ]
    },
    {
        category: "Ebi-avo",
        description: "Krevety - avokádo",
        items: [
            { foodName: "8ks", price: 115 },
            { foodName: "16ks", price: 215 }
        ]
    }
];

export const nigiriMenu = [
    {
        category: "Nigiri Sake",
        description: "Nigiri losos",
        items: [
            { foodName: "Nigiri losos", price: 99 }
        ]
    },
    {
        category: "Nigiri Ebi",
        description: "Nigiri krevety",
        items: [
            { foodName: "Nigiri krevety", price: 99 }
        ]
    },
    {
        category: "Nigiri Maguro",
        description: "Nigiri tuňák",
        items: [
            { foodName: "Nigiri tuňák", price: 109 }
        ]
    },
    {
        category: "Nigiri Avocado",
        description: "Nigiri avokádo",
        items: [
            { foodName: "Nigiri avokádo", price: 79 }
        ]
    },
    {
        category: "Nigiri Unagi",
        description: "Nigiri úhoř",
        items: [
            { foodName: "Nigiri úhoř", price: 129 }
        ]
    }
];

export const nigiri5ksMenu = [
    {
        category: "5ks",
        description: "Sake",
        items: [{ foodName: "Losos", price: 299 }]
    },
    {
        description: "Sake",
        items: [{ foodName: "Tuňak", price: 319 }]
    }
];

export const tempuraRollMenu = [
    {
        category: "8ks",
        description: "Sake tempura roll",
        items: [
            { foodName: "Losos, avokádo, okurka", price: 259 },
        ]
    }
    , {
        description: "Kani tempura roll",
        items: [
            { foodName: "Krab, abokádo, okurka", price: 259 }
        ]
    }
];


export const specialRollsMenu = [
    { category: '8ks', items: [] },
    {
        category: "Sake Skin Roll",
        items: [{ foodName: "Plátky lososa, krevety, okurka", price: 259 }]
    },
    {
        category: "California Red",
        items: [{ foodName: "Krab, okurka, avokádo, kaviár", price: 185 }]
    },
    {
        category: "California Sesame",
        items: [{ foodName: "Losos, okurka, avokádo, sezam", price: 185 }]
    },
    {
        category: "Ebiten",
        items: [{ foodName: "Smažené krevety, okurka, avokádo", price: 229 }]
    },
    {
        category: "Avo Roll",
        items: [{ foodName: "Avokádo, losos, krab, okurka", price: 185 }]
    }
];

export const grilledRollsMenu = [
    {
        category: "Grilled Salmon Rolls",
        description: "Uvnitř: Losos, okurka, jarní cibulka | Vně: Grilovaný losos",
        items: [
            { foodName: "Grilled Salmon Rolls (4ks)", price: 179 },
            { foodName: "Grilled Salmon Rolls (8ks)", price: 295 }
        ]
    },
    {
        category: "Grilled Tuna Rolls",
        description: "Uvnitř: Tuňák, okurka, jarní cibulka | Vně: Grilovaný losos",
        items: [
            { foodName: "Grilled Tuna Rolls (4ks)", price: 189 },
            { foodName: "Grilled Tuna Rolls (8ks)", price: 329 }
        ]
    },
    {
        category: "Grilled Ebi Rolls",
        description: "Uvnitř: Krevetz, okurka, avokádo | Vně: Grilovaný losos",
        items: [
            { foodName: "Grilled Ebi Rolls (4ks)", price: 189 },
            { foodName: "Grilled Ebi Rolls (8ks)", price: 329 }
        ]
    }
];

export const sushiSetsMenu = [
    {
        category: "Nigiri Set",
        items: [
            { foodName: "2x losos, 2x tuňak, 2x avokádo, 2x krevety", price: 339 }
        ]
    },
    {
        category: "Mix Maki Set",
        items: [
            { foodName: "8x losos, 8x tuňak, 8x avokádo", price: 259 }
        ]
    },
    {
        category: "Vege Maki Set",
        items: [
            { foodName: "8x okurka, 8x ředkev, 8x avokádo", price: 209 }
        ]
    },
    {
        category: "Losos Set",
        items: [
            { foodName: "8x maki losos, 4x nigiri losos", price: 259 }
        ]
    },
    {
        category: "Tuňak Set",
        items: [
            { foodName: "8x maki tuňák, 4x nigiri tuňák", price: 289 }
        ]
    },
    {
        category: "Combo S33",
        items: [
            { foodName: "8ks Maki úhoř, 8ks Maki losos avokádo, 4ks Krabí California Kaviár", price: 309 }
        ]
    },
    {
        category: "Combo S34",
        items: [
            { foodName: "8ks Losos avokádo Maki, 8ks Tuňák avokádo Maki, 8ks Krevetz avokádo Maki", price: 285 }
        ]
    }
];
