export const signature: {
    foodName: string;
    description?: string;
    menu: { description?: string; foodName: string; price: number }[];
}[] = [
        {
            foodName: "Pho",
            description: "Tradiční vietnamská polévka s plochými rýžovými nudlemi, masem a bylinkami",
            menu: [
                { foodName: "Hovězí", price: 169 },
                { foodName: "Bo tai lan (restované hovězí)", price: 179 }
            ]
        }
        ,
        {
            foodName: "Bun bo Hue",
            description: "Vietnamská nudlová polévka na \"Hue\" způsob, s hovězím masem, masovými kuličkami a bylinkami",
            menu: [
                { foodName: "Bun bo Hue", price: 169 }
            ]
        }
        ,
        {
            foodName: "Bun bo Nam Bo",
            description: "Rýžové nudle, salát, mrkev, sójové výhonky, arašídy, smažená cibule a zálivka",
            menu: [
                { foodName: "Hovězí", price: 169 }
            ]
        }
        , {
            foodName: "Bun nem",
            description: "Smažené závitky s rýžovými nudlemi, salátem a sladkokyselou omáčkou",
            menu: [
                { foodName: "Bun nem", price: 169 }
            ]
        }
        ,
        {
            foodName: "Bun cha",
            description: "Grilované vepřové maso s rýžovými nudlemi, salátem a sladkokyselou omáčkou",
            menu: [
                { foodName: "Bun cha", price: 179 }
            ]
        }
    ];


export const signature2: {
    foodName: string;
    description?: string;
    menu: { description?: string; foodName: string; price: number }[];
}[] = [
        {
            foodName: "Kachna na medu",
            description: "Křupavá kachna s medovou omáčkou a rýží",
            menu: [
                { foodName: "Kachna na medu", price: 209 }
            ]
        },
        {
            foodName: "Červené Kari",
            description: "Vybrané maso na červeném kari se zeleninou",
            menu: [
                { foodName: "Hovězí červené kari", price: 179 },
                { foodName: "Krevety červené kari", price: 189 }
            ]
        },
        {
            foodName: "Com rang - Restovaná rýže",
            description: "Restovaná rýže s výběrem masa, tofu nebo zeleniny",
            menu: [
                { foodName: "Hovězí restovaná rýže", price: 149 },
                { foodName: "Krevety restovaná rýže", price: 159 }
            ]
        },
        {
            foodName: "Restované udon nudle",
            description: "Udon nudle restované s výběrem masa, tofu nebo zeleniny",
            menu: [
                { foodName: "Hovězí restované udon nudle", price: 169 },
                { foodName: "Krevety restované udon nudle", price: 179 }
            ]
        }
    ];


export const signature3: {
    foodName: string;
    description?: string;
    menu: { description?: string; foodName: string; price: number }[];
}[] = [
        {
            foodName: "Losos Set",
            menu: [
                { foodName: "8x maki losos, 4x nigiri losos", price: 259 }
            ]
        },
        {
            foodName: "Nigiri Set",
            menu: [
                { foodName: "2x losos, 2x tuňak, 2x avokádo, 2x krevety", price: 339 }
            ]
        },
        {
            foodName: "California Sesame",
            menu: [
                { foodName: "Losos, okurka, avokádo, sezam", price: 185 }
            ]
        },
        {
            foodName: "Grilled Ebi Rolls",
            description: "Uvnitř: Krevetz, okurka, avokádo | Vně: Grilovaný losos",
            menu: [
                { foodName: "Grilled Ebi Rolls (4ks)", price: 189 },
                { foodName: "Grilled Ebi Rolls (8ks)", price: 329 }
            ]
        },

        {
            foodName: "Nigiri Sushi",
            description: "Sushi Nigiri s rýží dole a plátkem čerstvých mořských plodů nahoře.",
            menu: [
                { foodName: "Nigiri losos", price: 160 },
                { foodName: "Nigiri tuňak", price: 170 }
            ]
        }
    ];