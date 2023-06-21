const express = require("express"),
  app = express(),
  mysql = require("mysql"),
  cors = require("cors"),
  PORT = 3001,
  path = require("path"),
  multer = require("multer"),
  morgan = require("morgan");
app.use(cors());

app.options("*", cors());
require("dotenv/config");

const api = process.env;

app.use(express.json());
app.use(morgan("tiny"));
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mc",
  password: "Nikolicmarko9827**",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection error");
  } else {
    console.log("SQL OK.");
  }
});

const flname = Date.now() + "-";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});
app.get("/productsk/:ram", (req, res) => {
  const id = req.params.ram;

  con.query("SELECT * FROM product where ram=?", id, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/productsf", (req, res) => {
  const { id , tsStandard , os, ram  } = req.query;
   
 

    con.query(`SELECT * FROM product where ram='${ram}' OR os='${os}' OR id='${id}' OR tsStandard='${tsStandard}' ORDER BY price DESC`,
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});
app.get("/products/", (req, res) => {
  con.query(
    "SELECT * FROM product ORDER BY price DESC",
    function (err, result, fields) {
      res.send(result);
    }
  );
});
app.post("/product_add", upload.single("imagefile"), (req, res) => {
  const os = req.body?.os,
    ram = req.body?.ram,
    ssd = req.body?.ssd,
    screen = req.body?.screen,
    networks = req.body?.networks,
    category = req.body?.category,
    tsStandard = req.body?.tsStandard,
    authorId = req.body?.authorId | 0,
    price = req.body?.price,
    description = req.body?.description,
    name = req.body?.name;
  if (!req.file) {
    return res.send("Error :( - Upload image.");
  } else {
    con.query(
      `INSERT INTO product (name, os, ram, ssd, screen, networks, category, authorId, price, image, tsStandard, description) VALUES 
    ('${name}','${os}','${ram}', '${ssd}', '${screen}', '${networks}', '${category}', '${authorId}', '${price}', '${req.file?.filename}', '${tsStandard}','${description}');`,
      (err, result) => {
        if (err) {
          res.send("Error :(");
          console.log(err);
        } else {
          res.send("OK");
        }
      }
    );
  }
});
app.use(express.static("public/images"));
app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}/`);
});
