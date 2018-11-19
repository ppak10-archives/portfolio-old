const Todo = require('../models').todo;

module.exports = {
  async list(req, res) {
    try {
      const result = await Todo.all();
      res.status(200).send(result)
    } catch (err) {
      res.status(400).send(err);
    }
  }
};
