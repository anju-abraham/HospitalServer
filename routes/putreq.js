

const bodyParser = require("body-parser");
const express=require('express')
const router=express.Router()
const fs = require('fs');

//const dataPath = 'db.json' 
let HospDb = require("../db.json");

router.put("/:name", bodyParser.json(), (req, res) => {

      const foundHosp = HospDb.find((hosp) => hosp.name === req.params.name);
      if (!foundHosp) {
        res.status(404).send(" hospital with name not found");
      } else {

        HospDb = HospDb.map((hosp) => {
      if (hosp.name === req.params.name) {
        return req.body;
      } else {
        return hosp;
      }
    });
    save();
  
    res.json({
      status: "success",
      stateInfo: req.body,
    });

  }

  });


  router.put("/", bodyParser.json(), (req, res) => {
     res.send("select a hospital name to update")

  });

  const save = () => {
    fs.writeFile("./db.json",JSON.stringify(HospDb, null, 2),(error) => {
        if (error) {
          throw error; }
      });
  };





module.exports=router