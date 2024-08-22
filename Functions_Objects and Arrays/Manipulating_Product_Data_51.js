//a)Define the Array of Products:
const products = [
    { id: 1, name: 'Banana', price: 14.99, category: 'Fruit' },
    { id: 2, name: 'Apple', price: 2.49, category: 'Fruit' },
    { id: 3, name: 'Bread', price: 32.99, category: 'Bakery' },
    { id: 4, name: 'Milk', price: 11.49, category: 'Food' },
    { id: 5, name: 'biscut', price: 3.49, category: 'Food' },
    { id: 6, name: 'graps', price: 1.49, category: 'fruit' },


];
//b)Define the displayProducts Function:
function displayProducts(Products) {
    Products.forEach((item) => {
        console.log(`${item.name} -$${item.price}`);
    })

}
console.log(displayProducts(products));

//c)Calculate and Display Products with Tax:

const tax = 0.10;
const productsWithTax = products.map((product) => {
    return {
        'id': product.id, 'name': product.name, 'price': (product.price +( (10 * product.price) / 100)).toFixed(2) ,'category': product.category
    }     
})
console.log(productsWithTax);

//d)Filter and Display Food Products:

const foodProducts = products.filter((product) => {
    if (product.category === 'Food') {
      return  { id: product.id, name: product.name, price: product.price, category: product.category }
    }
})
console.log(foodProducts)

//e)Find Affordable Products:

const affordableProducts = products.filter((product => product.price < 10))
console.log(affordableProducts)
    

const affordableProductsStrings = affordableProducts.map((product => {
    return `${product.name} -$${product.price.toFixed(2)}`;
}))

//f)Calculate Total Price:
let totalPriceofProduct = 0;
products.forEach((product => {
    totalPriceofProduct += product.price;
}))

console.log("total price of the products:",totalPriceofProduct)