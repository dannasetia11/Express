const { user: users } = require("../../models");
const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: (req, res) => {
    get()
      .collection("users")
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
      .collection("users")
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
      .collection("users")
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
      .collection("users")
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
      .collection("users")
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
      .collection("users")
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
      .collection("users")
      .findOne({ email: req.body.email, password: req.body.password })
      .then(response => {
        const { email, firstName } = response;
        res.status(200).send({
          massage: "Login Successfully",
          data: { email, firstName }
        });
      })
      .catch(error => {
        Console.log(error);
      });
  }
};