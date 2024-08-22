//a)Define and Populate the student Object:

const student = {
    name: 'Tamil',
    email: 'tamil2002selvam@gmail.com',
    age: 22,
    greet() {
        console.log(`hello!!,${student.name}`)
    },
    address: {
        country: 'india',
        city: 'ariyalur',
        pin_code:621851
    }
};
console.log(student)

//b)Update the student Object:
student.age=21
console.log(student)


//c)Add Method and Nested Object to student:

student.greet();
console.log(student.address.country);
student.address.pin_code = 641234;
console.log(student.address.pin_code)


//d)Create and Populate the friend Object:
const friend = {
    name: 'Anbu',
    Age: '22',
    Email: 'anbu@gmail.com',
    greet() {
        console.log(`hello!!,${this.name}`)
    },
    address: {
        country: 'sri lanka',
        city: 'vilupuram',
        pin_code:342342
    }
}

friend.greet();
console.log(friend)

//e)Create and Populate the topper Object:
const topper = {
    name: 'bala',
    age: 25,
    address: {
        contry: 'India',
        city: 'tamil nadu',
        pin_code:632046
    },
    greet() {
        console.log(`hello,I'm  ${this.name} from ${this.address.contry} `)
    }
}
topper.greet();
console.log(topper)


//f)Define and Use the Student Class:

class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.Name = name,
            this.Email = email,
            this.Age = age,
            this.Address = {
                country: country,
                city: city,
                pin_code: pin_code,
            };
       
    }
        greet(){
            
            return `hello,I'm  ${this.Name} from ${this.Address.country} `;
    }
    
    getFullAdress() {
        return `${this.Address.country},${this.Address.city} - ${this.Address.pin_code}`
    }

    
}

//g)Create and Log Student Objects:


const myself = new Student('tamil', 'tamil2002selvam@gmail.com', 25, 'india', 'bangalore', 454455);
const friends = new Student('anbu', 'Anbu2002selvam@gmail.com', 15, 'india', 'tamilnadu', 313575);
const other = new Student('bala', 'bala@gmail.com', 23, 'india', 'noida', 158945);
console.log(myself.greet())
console.log(myself.getFullAdress())
console.log(friends.greet())
console.log(friends.getFullAdress())
console.log(other.greet())
console.log(other.getFullAdress())


//h)Call the greet Method and getFullAddress Method on Student Objects:
