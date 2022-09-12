const productList =
    [
        {
            id: 1,
            title: "Silla Teca",
            category: "sillas",
            price: 2100,
        },
        {
            id: 2,
            title: "Silla Cesca",
            category: "sillas",
            price: 2200,
        }, {
            id: 3,
            title: "Sofa Bubble",
            category: "sillones",
            price: 2300,
        }
    ];

const productData =
    [
        {
            id: 1,
            title: "Silla Teca",
            category: "sillas",
            price: 2100,
            desc: "Silla de madera Teka, no fabricada en alguna fabrica clandestina",
            colors: ["Madera","Madera oscura"]
        },
        {
            id: 2,
            title: "Silla Cesca",
            category: "sillas",
            price: 2200,
            desc: "Silla de diseñador Breuer",
            colors: ["Blanco","Negro", "Natural"]
        }, {
            id: 3,
            title: "Sofa Bubble",
            category: "sillones",
            price: 2300,
            desc: "Como no amar a este sillon, vale mas que Argentina pero tiene forma de burbujas",
            colors: ["Verde","Crema"]
        }
    ];
const products = {
    productList,
    productData
}

export default products;