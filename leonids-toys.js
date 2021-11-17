const toys = [
    
    {
        id: 1,
        name: "Paddle Ball Omega 4 - Extreme Edition",
        maker: "Paddle Ball Inc. Ltd.",
        color: "yellow",
        price: 9.99,
        weight: 2,
        stock: 4,
        operatingSystem: "PadBL 3"
    },

    {
        id: 2,
        name: "Hasbro Furby Connect Friend, Orange",
        maker: "Hasbro",
        model: "Connect Friend",
        color: "orange",
        weight: "Lovable",
        price: 129.99,
        stock: 1
    },

    {
        id: 3,
        name: "Death Metal Susie",
        maker: "Fluff n' Love Ltd.",
        color: "black and red",
        style: "Plush",
        audioEnabled: true,
        weight: 2,
        stock: 10,
        price: 19.99
    }
]

const ball = {
    id: 4,
    name: "Pink Round Ball",
    maker: "We Make Balls",
    color: "pink",
    bouncy: true,
    weight: 3.4,
    stock: 14,
    price: 5
}

const frisbee = {
    id: 5,
    name: "Frisbee",
    maker: "Frisbee Co.",
    color: "frisbee blue",
    weight: 0.5,
    stock: 13,
    price: 9.99
}

toys.push(ball);
toys.push(frisbee);

for (toy of toys) {
    toy.price += toy.price * 0.05;
    console.log(`The ${toy.color} ${toy.name} is $${toy.price}.`);
}