const router = require('express').Router();
let Book = require('../models/book.model');


router.route('/api/books').post((req, res) => {

  const title = req.body.title;
  const authors = req.body.authors;
  const description = req.body.authors;
  const image = req.body.authors;
  const link = req.body.authors;

  const newBook = new Book({
    title,
    authors,
    description,
    image,
    link,
  });

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;