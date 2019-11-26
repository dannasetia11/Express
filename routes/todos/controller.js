const { todo: todos } = require("../../models");

module.exports = {
  getAll: (req, res) => {
    res.send(todos);
  },
  getById: (req, res) => {
    const findOne = todos.find(items => {
      return items.id === Number(req.params.id);
    });
    res.send(findOne);
  },
  deleteOne: (req, res) => {
    let newTodo = todos.filter(item => item.id !== parseInt(req.params.id));
    res.send(newTodo);
  }
};
