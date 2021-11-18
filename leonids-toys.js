//create my arrays
const toyPrices = new Map();
//create toys array for inventory
const toys = [];

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
const addToyToInventory = (inventoryArray, toyObject, price) => {
	//make id of 1 if the inventory array is empty. If it is not empty use code to make the most up to date id number
	if (inventoryArray.length === 0) {
		toyObject.id = 1;
	} else {
		//get index of highest id'd array object
		const lastIndex = inventoryArray.length - 1;
		// get the object
		const currentLastToy = inventoryArray[lastIndex];
		//get its id
		const currMaxId = currentLastToy.id;
		//put it on the new toy but plus 1
		toyObject.id = currMaxId + 1;
	}
	//add price to map
	toyPrices.set(toyObject, price);
	//add to to inventory
	inventoryArray.push(toyObject);
};
addToyToInventory(toys, paddleBall, 9.99);
addToyToInventory(toys, furby, 129.99);
addToyToInventory(toys, doll, 19.99);
addToyToInventory(toys, ball, 5);
addToyToInventory(toys, frisbee, 9.99);

for (let [toy, price] of toyPrices) {
	price += price * 0.05;
	console.log(`The ${toy.color} ${toy.name} is $${price}.`);
}

const removeProduct = (inventoryArray, idToRemove) => {
	for (const item of inventoryArray) {
		if (item.id === idToRemove) {
			inventoryArray.splice(inventoryArray.indexOf(item), 1);
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
