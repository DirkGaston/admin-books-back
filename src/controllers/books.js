const booksService = require('../services/books');

const list = async (req, res) => {
  try {
    const booksList = await booksService.list();
    return res.status(200).send(booksList);
  } catch (err) {
    console.error(err);
    res.status(500).send([]);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await booksService.findOne(id);
    res.status(200).send(book);
  } catch (err) {
    console.error();
    res.status(500).send({});
  }
};

const create = async (req, res) => {
  try {
    const payload = req.body;
    const bookCreated = await booksService.create(payload);
    res.status(200).send(bookCreated);
  } catch (err) {
    console.error(err);
    res.status(500).send({});
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const bookUpdated = await booksService.update(payload);
    res.status(200).send(bookUpdated);
  } catch (err) {
    console.error(err);
    res.status(500).send({});
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await booksService.delete(id);
    res.status(204);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = {
  list,
  findOne,
  create,
  update,
  remove,
};
