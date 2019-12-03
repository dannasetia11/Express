const { todo: todos } = require("../../models");
const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: (req, res) => {
    get()
      .collection("todos")
      .find({})
      .toArray()
      .then(result => {
        res.send({ massage: "Get all dates", date: result });
      })
      .catch(error => {
        Console.log(error);
      });
  },
  getByEmail: (req, res) => {
    get()
      .collection("todos")
      .find({ email: req.params.email })
      .toArray()
      .then(result => {
        res.send({ message: "Get all datas by email", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getById: (req, res) => {
    get()
      .collection("todos")
      .findOne({ _id: objectId(req.params.id) })
      .then(result => {
        res.send({ massage: "Get One dates", date: result });
      })
      .catch(error => {
        Console.log(error);
      });
  },
  deleteAll: (req, res) => {
    get()
      .collection("user")
      .remove({})
      .then(result => {
        res.send({ massage: "Remove all data", date: result });
      })
      .catch(error => {
        Console.log(error);
      });
  },
  deleteOne: (req, res) => {
    get()
      .collection("todos")
      .deleteOne({ _id: objectId(req.params.id) })
      .then(result => {
        res.send({ massage: "Get One dates", date: result });
      })
      .catch(error => {
        Console.log(error);
      });
  },
  addOne: (req, res) => {
    get()
      .collection("todos")
      .insertOne(req.body)
      .then(result => {
        res.send({ message: "Data successfully added", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getUpdate: (req, res) => {
    const { id } = req.params;
    get()
      .collection("todos")
      .updateOne({ _id: objectId(id) }, { $set: req.body })
      .then(result => {
        res.send({
          message: `Data successfully update with id ${id}`,
          data: result
        });
      })
      .catch(error => {
        console.log("error updafate");
      });
  }
};
