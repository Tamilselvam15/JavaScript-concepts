//a)Define the Book Class:
class Book {
    constructor(title, author, publisher, year, genre) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
    }
    //b)Add Methods to the Book Class:

    describe() {
        return `${this.title} - ${this.author} (${this.year})`
    }
    displayGenre() {
        return `Genre:${this.genre}`
    }
}


//c)Create and Log book Objects:

const classicBook = new Book('Pride and Prejudice', 'Jane Austen', 'T. Egerton', 1813, 'Classic')
const sciFiBook = new Book('Dune ', 'Frank Herber', 'Chilton', 1965, 'Science Fiction')

console.log(classicBook)
console.log(sciFiBook)

//d)Call Methods on book Objects:
console.log(classicBook.describe())
console.log(classicBook .displayGenre())

console.log(sciFiBook.describe())
console.log(sciFiBook. displayGenre())

