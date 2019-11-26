const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));
app.use("/todo", require("./routes/todos"));
app.use("/user", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`This app listening on PORT: ${PORT}`);
});
