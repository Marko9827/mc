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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    db(null, "public/upload");
  },
  filename: (req, file, cb) => {
    db(
      null,
      file.filename + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.get("/products/:id",(req,res) =>{
  const id = req.params.id;
  con.query("SELECT * FROM product where id=?",id,function( err,result){
      if(err){
        console.log(err);
      } else {
        res.send(result);
      }
  });
});
app.get("/products/",(req,res)=>{
  con.query("SELECT * FROM product ORDER BY price DESC",function(err,result, fields){
      res.send(result);
  });
})
app.post("/product_add", upload.single("image"), (req, res) => {
  const os = req.body?.os,
    ram = req.body?.ram,
    ssd = req.body?.ssd,
    screen = req.body?.screen,
    networks = req.body?.networks,
    category = req.body?.category,
    authorId = req.body?.authorId | 0,
    price = req.body?.price;
  const image = req.file?.filename | "";

  con.query(
    `INSERT INTO product (os, ram, ssd, screen, networks, category, authorId, price, image) VALUES 
    ('${os}','${ram}', '${ssd}', '${screen}', '${networks}', '${category}', '${authorId}', '${price}', ${image});`,
    (err, result) => {
      if (err) {
        res.send("Error :(");
        console.log(err);
      } else {
        res.send("OK");
      }
    }
  );
});
app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}/`);
});
