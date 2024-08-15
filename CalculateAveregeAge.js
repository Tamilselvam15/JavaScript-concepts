function calculateAverageAge(people) {
    let totalage = 0;
    let count = 0;

    people.forEach(person => {
        totalage += person.Age;
        count++;
    });

    return totalage / count
} 



const people = [{ name: 'Tamil', Age: 22 },
    { name: 'selva', Age: 22 },
    { name: 'anbu', Age: 22 },
    { name: 'mani', Age: 21 },
    { name: 'naveen', Age: 21 },
    { name: 'bala', Age: 26 },
    { name: 'hari', Age: 13 }
];

const average = calculateAverageAge(people);

console.log(Math.floor(average));