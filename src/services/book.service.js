import * as bookRepository from '../repository/book.repository.js';
import Book from '../models/book.model.js';

export const addBook = async (bookDto) => {
    if (await bookRepository.existsByIsbn(bookDto.isbn)) {
        return false;
    }
    await bookRepository.createBook(new Book(bookDto));
    return true;
}

export const findBookByIsbn = async (isbn) => {
    const book = await bookRepository.findBookByIsbn(isbn);
    if (!book) {
        throw new Error(`Book with isbn ${isbn} not found`);
    }
    return book;
}

export const removeBook = async (isbn) => {
    const book = await bookRepository.deleteBookByIsbn(isbn);
    if (!book) {
        throw new Error(`Book with isbn ${isbn} not found`);
    }
    return book;
}

export const updateBookTitle = async (isbn, title) => {
    const book = await bookRepository.updateTitle(isbn, title);
    if (!book) {
        throw new Error(`Book with isbn ${isbn} not found`);
    }
    return book;
}

export const findBooksByAuthor = async (authorName) => bookRepository.findBooksByAuthor(authorName);

export const findBooksByPublisher = async (publisherName) => bookRepository.findBooksByPublisher(publisherName);

export const findBookAuthors = async (isbn) => {
    const book = await findBookByIsbn(isbn);
    return book.authors;
}

export const findPublishersByAuthor = async (authorName) => bookRepository.findPublishersByAuthor(authorName);

export const removeAuthor = async (authorName) => {
    const author = await bookRepository.findAuthorByName(authorName);
    if (!author) {
        throw new Error(`Author ${authorName} not found`);
    }
    await bookRepository.deleteAuthor(authorName);
    return author;
}
