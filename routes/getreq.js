const express=require('express')
const router=express.Router()

const fs = require('fs');

//const dataPath = 'db.json' 
let HospDb = require("../db.json");
    
router.get("/", (req, res) => {
   // res.json(HospDb);
   console.log('get all details request');
       
    fs.readFile('db.json', (err, data) => {
      if (err) throw err;
      let HData = JSON.parse(data);
      res.send(HData);
      //console.log(student);
  });
});
  
  router.get("/:name", (req, res) => {
    const findHosp = HospDb.find((hosp) => hosp.name === req.params.name);
    if (!findHosp) {
      res.status(404).send(`Hospital with name ${req.params.name} was not found`);
    } else {
      res.json(findHosp);
    }  
  });
   

    module.exports=router