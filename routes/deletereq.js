
const express=require('express')
const router=express.Router()
const fs = require('fs');

//const dataPath = 'db.json' 
let HospDb = require("../db.json");

router.delete("/:name", (req, res) => {
  HospDb = HospDb.filter((hosp) => hosp.name !== req.params.name);
    save();
    res.json({
      status: "success",
      removed: req.params.name,
      newLength: HospDb.length,
    });
  });

  router.delete("/", (req, res) => {
  res.send("select a hospital name to delete ")
  });

  const save = () => {
    fs.writeFile("./db.json",JSON.stringify(HospDb, null, 2),(error) => {
        if (error) {
          throw error; }
      });
  };



 module.exports=router