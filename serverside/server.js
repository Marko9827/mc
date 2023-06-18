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
    const os = req.body?.os ,
      ram = req.body?.ram ,
      ssd = req.body?.ssd,
      screen = req.body?.screen ,
      networks = req.body?.networks ,
      category = req.body?.category ,
      authorId = req.body?.authorId | 0,
      price = req.body?.price ;  

    con.query(`INSERT INTO product (os, ram, ssd, screen, networks, category, authorId, price) VALUES 
    ('${os}','${ram}', '${ssd}', '${screen}', '${networks}', '${category}', '${authorId}', '${price}');`,(err,result)=>{
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

  
 