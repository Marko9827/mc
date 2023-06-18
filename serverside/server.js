const express = require("express"),
  app = express(),
  mysql = require("mysql"),
  cors = require("cors");

  app.use(cors());
  app.options('*', cors());

  const api = process.env.API_URL;
 
  
 