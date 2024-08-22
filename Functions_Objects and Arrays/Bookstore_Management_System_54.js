//a)Define the Array of Inventory Items:
const inventory = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, quantity: 5 },
    { id: 2, title: "1984", author: "George Orwell", price: 8.99, quantity: 12 },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 7.99, quantity: 7 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 9.99, quantity: 3 },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", price: 12.99, quantity: 10 }
]

//b)Create the Book Class:
class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

}

//c)Define the displayBooks Function:
const displayBooks = () => {
    inventory.forEach((book => {
        return `${book.title} - ${book.author}`
    }))
}

//d)Define the addBook Function:

const addBooks = (id, title, author, price, quantity) => {
    const book = new Book(id, title, author, price, quantity);
    inventory.push(book);
} 


//e)Define the updateBook Function:
//find Method
const updateBook = (id, quantity) => {
    inventory.find((book => {
        if (book.id === id) {
            book.quantity = quantity;
        }
    }))
}

//map method
const updatedBooks = (id, quantity) => {
    inventory.map((book) => {
        if (book.id === id) {
            book.quantity = quantity;
        }
    })
}


//f)Define the removeBook Function:
const removeBook = (id) => {
    return inventory.filter(book => book.id !== id);

}
const updatedArray = removeBook(4);
console.log(updatedArray)