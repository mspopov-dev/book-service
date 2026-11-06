import * as bookService from '../services/book.service.js';

export const addBook = async (req, res, next) => {
    try {
        const added = await bookService.addBook(req.body);
        return res.json(added);
    } catch (e) {
        return next(e);
    }
}

export const findBookByIsbn = async (req, res, next) => {
    try {
        const book = await bookService.findBookByIsbn(req.params.isbn);
        return res.json(book);
    } catch (e) {
        return next(e);
    }
}

export const removeBook = async (req, res, next) => {
    try {
        const book = await bookService.removeBook(req.params.isbn);
        return res.json(book);
    } catch (e) {
        return next(e);
    }
}

export const updateBookTitle = async (req, res, next) => {
    try {
        const book = await bookService.updateBookTitle(req.params.isbn, req.params.title);
        return res.json(book);
    } catch (e) {
        return next(e);
    }
}

export const findBooksByAuthor = async (req, res, next) => {
    try {
        const books = await bookService.findBooksByAuthor(req.params.author);
        return res.json(books);
    } catch (e) {
        return next(e);
    }
}

export const findBooksByPublisher = async (req, res, next) => {
    try {
        const books = await bookService.findBooksByPublisher(req.params.publisher);
        return res.json(books);
    } catch (e) {
        return next(e);
    }
}

export const findBookAuthors = async (req, res, next) => {
    try {
        const authors = await bookService.findBookAuthors(req.params.isbn);
        return res.json(authors);
    } catch (e) {
        return next(e);
    }
}

export const findPublishersByAuthor = async (req, res, next) => {
    try {
        const publishers = await bookService.findPublishersByAuthor(req.params.author);
        return res.json(publishers);
    } catch (e) {
        return next(e);
    }
}

export const removeAuthor = async (req, res, next) => {
    try {
        const author = await bookService.removeAuthor(req.params.author);
        return res.json(author);
    } catch (e) {
        return next(e);
    }
}
