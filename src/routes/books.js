const express = require('express');

const booksController = require('../controllers/books');

const router = express.Router();

router.get('/', booksController.list);
router.get('/:id', booksController.findOne);
router.post('/', booksController.create);
router.put('/', booksController.create);
router.delete('/', booksController.create);

module.exports = { router };
