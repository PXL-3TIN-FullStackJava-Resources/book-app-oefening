export class Book{
    title: string;
    author: string;
    isbn: string;
    genre: string;
    _id?: string;
    
    constructor(title: string, author: string, isbn: string, genre: string, _id?: string){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.genre = genre;
        this._id = _id;
    }
}