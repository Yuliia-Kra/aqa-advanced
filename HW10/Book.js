export class Book {
    
    constructor(title, author, publishDate){
        this._title = title
        this._author = author
        this._publishDate = publishDate
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get publishDate() {
        return this._publishDate;
    }

    set title(title){
        if(title){
            this._title = title
        }
    }

    set author(author){
        if(author){
            this._author = author
        }
    }

    set publishDate(publishDate){
        if(Number.isInteger(publishDate) && publishDate > 0){
            this._publishDate = publishDate
        }
        
    }

    printInfo(){
        console.log(`${this.author} published ${this.title} in ${this.publishDate} year`)
    }

    static getOldestBook(books) {
        let oldestBook = books[0]
        for(let i = 1; i < books.length; i++){
            if(books[i].publishDate < oldestBook.publishDate){
                oldestBook = books[i]
            }
        }
        return oldestBook
    }
    
}
    
