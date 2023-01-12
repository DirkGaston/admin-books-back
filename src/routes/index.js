const express = require('express');

const { router: books } = require('./books');

const router = express.Router();

router.use('/books', books);

module.exports = { router };
