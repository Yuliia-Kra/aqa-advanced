import { Book } from "./Book.js";
import { Ebook } from "./EBook.js";

// TASK 1.1
const book1 = new Book("\"The Godfather\"", "Mario Puzo", 1969)
const book2 = new Book("\"Romeo and Juliet\"", "William Shakespeare", 1597)
const book3 = new Book("\"The Picture of Dorian Gray\"", "Oscar Wilde", 1890)

book1.printInfo()
book2.printInfo()
book3.printInfo()

//TASK 1.2
const ebook = new Ebook("\"Around the World in 80 Days\"", "Jules Verne", 1872, "pdf")
ebook.printInfo()

//TASK 1.3
book2.title = "TEST"
book3.author = "Someone"
const author = book1.author
ebook.fileFormat = "png"
const fileFormat = ebook.fileFormat

//TASK 1.4
let oldestBook = Book.getOldestBook([book1, book3, ebook, book2]) 
console.log(oldestBook)

//TASK 1.5
let newBook = Ebook.createEbook(book3, "pdf")
console.log(newBook)
