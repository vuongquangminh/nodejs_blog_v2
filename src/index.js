const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// chỗ này chính là middleware được tích hợp sẵn trong express để có thể lấy được biến trong res.body
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template Engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body.q);
  res.send("123123");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
