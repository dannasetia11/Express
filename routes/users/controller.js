const { todo: todos } = require("../../models");
const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: (req, res) => {
    get()
      .collection("user")
      .find({})
      .toArray()
      .then(result => {
        res.send({ massage: "Get all dates", date: result });
      })
      .catch(error => {
        Console.log(error);
      });
  },
  getById: (req, res) => {
    get()
      .collection("user")
      .findOne({ _id: objectId(req.params.id) })
      .then(result => {
        res.send({ massage: "Get One dates", date: result });
      })
      .catch(error => {
        Console.log(error);
      });
  },
  deleteOne: (req, res) => {
    get()
      .collection("user")
      .deleteOne({ _id: objectId(req.params.id) })
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
  addOne: (req, res) => {
    get()
      .collection("user")
      .insertOne(req.body)
      .then(result => {
        res.send({ message: "Data successfully added", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getUpdate: (req, res) => {
    get()
      .collection("user")
      .updateOne({ _id: objectId(req.params.id) }, { $set: req.body })
      .then(result => {
        res.send({ message: "Data Update", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getlogin: (req, res) => {
    get()
      .collection("user")
      .findOne({ email: body.email, password: body.password })
      .then(result => {
        res.send({ massage: "login belum berhasil", date: result });
      })
      .catch(error => {
        Console.log(error);
      });
  }
};
