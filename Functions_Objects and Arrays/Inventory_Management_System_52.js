//a)Define the Array of Inventory Items:
const inventory = [
    { id: 1, name: 'wood', price: 30, quantity: 3 },
    { id: 2, name: 'gril', price: 30, quantity: 13 },
    { id: 3, name: 'plates', price: 303, quantity: 10 },
    { id: 4, name: 'scale', price: 10, quantity: 2 },
    { id: 5, name: 'box', price: 20, quantity: 14 },
    { id: 6, name: 'pen', price: 5, quantity: 25 }
];

//b)Create the Product Class:
class Product{
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

//c)Define the displayProducts Function:
const displayProductFunction = () => {
    inventory.forEach((product) => {
        console.log(`${product.name} -$${product.price}`);
    })
}

//d)Define the addProduct Function:

const addProduct = () => {
    const product1 = new Product(7, 'pencil', 18, 14);
    inventory.push(product1)
}

//e)Define the updateProduct Function:
//using find method
const updateProduct = (id,quantity) => {
    inventory.find((product =>{
        if (product.id === id) {
            product.quantity = quantity;
        }
    }))
}

// using map method
const updateProductWithMap = (id,quantity) => {
    inventory.map((product) =>{
        if (product.id === id) {
            product.quantity = quantity;
        }
    })
}
//f)Define the removeProduct Function:

const removeProduct = (id) => {
    return inventory.filter(product => product.id !== id);
}

const updatedInventry = removeProduct(5);
console.log(updatedInventry);






