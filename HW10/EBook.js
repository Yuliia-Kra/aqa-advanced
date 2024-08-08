import {Book} from "./Book.js"

export class Ebook extends Book{
    constructor(title, author, publishDate, fileFormat){
        super(title,author,publishDate)
        this.fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat){
        if(fileFormat){
            this._fileFormat = fileFormat
        }
    }

    printInfo(){
        console.log(`${this.author} published ${this.title} in ${this.publishDate} year, the file format is ${this.fileFormat}`)
    }

    static createEbook(book, fileFormat){
        return new Ebook(book.title, book.author, book.publishDate, fileFormat)
    }
}
