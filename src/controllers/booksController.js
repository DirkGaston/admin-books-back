const booksService = require('../services/booksService');

const list = async (req, res) => {
  const booksList = booksService.list();
  return res.status(200).send(booksList)
}

module.exports = {
  list
}
