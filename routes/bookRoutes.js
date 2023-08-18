const express = require('express');
const router = express.Router();
const {
  getBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

router.use(validateToken);
router.route('/').get(getBooks).post(createBook);
router.route('/:id').get(getSingleBook).put(updateBook).delete(deleteBook);

module.exports = router;
