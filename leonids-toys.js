//create my arrays
const toyPrices = new Map();
//create toys array for inventory
const toys = new Set();

//my toys to add to the inventory
const paddleBall = {
	name: "Paddle Ball Omega 4 - Extreme Edition",
	maker: "Paddle Ball Inc. Ltd.",
	color: "yellow",
	price: 9.99,
	weight: 2,
	stock: 4,
	operatingSystem: "PadBL 3",
};

const furby = {
	name: "Hasbro Furby Connect Friend, Orange",
	maker: "Hasbro",
	model: "Connect Friend",
	color: "orange",
	weight: "Lovable",
	stock: 1,
};

const doll = {
	name: "Death Metal Susie",
	maker: "Fluff n' Love Ltd.",
	color: "black and red",
	style: "Plush",
	audioEnabled: true,
	weight: 2,
	stock: 10,
};

const ball = {
	name: "Pink Round Ball",
	maker: "We Make Balls",
	color: "pink",
	bouncy: true,
	weight: 3.4,
	stock: 14,
};

const frisbee = {
	name: "Frisbee",
	maker: "Frisbee Co.",
	color: "frisbee blue",
	weight: 0.5,
	stock: 13,
};

// add the toys to inventory and the price to the price map
const addToyToInventory = (inventorySet, toyObject, price) => {
	//make id of 1 if the inventory array is empty. If it is not empty use code to make the most up to date id number
	if (inventorySet.size === 0) {
		toyObject.id = 1;
	} else {
		//find highest id
        let curMaxId = 0;
        for (const toy of inventorySet) {
            if (toy.id > curMaxId) {
                curMaxId = toy.id;
            }
        }
		toyObject.id = curMaxId + 1;
	}
	//add price to map
	if (!toyPrices.has(toyObject)) {
		toyPrices.set(toyObject, price);
	}
	//add to to inventory
	inventorySet.add(toyObject);
};

// Add the toys!
addToyToInventory(toys, paddleBall, 9.99);
addToyToInventory(toys, furby, 129.99);
addToyToInventory(toys, doll, 19.99);
addToyToInventory(toys, ball, 5);
addToyToInventory(toys, frisbee, 9.99);
addToyToInventory(toys, paddleBall, 10000000);

for (let [toy, price] of toyPrices) {
	price += price * 0.05;
	console.log(`The ${toy.color} ${toy.name} is $${price}.`);
}

const removeProduct = (inventorySet, idToRemove) => {
	for (const item of inventorySet) {
		if (item.id === idToRemove) {
			inventorySet.delete(item);
			toyPrices.delete(item);
		}
	}
};

removeProduct(toys, 2);
console.log(toys);
console.log(toyPrices);

//Perry Scope Work
const currentInventory = [
	"Muscle Man",
	"Dora the Scientist",
	"Princess Sparkles",
	"Perry Scope",
	"Explorer Backpack",
	"Space Scout Suit",
	"Geology Mineral Dig Kit",
	"Perry Scope",
];

const sellPerryScope = () => {
	let availableForPurchase;
	for (const toy of currentInventory) {
		if (toy === "Perry Scope") {
			availableForPurchase = true;
		}
	}

	if (availableForPurchase) {
		console.log("Enjoy your new Perry Scope");
	}
};

sellPerryScope();
