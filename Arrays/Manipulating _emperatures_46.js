//a)Define and Initialize the Array:
const temperatures = [-3, 14, 22, 5, -10]

//b)Iterate and Log Using forEach():

temperatures.forEach(function(temp){
    console.log(temp)
})
console.log("------------------------------------------------------------------------------------")
temperatures.forEach((temper) => {
    console.log(temper)
})
console.log("------------------------------------------------------------------------------------")


temperatures.forEach(function (temp) {
    console.log(temp*9/5)+32
})

console.log("------------------------------------------------------------------------------------")

temperatures.forEach((temp) => {
    console.log(temp*9/5)+32
})

//c)Iterate and Create a New Modified Array Using map():


temperaturesInFahrenheit = []
temperatures.map((temp) => {

    temperaturesInFahrenheit.push(temp * 9 / 5) + 32
    console.log(temperaturesInFahrenheit)
})

//d)Iterate and Create a New Filtered Array Using filter():

const belowFreezing = []
temperatures.filter(function (low) {
    if (low < 0){
       belowFreezing.push(low) 
    }
})
console.log(belowFreezing)

//arrow function:

temperatures.filter((low) => {
    if (low < 0) {
        belowFreezing.push(low) 
    }
})
console.log(belowFreezing)

