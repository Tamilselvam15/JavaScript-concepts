//a)Define the Array of Expenses:
const expenses = [
    
    { id: 1, name: 'Rent', amount: 1200.00, date: '2024-08-01', category: 'Housing', description: 'Monthly apartment rent payment' },
    { id: 2, name: 'Groceries', amount: 250.75, date: '2024-08-05', category: 'Food', description: 'Weekly grocery shopping at the local market' },
    { id: 3, name: 'Internet Bill', amount: 45.00, date: '2024-08-10', category: 'Utilities', description: 'Monthly internet service bill '},
    { id: 4, name: 'Gas', amount: 1200.00, date: '2024-08-12', category: 'Transportation', description: 'Fuel for the car' },
    { id: 5, name: 'Dining Out', amount: 75.30, date: '2024-08-15', category: 'Entertainment', description: 'Dinner at a restaurant' }

  
];


//)Create the Expense Class:
class Expanses{
    constructor(id,name,amount,category,description) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.category = category;
        this.description = description;
    }
    
}

//c)Define the displayExpenses Function:
const displayExpenses = () => {
    expenses.filter((expan => {
        return `${expan.name} - ${expan.amount}`
    }))
}

//d)Define the addExpense Function:
const addExpense = (id, name, amount, date,description) => {
    const expanse6 = new Expanses(id, name, amount, date, description);
    Expanses.push(expanse6);
} 

//e)Define the updateExpense Function:
//find Method
const updateExpense = (id,amount) => {
    expenses.find((expan => {
        if (expan.id === id) {
            expan.amount = amount;
        }
    }))
}

//map method
const updatedExpanse = (id,amount) => {
    expenses.map((expen) => {
        if (expen.id === id) {
            expen.amount = amount;
        }
    })
}

//f)Define the removeExpense Function:
const removeExpense = (id) => {
    return expenses.filter(expen => expen.id !== id);
       
}
const updatedArray = removeExpense(4);
console.log(updatedArray)



