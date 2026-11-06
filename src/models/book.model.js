import Author from './author.model.js';

export default class Book {
    constructor({isbn, title, authors = [], publisher}) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors.map(author => new Author(author));
        this.publisher = publisher;
    }
}
