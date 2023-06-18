const express = require("express"),
  app = express(),
  mysql = require("mysql"),
  cors = require("cors"),
  PORT = 3001; 
  app.use(cors());
  app.options('*', cors());

  const api = process.env.API_URL;
 
  app.use(express.json()); 
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
  });
 

  con.connect(function(err){
    if(err){
      console.log("Connection error");
    } else{
      console.log("SQL OK.");
    }
  })
  app.listen(PORT, () =>{
    console.log(`Server start at http://localhost:${PORT}/`);
  });

  
 