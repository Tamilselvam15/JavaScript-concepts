//a)Define and Initialize the Array:
const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

//b)Iterate and Log Using forEach():
numbers.forEach((number) => {
    console.log(number*2)
})

//c)Iterate and Create a New Modified Array Using map():

//function Expression
suaredNumbers1 = []
squaredNumbers = []

numbers.map(function (square) {
    suaredNumbers1.push(square * square)
    
})
console.log(suaredNumbers1)

//using  Arrow Function

numbers.map((squa) => {
    squaredNumbers.push(squa*squa)
})
console.log(squaredNumbers)

//d)Iterate and Create a New Filtered Array Using filter():
// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0
// })
// console.log(evenNumbers )

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); 
