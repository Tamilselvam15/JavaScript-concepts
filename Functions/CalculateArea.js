
//a)Calculate Area Function:
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10))

//b)Modify Calculate Area Function with Default Values:
function calculateAreaWithDefaults() {
    let width = 5;
    let height = 10;
    return width * height;
}

console.log(calculateAreaWithDefaults());

//c)Rewrite Calculate Area as a Function Expression:

const calculateAreaFunction = function (width,height) {
    return width * height;

}
console.log(calculateAreaFunction(5, 10));


//d)Rewrite Calculate Area as an Arrow Function:

const calculateAreaArrow = (width,height) => {
    return width * height;

}
console.log(calculateAreaArrow(5, 10));