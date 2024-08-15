function areaOfRectangle(length, width) {
    return length * width;
}
function areaOfCircle(radius) {
    return 3.14 * radius ^ 2;
}
function areaOfTrinangle(base, height) {
    return 0.5 * base * height;
}

function calculatePaintingCost(dimention1, dimension2, calculateArea) {
    const area = calculateArea(dimention1, dimension2);
    const costPerUnit = 2;
    const totalCost = area * costPerUnit;
    return totalCost;
}


console.log(calculatePaintingCost(5, 10, areaOfRectangle));
console.log(calculatePaintingCost(5, null, areaOfCircle));
console.log(calculatePaintingCost(5, 10, areaOfTrinangle));


