//a)Define the Array of Cart Items:

const cart = [
    { 'name': 'tamil', 'price': 50, 'quantity': 1 },
    { 'name': 'selvam', 'price': 55, 'quantity': 4 },
    { 'name': 'anbu', 'price': 40, 'quantity': 5 },
    { 'name': 'bala', 'price': 15, 'quantity': 3 }
];

//b)Define the calculateTotalPrice Function Using forEach:

function calculateTotalPrice(cart) {
    let total_price = 0;
    cart.forEach((item) => {
        let cost = item.price * item.quantity;
        total_price += cost;
    
    })
    return total_price;
}

//c)Call the calculateTotalPrice Function:
console.log('Total price of the Items:', calculateTotalPrice(cart));