import {Book} from '../models/index.js'

export const addBook = async (book) => Book.create(book);

export const findBookById = async (id) => Book.findByPk(id);