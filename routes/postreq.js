const express=require('express')
const router=express.Router()
const fs = require('fs');
const bodyParser = require("body-parser");
//const dataPath = 'db.json' 

let HospDb = require("../db.json");

router.post("/", bodyParser.json(), (req, res) => {
  console.log('post ')
  HospDb.push(req.body);
    save();
    res.json({
      status: "success",
      stateInfo: req.body,
    });
  });

  const save = () => {
    fs.writeFile("./db.json",JSON.stringify(HospDb, null, 2),(error) => {
        if (error) {
          throw error; }
      });
  };


module.exports=router