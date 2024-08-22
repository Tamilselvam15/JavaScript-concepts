//a)Define the Array of People:
const people = [{ 'name': 'tamil', 'age': 18 }, { 'name': 'selvam', 'age': 45 }, { 'name': 'Anbu', 'age': 15 }, { 'name': 'bala', 'age': 23 }, { 'name': 'mani', 'age': 20 }]

//b)Define the calculateAverageAge Function Using forEach:

function calculateAverageAge(people){
    let sumOfAges = 0;
    let total_Count = 0;
    let average = 0;
    people.forEach((person) => {
        sumOfAges += person.age;
        total_Count+=1;
        average = sumOfAges / total_Count;
    })
    return average;
}


//c)Call the calculateAverageAge Function:
console.log('Average Age is:',calculateAverageAge(people))

