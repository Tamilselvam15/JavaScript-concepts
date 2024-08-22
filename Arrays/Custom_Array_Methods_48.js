
//a)forEachArray Function:
function forEachArray(array, callback) {
    if (!Array.isArray(array) || typeof callback !== 'function') {
        throw new TypeError("Invalid Arguments");
    }

    for (let i = 0; i < array.length; i++){
        callback(array[i], i)
        console.log(array[i], i)
    }
}

const numbers = [1, 2, 3, 4, 5];
forEachArray(numbers, function (number, index) {
    console.log(`Element at index ${index}: ${number}`);
});

//b)mapArray Function:

function mapArray(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}

const number = [1, 2, 3, 4, 5];
const squaredNumbers = mapArray(number, function (num) {
    return num * num;
});

console.log(squaredNumbers); 

//c)filterArray Function:
function filterArray(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

// Example usage
const numberss = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numberss, function (number) {
    return number % 2 === 0; 
});

console.log(evenNumbers); 






