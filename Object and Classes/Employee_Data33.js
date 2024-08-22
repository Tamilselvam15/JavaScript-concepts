//a)Define the Employee Class:

class Employee{
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }

    introduce() {
        return `Hello ,I am ${this.name},${this.position}`  //b)Add Methods to the Employee Class:

    }
    displaySalary() {                                     //b)Add Methods to the Employee Class:
        return `Salary :$ ${this.salary}`
    }
}

//c)Create and Log employee Objects:

const newEmployee = new Employee('Ravi', 'Ravichandran@gmail.com', 23,'computer', 'web development', '60,000')
console.log(newEmployee)

const manager = new Employee('anbu', 'anbu@gmail.com', 23, 'MBA', 'Manager ', '1,00,000')
console.log(manager)

//d)Call Methods on employee Objects:

console.log(newEmployee.introduce())
console.log(newEmployee.displaySalary())

console.log(manager.introduce())
console.log(manager.displaySalary())