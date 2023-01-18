const express = require('express');

const booksController = require('../controllers/books');

const router = express.Router();

router.get('/', booksController.list);
router.get('/:id', booksController.findOne);
router.post('/', booksController.create);
router.put('/', booksController.update);
router.delete('/', booksController.remove);

module.exports = { router };
