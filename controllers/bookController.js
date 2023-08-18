const asyncHandler = require('express-async-handler');
const Book = require('../models/bookModel');
//@desc get all popular books
//@route GET /api/books
//@access public
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

//@desc get popular book based on id
//@route GET /api/books/:id
//@access public
const getSingleBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error('Book not found');
  }
  res.status(200).json(book);
});

//@desc create new popular books
//@route POST /api/books
//@access public
const createBook = asyncHandler(async (req, res) => {
  const { name, author, yearPublished, genre } = req.body;
  if (!name || !author || !yearPublished || !genre) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  const book = await Book.create({
    name,
    author,
    yearPublished,
    genre,
  });
  res.status(201).json(book);
});

//@desc update popular book based on id
//@route PUT /api/books/:id
//@access public
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error('Book not found');
  }
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBook);
});

//@desc delete popular book based on id
//@route DELETE /api/books/:id
//@access public
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error('Book not found');
  }
  await Book.remove(book);
  res.status(200).json(book);
});

module.exports = {
  getBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
