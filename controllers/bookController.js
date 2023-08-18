const asyncHandler = require('express-async-handler');
//@desc get all popular books
//@route GET /api/books
//@access public
const getBooks = asyncHandler((req, res) => {
  res.status(200).json({ message: 'get all books' });
});

//@desc get popular book based on id
//@route GET /api/books/:id
//@access public
const getSingleBook = asyncHandler((req, res) => {
  res.status(200).json({ message: `get book ${req.params.id}` });
});

//@desc create new popular books
//@route POST /api/books
//@access public
const createBook = asyncHandler((req, res) => {
  const { name, author, yearPublished, genre } = req.body;
  if (!name || !author || !yearPublished || !genre) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  res.status(201).json({ message: 'create books' });
});

//@desc update popular book based on id
//@route PUT /api/books/:id
//@access public
const updateBook = asyncHandler((req, res) => {
  res.status(200).json({ message: `update book ${req.params.id}` });
});

//@desc delete popular book based on id
//@route DELETE /api/books/:id
//@access public
const deleteBook = asyncHandler((req, res) => {
  res.status(200).json({ message: `delete book ${req.params.id}` });
});

module.exports = {
  getBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
