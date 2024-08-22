//a)Define and Initialize the Array:
const fruits = ["apple", "banana", "cherry", "date"]

//b)Iterate and Log Using forEach():
//function Expression
fruits.forEach(function (fruit) {
    console.log(fruit.toUpperCase())
})

//arrow Function
fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase())
})

//c)Calculate Total Characters Using forEach():

//function Expression
let totalCharacters = 0;
fruits.forEach(function (fruit) {
    totalCharacters += fruit.length
})
console.log(totalCharacters)


//Arrow Function
fruits.forEach((fruit) => {
    totalCharacters += fruit.length;
})
console.log(totalCharacters)

//d)Iterate and Create a New Modified Array Using map():
//function Expression
const reversedFruits = []
fruits.map(function (fruit) {
    reversedFruits.push(fruit.split('').reverse().join(''))
})
console.log(reversedFruits);

//Arrow Function
fruits.map((fruit) => reversedFruits.push(fruit.split('').reverse().join('')))
console.log(reversedFruits);

//e)Iterate and Create a New Filtered Array Using filter():
//function Expression
const longFruits=[]
fruits.filter(function (fruit) {
    if (5 < fruit.length) {
        longFruits.push(fruit)
    }
})
console.log(longFruits)

//Arrow Function
fruits.filter((fruit) => fruit.length > 5).forEach(fruit => longFruits.push(fruit))
console.log(longFruits)

//f)Create a New Filtered and Modified Array using filter() and map():
const aFruits = []
const aFruitsUpper =[]
fruits.filter(function (fruit) {
    if (fruit.includes('a')) {
        aFruits.push(fruit);

    }
 })
aFruits.map(function (fruit) {
    aFruitsUpper.push(fruit.toUpperCase());
})
console.log(aFruitsUpper);