const express = require("express"),
  app = express(),
  mysql = require("mysql"),
  cors = require("cors"),
  PORT = 3001,
  morgan = require('morgan');
  app.use(cors());
 

  app.options('*', cors());
  require('dotenv/config');

  const api = process.env;
 
  app.use(express.json()); 
  app.use(morgan('tiny'))
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mc",
    password: "Nikolicmarko9827**"
  });
 

  con.connect(function(err){
    if(err){
      console.log("Connection error");
    } else{
      console.log("SQL OK.");
    }
  })
  
  
  
  
  
  
  
  app.post('/product_add',(req,res)=>{
    const os = req.body?.os | "",
      ram = req.body?.ram | 0,
      ssd = req.body?.ssd | 0,
      screen = req.body?.screen | "00x00",
      network = req.body?.networks | "",
      category = req.body?.category | "",
      published = req.body?.published | "",
      authorId = req.body?.authorId | 0,
      price = req.body?.price | 0;  

    con.query(`INSERT INTO product (os, ram, ssd, screen, networks, category, authorId, price) VALUES 
    ('${os}','${ram}', '${ssd}', '${screen}', '${network}', '${category}', '${authorId}', '${price}');`,(err,result)=>{
        if(err){
          res.send("Error :(");
          console.log(err);
        } else{
          res.send("OK");
        }
    });
  });
  app.listen(PORT, () =>{
    console.log(`Server start at http://localhost:${PORT}/`);
  });

  
 