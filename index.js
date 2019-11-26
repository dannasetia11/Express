const express = require("express");
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  res.status(201).json({
    massage: "New item is add",
    data: {
      Firstname: req.body.firstName,
      Lastname: req.body.lastName,
      Email: req.body.email,
      Password: req.body.password
    }
  });
});

app.get("/pertama", (req, res) => {
  res.sendStatus(404).send("File not Found");
});
app.get("/kedua", (req, res) => {
  res.redirect(301, "/ketiga");
});

app.get("/ketiga", (req, res) => {
  const dates = [1, 2, 3];
  res.json({ data: dates });
});
app.get("/keempat", (req, res) => {
  res.download("./programing.jpg", "background.jpg");
});
app.get("/pertama/:name", (req, res) => {
  res.send({
    name: req.params.name
  });
});

app.get("/", (req, res) => res.send((massage = "get")));
app.get("/:id", (req, res) => console.log("GET ONE"));
app.put("/", (req, res) => console.log("UPDATE"));
app.put("/:id", (req, res) => console.log("UPDATE ONE"));
app.delete("/", (req, res) => console.log("DELETE"));
app.delete("/:id", (req, res) => console.log("DELETE ONE"));
app.patch("/", (req, res) => console.log("PATCH"));
app.patch("/:id", (req, res) => console.log("PATCH ONE"));

app.listen(PORT, () => {
  console.log(`This app listening on PORT: ${PORT}`);
});
