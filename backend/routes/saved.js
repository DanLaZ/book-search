const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/api/books').get((req, res) => {
    Book.find()
    .then(Book => res.json(Book))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/api/books/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;